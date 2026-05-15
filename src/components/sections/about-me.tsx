import Image from 'next/image';

import AsharMountain from '/public/images/ashar-mountain.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AsharMountain}
              alt="Ashar Huda on a mountain overlook"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover', objectPosition: '50% 38%' }}
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Software engineering, AI systems, and full-stack products.
          </Typography>
          <Typography>
            I&apos;m a Software Engineering and Informatics student at the
            University of California, Irvine, specializing in Human-Computer
            Interaction and graduating in June 2026.
          </Typography>
          <Typography>
            I&apos;m interested in AI systems, backend architecture, and
            full-stack products that turn complex workflows into usable tools.
            My recent work includes AI chat workflows, API design, database
            modeling, document upload flows, and React interfaces.
          </Typography>
          <Typography>
            My main capstone project is LoanFit CoPilot, an AI-powered loan
            assistant for loan officers. I&apos;m building the React +
            TypeScript chat UI, session persistence, MongoDB data models, and a
            FastAPI backend connected to an AI pipeline for loan application
            analysis.
          </Typography>
          <Typography>Quick bits about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Based in Irvine, CA</Typography>
              <Typography component="li">
                SWE, AI, backend, and full-stack focus
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Open to relocation</Typography>
              <Typography component="li">
                GitHub:{' '}
                <Link
                  noCustomization
                  externalLink
                  withUnderline
                  href={EXTERNAL_LINKS.GITHUB}
                >
                  ahuda07
                </Link>
              </Typography>
            </ul>
          </div>
          <Typography>
            I&apos;m always happy to connect about software engineering, AI
            engineering, backend, and full-stack opportunities.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
