import { Card } from "@/app/ui/dashboard/cards";
import LatestPatients from "@/app/ui/dashboard/patients";


export default async function Page() {
  return (
    <main>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Citas confirmadas" value={10} type="collected" /> 
        <Card title="Citas pendientes" value={15} type="pending" />
        <Card title="En lista de espera" value={20} type="invoices" />
        <Card
           title="Total de pacientes"
           value={25}
           type="patients"
         /> 
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <LatestPatients />
      </div>
    </main>
  );
}
