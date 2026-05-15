'use client';

import { useState } from 'react';
import { Copy, Mail } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

const email = 'hudaau@uci.edu';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copyTextToClipboard(email);
      setIsCopied(true);
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timeoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Reach out about software engineering, AI engineering, backend, or
          full-stack opportunities.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            <Typography
              variant="h2"
              className="break-all text-center md:break-normal"
            >
              {email}
            </Typography>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={handleCopyClick}
              showTooltip={isCopied}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You can also find me on GitHub and LinkedIn.
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
