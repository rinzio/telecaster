import { Card } from '@/app/ui/dashboard/cards';
import Doctors from '@/app/lib/http/doctor';
import TopBar from '@/app/ui/dashboard/top-bar';

export default async function Page() {
  const { total, masc, fem } = await Doctors.STATS('670e05abb1f0c458222ae6e9');
  return (
    <main>
      <TopBar />
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
        <Card title="Total de pacientes" value={total} type="patients" />
        <Card title="Pacientes hombres" value={masc} type="user" />
        <Card title="Pacientes mujeres" value={fem} type="user" />
      </div>
    </main>
  );
}
