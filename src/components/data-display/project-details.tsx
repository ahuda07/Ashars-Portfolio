import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  previewImageFit = 'cover',
  previewImagePosition = '50% 50%',
  previewVariant,
  featured,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  const loanFitPreview = (
    <div className="flex aspect-video w-full max-w-lg flex-col items-center justify-center gap-5 overflow-hidden rounded-xl bg-[#0f172a] px-8 py-8 shadow-lg transition-transform duration-500 md:hover:scale-105">
      <Typography
        variant="subtitle"
        className="text-center text-2xl font-bold text-transparent md:text-3xl"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #93c5fd, #f43f5e, #fb923c)',
          WebkitBackgroundClip: 'text',
        }}
      >
        Welcome to LoanFit Copilot!
      </Typography>
      <div className="w-full max-w-[230px] rounded-lg bg-gray-800/90 p-5 text-center shadow-2xl">
        <Typography
          variant="body3"
          className="font-semibold text-gray-50"
        >
          Sign in to LoanFit Copilot
        </Typography>
        <Typography variant="body3" className="mt-1 text-gray-300">
          Welcome back! Please sign in to continue
        </Typography>
        <div className="mt-4 flex flex-col gap-2">
          <div className="rounded-md bg-gray-900/60 px-3 py-2 text-xs font-medium text-gray-100">
            Continue with Google
          </div>
          <div className="rounded-md bg-gray-900/60 px-3 py-2 text-xs font-medium text-gray-100">
            Continue with GitHub
          </div>
        </div>
      </div>
    </div>
  );

  const preview = previewImage ? (
    <div className="relative aspect-video w-full max-w-lg overflow-hidden rounded-xl shadow-lg">
      <Image
        src={previewImage}
        alt={`${name} preview`}
        fill
        sizes="(min-width: 1024px) 448px, (min-width: 768px) 40vw, 90vw"
        className="transition-transform duration-500 md:hover:scale-105"
        style={{
          objectFit: previewImageFit,
          objectPosition: previewImagePosition,
        }}
      />
    </div>
  ) : previewVariant === 'loanfit' ? (
    loanFitPreview
  ) : (
    <div className="flex aspect-video w-full max-w-lg flex-col justify-between rounded-xl border border-gray-200 bg-gray p-6 shadow-lg transition-transform duration-500 md:hover:scale-105">
      <div className="flex items-center justify-between gap-4">
        <Tag label={featured ? 'Featured project' : 'Project'} />
        <Typography variant="body3" className="font-medium text-gray-500">
          Ashar Huda
        </Typography>
      </div>
      <div className="flex flex-col gap-3">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image */}
      <div
        className={mergeClasses(
          'flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l'
        )}
      >
        {url ? (
          <Link noCustomization href={url} externalLink>
            {preview}
          </Link>
        ) : (
          preview
        )}
      </div>

      {/* Content */}
      <div
        className={mergeClasses(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first'
        )}
      >
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <Tag key={index} label={technology} />
          ))}
        </div>
        {url ? (
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
          >
            <ExternalLink />
          </Link>
        ) : null}
      </div>
    </Card>
  );
};

export default ProjectDetails;
