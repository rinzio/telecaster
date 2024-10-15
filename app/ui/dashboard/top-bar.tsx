import { lusitana } from '@/app/ui/fonts';
import { getFirstName } from '@/app/lib/utils';
import Doctors from '@/app/lib/http/doctor';

import SpecialityBadge from '@/app/ui/dashboard/speciality-badge';

export default async function TopBar() {
  const doctor = await Doctors.GET('670e05abb1f0c458222ae6e9');
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
