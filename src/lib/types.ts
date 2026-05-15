import type { StaticImageData } from 'next/image';
import type { LucideIcon } from 'lucide-react';

export type TechDetails = {
  icon: LucideIcon;
  label: string;
  url?: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: TechDetails[];
};

export type ExperienceDetails = {
  logo?: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  organization?: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  previewImage?: string | StaticImageData;
  previewImageFit?: 'cover' | 'contain';
  previewImagePosition?: string;
  previewVariant?: 'loanfit';
  featured?: boolean;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
