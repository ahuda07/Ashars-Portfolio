import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  organization,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  const initials = logoAlt
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
      <div className="max-md:order-1 md:w-1/4">
        {logo ? (
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={logoAlt}
            className="max-w-[120px]"
          />
        ) : (
          <div className="flex h-14 w-32 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-3 text-center text-sm font-semibold text-gray-700">
            {initials}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
        <div className="flex flex-col gap-1">
          <Typography
            variant="subtitle"
            className="font-semibold text-gray-900"
          >
            {position}
          </Typography>
          {organization ? (
            <Typography className="text-gray-700">{organization}</Typography>
          ) : null}
        </div>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
