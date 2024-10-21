import Doctors from '@/app/lib/http/doctor';
import TopBar from '@/app/ui/dashboard/top-bar';

export default async function Page() {
  const doctor = await Doctors.My.self();
  return (
    <main>
      <TopBar doctor={doctor} />
      <p>Invoices Page</p>
    </main>
  );
}
