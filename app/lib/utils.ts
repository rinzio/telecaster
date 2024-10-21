import React from 'react';
import _ from 'lodash';

import * as Icons from '@/app/ui/icons';
import { HTTP } from '@/app/lib/http/axios';
import { auth } from '@/auth';

const m: Record<
  string,
  {
    speciality: string;
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  }
> = {
  cardiology: {
    speciality: 'Cardiología',
    Icon: Icons.HeartIcon,
  },
  neurology: {
    speciality: 'Neurología',
    Icon: Icons.BrainIcon,
  },
  general: {
    speciality: 'General',
    Icon: Icons.DoctorIcon,
  },
  orthopedic: {
    speciality: 'Ortopedia',
    Icon: Icons.BoneIcon,
  },
  pediatry: {
    speciality: 'Pediatría',
    Icon: Icons.ChildIcon,
  },
  odontology: {
    speciality: 'Odontología',
    Icon: Icons.ToothIcon,
  },
  ophtalmology: {
    speciality: 'Oftalmología',
    Icon: Icons.EyeIcon,
  },
  nephrology: {
    speciality: 'Nefrología',
    Icon: Icons.KidneysIcon,
  },
  otolaryngology: {
    speciality: 'Otorrinolaringología',
    Icon: Icons.NoseIcon,
  },
  pulmonology: {
    speciality: 'Neumólogía',
    Icon: Icons.LungsIcon,
  },
  hepatology: {
    speciality: 'Hepatología',
    Icon: Icons.LiverIcon,
  },
  audiology: {
    speciality: 'Audiología',
    Icon: Icons.EarIcon,
  },
  gastroenterology: {
    speciality: 'Gastroenterología',
    Icon: Icons.StomachIcon,
  },
  psichiatry: {
    speciality: 'Psiquiatría',
    Icon: Icons.MindIcon,
  },
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const getSpecialityProps = (speciality: string) => {
  return _.get(m, speciality.toLowerCase(), {
    speciality: 'General',
    Icon: Icons.DoctorIcon,
  });
};

export const formatDate = (
  dateString: string | null,
  locale: string = 'es-ES'
): string | null => {
  // TODO: change locale depending on the browser's locale
  if (_.isNull(dateString)) {
    return null;
  }

  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString(locale, options);
};

export const getFirstName = (name: string): string => {
  return name.split(/(\s+)/)[0];
};
export const setToken = async () => {
  const session = await auth();
  HTTP.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${session?.user?.token}`;
};
