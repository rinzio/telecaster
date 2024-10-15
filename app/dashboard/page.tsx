import { Card } from "@/app/ui/dashboard/cards";
import LatestPatients from "@/app/ui/dashboard/patients";
import { lusitana } from "@/app/ui/fonts";
import {
  HeartIcon,
} from '@heroicons/react/24/outline';


export default async function Page() {
  return (
    <main>
      <div className="flex">
          <h1 className={`${lusitana.className} flex-auto mb-4 text-xl md:text-2xl`}>
            Dr. Gregory House
          </h1>
          <div className="flex">
            <h1 className={`${lusitana.className} flex-auto mb-4 text-xl md:text-2xl`}>
              Cardiología

            </h1>
            <HeartIcon className="w-6 flex-auto mb-4 ml-2" />

          </div>

      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Citas confirmadas" value={10} type="collected" /> 
        <Card title="Citas pendientes" value={15} type="pending" />
        <Card title="En lista de espera" value={20} type="invoices" />
        <Card
           title="Total de pacientes"
           value={25}
           type="customers"
         /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <LatestPatients />
      </div>
    </main>
  );
}
