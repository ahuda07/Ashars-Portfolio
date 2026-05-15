import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1 px-4 text-center">
        <Typography
          className="flex flex-wrap items-center justify-center"
          variant="body3"
        >
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} | Ashar Huda. Built with Next.js and
          Tailwind CSS. View my work on&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB}
          >
            GitHub
          </Link>
          .
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
