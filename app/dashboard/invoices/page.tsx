import Doctors from '@/app/lib/http/doctor';
import TopBar from '@/app/ui/dashboard/top-bar';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();
  const doctor = await Doctors.GET(session?.user?._id);
  return (
    <main>
      <TopBar doctor={doctor} />
      <p>Invoices Page</p>
    </main>
  );
}
