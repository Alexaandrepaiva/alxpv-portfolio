"use client";

import { Card, CardContent } from "~/components/ui/card";
import { GraduationCap, Building2, CalendarRange } from "lucide-react";

interface EducationProps {
  degree: string;
  institution: string;
  period: string;
  description: string[];
}

export function Education({
  degree,
  institution,
  period,
  description,
}: EducationProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">{degree}</h3>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>{institution}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarRange className="w-4 h-4" />
              <span>{period}</span>
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
  );
}