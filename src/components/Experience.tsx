"use client";

import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { CalendarRange, Building2 } from "lucide-react";

interface ExperienceProps {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  skills: string[];
  description: string[];
  avatar?: string;
}

export function Experience({
  jobTitle,
  companyName,
  startDate,
  endDate,
  skills,
  description,
  avatar,
}: ExperienceProps) {
  const dateLabel = `${startDate} - ${endDate || "Present"}`;

  return (
    <div className="relative pl-0 md:pl-8 group mb-8">
      {/* Timeline dot - hidden on mobile */}
      <div className="absolute top-1 left-0 w-3 h-3 bg-primary rounded-full z-10 hidden md:block"></div>
      {/* Date label - visible only on desktop */}
      <div className="absolute left-6 text-black hidden md:block">
        {dateLabel}
      </div>

      <div className="pt-2">
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                {avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatar}
                    alt={`${companyName} logo`}
                    className="w-16 h-16 object-contain hidden md:block"
                  />
                )}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                    <h3 className="text-xl font-semibold">{jobTitle}</h3>
                    <span className="text-muted-foreground flex items-center gap-1 mt-1 md:mt-0">
                      <Building2 className="w-4 h-4" />
                      {companyName}
                    </span>
                  </div>

                  {/* Date label - visible only on mobile */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground md:hidden">
                    <CalendarRange className="w-4 h-4" />
                    {dateLabel}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                </div>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
