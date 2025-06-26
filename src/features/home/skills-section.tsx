import { mySkills } from '@/content/skills';
import { SkillCard } from '@/features/home/skill-card';

export function SkillsSection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px] flex flex-col gap-4">
        <h2 className="mx-auto font-head text-2xl font-extrabold tracking-tight lg:text-3xl">
          Skills
        </h2>
        <div className="flex flex-col md:grid skills-grid">
          <img
            style={{ gridArea: 'empty' }}
            className="place-self-center hidden md:block"
            src="/images/cosmo-doodle.png"
            width="60%"
            height="60%"
          />
          <img
            style={{ gridArea: 'empty-a' }}
            className="place-self-center hidden md:block"
            src="/images/planet-doodle.png"
            width="60%"
            height="60%"
          />

          <img
            style={{ gridArea: 'empty-b' }}
            className="align-middle place-self-center hidden md:block"
            src="/images/rocket-doodle.png"
            width="50%"
            height="50%"
          />
          {mySkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
