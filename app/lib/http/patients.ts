import { Patient } from '../definitions';
import { HTTP } from './axios';

const GET = async (id: string): Promise<Patient.Response> => {
  const response = HTTP.get(`/patients/${id}`);
  return (await response).data;
};

const LIST = async (): Promise<Patient.Response[]> => {
  // Queryparams here
  const response = HTTP.get('patients');
  return (await response).data;
};

const POST = async (body: Patient.Payload): Promise<Patient.Response> => {
  const response = HTTP.post('/patients', body);
  return (await response).data;
};

const DELETE = async (id: string): Promise<Patient.Response> => {
  const response = HTTP.delete(`/patients/${id}`);
  return (await response).data;
};

const PATCH = async (
  id: string,
  body: Patient.Changeset
): Promise<Patient.Response> => {
  const response = HTTP.patch(`/patients/${id}`, body);
  return (await response).data;
};

const Patients = {
  GET,
  LIST,
  POST,
  PATCH,
  DELETE,
};

export default Patients;
