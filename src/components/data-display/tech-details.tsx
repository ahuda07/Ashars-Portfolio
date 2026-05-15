import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';

const TechDetails = ({ url, icon: Icon, label }: TechDetails) => {
  const content = (
    <div className="flex min-h-[44px] items-center gap-3 rounded-lg border border-gray-200 bg-gray px-3 py-2 transition-colors duration-200 hover:bg-gray-50">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:stroke-gray-700">
        <Icon />
      </span>
      <Typography
        variant="body3"
        className="font-medium leading-tight text-gray-700"
      >
        {label}
      </Typography>
    </div>
  );

  return url ? (
    <Link noCustomization href={url} externalLink>
      {content}
    </Link>
  ) : (
    content
  );
};

export default TechDetails;
