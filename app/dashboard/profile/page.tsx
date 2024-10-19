import _ from 'lodash';
import { auth } from '@/auth';

import InfoCard from '@/app/ui/profile/info-card';
import Doctors from '@/app/lib/http/doctor';

import { formatDate, getFirstName, getSpecialityProps } from '@/app/lib/utils';

import InfoDisplayBox from '@/app/ui/profile/info-display-box';
import PresentationCard from '@/app/ui/profile/presentation-card';

export default async function Page() {
  const session = await auth();
  const doctor = await Doctors.GET(session?.user?._id as never);

  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <PresentationCard
          title={`Dr. ${getFirstName(doctor.name || '')} ${doctor?.p_lastname}`}
          speciality={doctor?.speciality}
        />

        <InfoCard title="Personal" type="personal">
          <InfoDisplayBox title="Nombre" value={doctor.name} />
          <InfoDisplayBox title="Apellido paterno" value={doctor.p_lastname} />
          <InfoDisplayBox title="Apellido materno" value={doctor.m_lastname} />
          <InfoDisplayBox
            title="Fecha de nacimiento"
            value={formatDate(doctor.birthdate as string)}
          />
        </InfoCard>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 mt-4">
        <InfoCard title="Contacto" type="contact">
          <InfoDisplayBox title="Correo electrónico" value={doctor.email} />
          <InfoDisplayBox title="Celular" value={'+52 553401231'} />
          <InfoDisplayBox title="Ciudad" value={'Ciudad de México'} />
        </InfoCard>
        <InfoCard title="Profesional" type="profesional">
          <InfoDisplayBox
            title="Especialidad"
            value={getSpecialityProps(doctor.speciality || '').speciality}
          />
          <InfoDisplayBox title="Universidad" value={'UNAM'} />
          <InfoDisplayBox title="Número de cédula" value={doctor.prof_id} />
        </InfoCard>

        <InfoCard title="Documentos" type="files">
          <span>Files here</span>
        </InfoCard>
      </div>
    </main>
  );
}
