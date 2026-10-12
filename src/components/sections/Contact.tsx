"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Send, AlertCircle, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SocialLinks } from "@/components/SocialLinks";
import { useContact } from "@/hooks/useContact";
import { profileData } from "@/data/profile";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please provide a valid email address"),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { mutate, isPending } = useContact();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: ""
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I will get back to you shortly."
        });
        reset();
      },
      onError: (err) => {
        toast.error("Failed to send message", {
          description: err.message || "Please check your network and try again."
        });
      }
    });
  };

  return (
    <SectionWrapper id="contact" className="bg-muted/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Have a project in mind, a hiring opportunity, or just want to say hi? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Information & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-border/60 bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-foreground">
                  Contact Information
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Feel free to reach out directly through email or connect on social platforms.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors hover:underline"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Social Profiles
                  </p>
                  <SocialLinks links={profileData.socialLinks} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border-border/60 bg-card/60 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Honeypot field for bot suppression */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("honeypot")}
                    />
                  </div>

                  {/* Name field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="e.g. John Doe"
                      disabled={isPending}
                      aria-invalid={Boolean(errors.name)}
                      {...register("name")}
                      className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Your Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      disabled={isPending}
                      aria-invalid={Boolean(errors.email)}
                      {...register("email")}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Hi Salman, I'd like to discuss a project..."
                      disabled={isPending}
                      aria-invalid={Boolean(errors.message)}
                      {...register("message")}
                      className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-md gap-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
