import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { profileData } from "@/data/profile";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  // PRD Rule: Experience renders nothing when the list is empty, so no blank heading appears.
  if (!profileData.experience || profileData.experience.length === 0) {
    return null;
  }

  return (
    <SectionWrapper id="experience">
      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            Work Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Experience & Roles
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Professional roles and technical milestones in my frontend development career.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {profileData.experience.map((exp, index) => (
            <Card key={index} className="border-border/60 bg-card/60">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle className="text-lg font-bold flex items-center gap-2 text-foreground">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{exp.role}</span>
                    <span className="text-muted-foreground font-normal">at {exp.company}</span>
                  </CardTitle>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
