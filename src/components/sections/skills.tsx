import { SKILL_CATEGORIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container id="skills">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Organized around the work I want to do: AI systems, backend
          architecture, and full-stack products.
        </Typography>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="flex flex-col gap-5 rounded-xl border border-gray-100 bg-gray-50 p-6"
          >
            <div className="flex flex-col gap-2">
              <Typography
                variant="subtitle"
                className="font-semibold text-gray-900"
              >
                {category.title}
              </Typography>
              <Typography>{category.description}</Typography>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {category.skills.map((technology) => (
                <TechDetails {...technology} key={technology.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
