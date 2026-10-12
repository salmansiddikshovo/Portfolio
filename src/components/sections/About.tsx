import { MapPin, Globe, Sparkles, FolderGit2, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Passionate About Building Modern Web Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Get to know my journey, academic background, and what drives my engineering practice.
          </p>
        </div>

        {/* Bio and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Card className="border-border/60 bg-card/60 backdrop-blur-xs">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Who I Am
                </h3>
                {profileData.bio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Location</p>
                      <p>{profileData.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Languages</p>
                      <div className="flex gap-1.5 mt-0.5">
                        {profileData.languages.map((lang) => (
                          <Badge key={lang} variant="secondary" className="text-xs px-2 py-0">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <Card className="border-border/60 bg-card/60">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">3+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Learning Code</p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">20+</div>
                <p className="text-xs sm:text-sm text-muted-foreground">GitHub Repositories</p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">100%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Commitment to Growth</p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-card/60">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">CSE</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Undergraduate at DIU</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
