import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { profileData } from "@/data/profile";
import { Code, Database, Wrench } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-primary" />;
      case 1:
        return <Database className="w-5 h-5 text-primary" />;
      default:
        return <Wrench className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <SectionWrapper id="skills">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
            My Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-heading">
            Technologies & Tools I Use
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base">
            Technical competencies and core tools I leverage to build responsive, robust web solutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.skillCategories.map((category, catIdx) => (
            <Card
              key={category.category}
              className="border-border/60 bg-card/60 backdrop-blur-xs hover:border-primary/40 transition-all duration-300 shadow-sm"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {getCategoryIcon(catIdx)}
                  </div>
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-indigo-500 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
