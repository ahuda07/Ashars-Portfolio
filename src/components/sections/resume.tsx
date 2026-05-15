import { Briefcase, Download, FileText, GraduationCap } from 'lucide-react';

import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Button from '@/components/general/button';
import Container from '@/components/layout/container';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const resumeHighlights = [
  'Full-stack AI chat workflows with React, TypeScript, FastAPI, Python, and MongoDB.',
  'Backend data modeling for sessions, chat history, document uploads, and application analysis flows.',
  'Search and ranking systems with crawling, indexing, tf-idf, HITS scoring, and near-duplicate detection.',
  'Multi-agent application workflows with structured reporting, model usage tracking, and Gradio interfaces.',
];

const ResumeSection = () => {
  return (
    <Container className="bg-gray-50" id="resume">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Resume" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          A quick CV snapshot for software engineering, AI engineering,
          backend, and full-stack roles.
        </Typography>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6 rounded-xl border border-gray-100 bg-gray p-6">
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-gray-700">
              <GraduationCap />
            </span>
            <div className="flex flex-col gap-2">
              <Typography
                variant="subtitle"
                className="font-semibold text-gray-900"
              >
                Education
              </Typography>
              <Typography>
                University of California, Irvine
                <br />
                B.S. in Software Engineering and Informatics
                <br />
                Specialization in Human-Computer Interaction
                <br />
                Expected June 2026
              </Typography>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-gray-700">
              <Briefcase />
            </span>
            <div className="flex flex-col gap-2">
              <Typography
                variant="subtitle"
                className="font-semibold text-gray-900"
              >
                Target Roles
              </Typography>
              <Typography>
                Software Engineering, AI Engineering, Backend Engineering, and
                Full-Stack Engineering. Based in Irvine, CA and open to
                relocation.
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-xl border border-gray-100 bg-gray p-6">
          <div className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 [&_svg]:h-5 [&_svg]:w-5 [&_svg]:stroke-gray-700">
              <FileText />
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Typography
                  variant="subtitle"
                  className="font-semibold text-gray-900"
                >
                  Engineering Snapshot
                </Typography>
                <ul className="flex list-disc flex-col gap-2">
                  {resumeHighlights.map((highlight) => (
                    <Typography component="li" key={highlight}>
                      {highlight}
                    </Typography>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  disabled
                  className="cursor-not-allowed bg-gray-300 text-gray-600 hover:bg-gray-300 active:bg-gray-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume PDF coming soon
                </Button>
                <Button asChild>
                  <Link
                    noCustomization
                    href={`${EXTERNAL_LINKS.EMAIL}?subject=Resume%20Request`}
                    externalLink
                  >
                    Request resume by email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResumeSection;
