import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { profileData } from "@/data/profile";

export function Education() {
  return (
    <SectionWrapper id="education">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Academic Background
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Formal qualifications and academic progression in Computer Science and Engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileData.education.map((item, index) => (
            <Card
              key={index}
              className="border-border/60 bg-card/60 backdrop-blur-xs hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-mono">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.year}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground leading-snug">
                    {item.degree}
                  </CardTitle>
                  <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 pt-1">
                    <Building2 className="w-3.5 h-3.5 text-primary/80 shrink-0" />
                    <span>{item.institution}</span>
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 pt-2 border-t border-border/40">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="text-xs font-semibold text-foreground bg-accent/60 px-2 py-0.5 rounded-md">
                    {item.gpa}
                  </span>
                </div>
                {item.details && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.details}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
