import { Doctor, Patient } from '@/app/lib/definitions';
import { setToken } from '@/app/lib/utils';

import { HTTP } from './axios';

await setToken();

const GET = async (id: string): Promise<Doctor.Response> => {
  const response = HTTP.get(`/doctors/${id}`);
  return (await response).data;
};

const LIST = async (): Promise<Doctor.Response[]> => {
  const response = HTTP.get('/doctors');
  return (await response).data;
};

const POST = async (body: Doctor.Payload): Promise<Doctor.Response> => {
  const response = HTTP.post('/doctors', body);
  return (await response).data;
};

const DELETE = async (id: string): Promise<Doctor.Response> => {
  const response = HTTP.delete(`/doctors/${id}`);
  return (await response).data;
};

const PATCH = async (
  id: string,
  body: Doctor.Changeset
): Promise<Doctor.Response> => {
  const response = HTTP.patch(`doctors/${id}`, body);
  return (await response).data;
};

const self = async (): Promise<Doctor.Response> => {
  const response = HTTP.get(`/doctors/my/self`);
  return (await response).data;
};

const get = async (): Promise<Patient.Response[]> => {
  const response = HTTP.get('/doctors/my/patients');
  return (await response).data;
};

const stats = async (): Promise<{
  total: number;
  masc: number;
  fem: number;
}> => {
  const response = HTTP.get('/doctors/my/patients/stats');
  return (await response).data;
};

// TODO: Add
// const addPatients = (PatientIds[]) => {};
// const removePatients = (PatientIds[]) => {};

const Patients = {
  get,
  stats,
};

const My = {
  self,
  Patients,
};

export const Doctors = {
  GET,
  LIST,
  POST,
  PATCH,
  DELETE,
  My,
};

export default Doctors;
