import { ChartPieIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function MedlyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ChartPieIcon className="h-12 w-12 rotate-[315deg]" />
      <p className="text-[44px]">Medly</p>
    </div>
  );
}
