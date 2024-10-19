import { lusitana } from '@/app/ui/fonts';
import { getFirstName } from '@/app/lib/utils';

import SpecialityBadge from '@/app/ui/dashboard/speciality-badge';
import _ from 'lodash';
import { Doctor } from '@/app/lib/definitions';

export default async function TopBar({ doctor }: { doctor: Doctor.Response }) {
  return (
    <div className="flex">
      <h1
        className={`${lusitana.className} flex-auto mb-4 text-xl md:text-2xl`}
      >
        {`Dr. ${getFirstName(doctor.name)} ${doctor.p_lastname}`}
      </h1>

      <SpecialityBadge of={doctor.speciality.toLowerCase()} type="title" />
    </div>
  );
}
