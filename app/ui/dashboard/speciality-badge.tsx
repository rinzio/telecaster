import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import { getSpecialityProps } from '@/app/lib/utils';
import { title } from 'process';

export default function SpecialityBadge({
  of,
  type,
}: {
  of: string;
  type: 'title' | 'subtitle';
}) {
  const { speciality, Icon } = getSpecialityProps(of);
  const sizes = type === title ? 'text-xl md:text-2xl' : 'text-l md:text-xl';
  return (
    <div className="flex">
      <h1 className={`${lusitana.className} flex-auto mb-4 ${sizes}`}>
        {speciality}
        {/* Use some i18n solution instead or another endpoint to fetch data in browser lang */}
      </h1>
      <Icon className="w-6 flex-auto ml-2" />
    </div>
  );
}
