import { Card } from '@/app/ui/dashboard/cards';
import Doctors from '@/app/lib/http/doctor';
import TopBar from '@/app/ui/dashboard/top-bar';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();

  const { total, masc, fem } = await Doctors.STATS(session?.user.token);
  const doctor = await Doctors.GET(session?.user?._id);
  return (
    <main>
      <TopBar doctor={doctor} />
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
        <Card title="Total de pacientes" value={total} type="patients" />
        <Card title="Pacientes hombres" value={masc} type="user" />
        <Card title="Pacientes mujeres" value={fem} type="user" />
      </div>
    </main>
  );
}
