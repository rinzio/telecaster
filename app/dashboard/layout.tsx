import SideNav from "@/app/ui/dashboard/sidenav";
import { lusitana } from "@/app/ui/fonts";
// import {
//   HeartIcon,
// } from '@heroicons/react/24/outline';
import *  as CustomIcons from "../ui/icons";

import Doctors from "../lib/http/doctor";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const doctor = await Doctors.GET("670e05abb1f0c458222ae6e9") // This must be defined by the auth token

    const specialityMap: Record<string, {speciality: string, Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element}> = {
        cardiology: {
            speciality: "Cardiología",
            Icon: CustomIcons.HeartIcon
        },
        neurology: {
            speciality: "Neurología",
            Icon: CustomIcons.BrainIcon
        },
        general: {
            speciality: "General",
            Icon: CustomIcons.DoctorIcon
        },
        orthopedic: {
            speciality: "Ortopedia",
            Icon: CustomIcons.BoneIcon
        },
        pediatry: {
            speciality: "Pediatría",
            Icon: CustomIcons.ChildIcon
        },
        odontology: {
            speciality: "Odontología",
            Icon: CustomIcons.ToothIcon
        },
        ophtalmology: {
            speciality: "Oftalmología",
            Icon: CustomIcons.EyeIcon
        },
        nephrology: {
            speciality: "Nefrología",
            Icon: CustomIcons.KidneysIcon
        },
        otolaryngology: {
            speciality: "Otorrinolaringología",
            Icon: CustomIcons.NoseIcon
        },
        pulmonology: {
            speciality: "Neumólogía",
            Icon: CustomIcons.LungsIcon
        },
        hepatology: {
            speciality: "Hepatología",
            Icon: CustomIcons.LiverIcon
        },
        audiology: {
            speciality: "Audiología",
            Icon: CustomIcons.EarIcon
        },
        gastroenterology: {
            speciality: "Gastroenterología    ",
            Icon: CustomIcons.StomachIcon
        },
    };

    const props = specialityMap[doctor.speciality.toLowerCase()] || {speciality: "General", Icon: CustomIcons.DoctorIcon};
    const { speciality, Icon } = props;

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden md:fixed md:bottom-0 md:left-0 md:z-50 md:w-full ">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <div className="flex">
                    <h1 className={`${lusitana.className} flex-auto mb-4 text-xl md:text-2xl`}>
                       {`Dr. ${doctor.name} ${doctor.p_lastname}`}
                    </h1>
                    <div className="flex">
                        <h1 className={`${lusitana.className} flex-auto mb-4 text-xl md:text-2xl`}>
                        { speciality } {/* Use som i18n solution instead or another endpoint to fetch data in browser lang */}

                        </h1>
                       <Icon className="w-6 flex-auto  ml-2" />

                    </div>

                </div>
                {children}
            </div>
        </div>
    );
}
