import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import type { Skill } from '@/content/skills';

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card
      className="relative px-4 py-2 gap-0 mt-4 w-fit"
      style={{ gridArea: skill.id }}
    >
      <CardTitle className="absolute flex items-center font-head left-2 -top-2 px-2 bg-background w-fit">
        <skill.icon className="mr-2 size-4" />
        {skill.title}
      </CardTitle>
      <CardContent className="flex flex-col h-full justify-between py-4 px-2">
        <CardDescription className="space-x-1 space-y-1">
          {skill.tags.map((tag) => (
            <Badge
              variant={tag.isPrimary ? 'default' : 'secondary'}
              key={tag.label}
            >
              {tag.label}
            </Badge>
          ))}
        </CardDescription>
        <p className="text-balance">{skill.description}</p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
