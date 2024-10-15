import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import SpecialityBadge from '@/app/ui/dashboard/speciality-badge';

export default function PresentationCard({
  title,
  speciality,
}: {
  title: string;
  speciality: string;
}) {
  return (
    <div className="rounded-xl bg-gray-50 pb-2 pt-6 shadow-sm">
      <div className="flex p-4 flex-col items-center">
        <Image
          height={128}
          width={128}
          src="https://picsum.photos/128" // TODO: Change this for the real image stored
          alt="Profile pic"
          className="mr-4 rounded-full"
        />
        <h2 className={`${lusitana.className} mt-6 text-md text-xl mb-4`}>
          {title}
        </h2>
        <SpecialityBadge of={speciality} type="subtitle" />
      </div>
    </div>
  );
}
