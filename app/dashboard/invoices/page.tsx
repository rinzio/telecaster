import Doctors from '@/app/lib/http/doctor';
import TopBar from '@/app/ui/dashboard/top-bar';
import { auth } from '@/auth';
// import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();
  if (!session) redirect('/login');
  const doctor = await Doctors.GET(session?.user?._id);
  return (
    <main>
      <TopBar doctor={doctor} />
      <p>Invoices Page</p>
    </main>
  );
}
