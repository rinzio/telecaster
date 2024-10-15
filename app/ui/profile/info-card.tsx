import {
  AcademicCapIcon,
  EnvelopeIcon,
  FolderIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

export default function InfoCard({
  title,
  type,
  children,
}: {
  title: string;
  type: 'personal' | 'profesional' | 'contact' | 'files';
  children: React.ReactNode;
}) {
  const Icon = {
    personal: UserIcon,
    profesional: AcademicCapIcon,
    contact: EnvelopeIcon,
    files: FolderIcon,
  }[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <Icon className="h-5 w-5 text-gray-700" />
        <h2 className="ml-2 text-md font-medium">{title}</h2>
      </div>
      {children}
    </div>
  );
}
