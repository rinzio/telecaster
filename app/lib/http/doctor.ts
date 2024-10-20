import { Doctor } from '../definitions';

const BASE_URL = 'http://127.0.0.1:8000';

const GET = async (id: string): Promise<Doctor.Response> => {
  const res = await fetch(`${BASE_URL}/doctors/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};

const LIST = async (): Promise<Doctor.Response[]> => {
  const res = await fetch(`${BASE_URL}/doctors`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};

const STATS = async (
  token: string
): Promise<{ total: number; masc: number; fem: number }> => {
  const res = await fetch(`${BASE_URL}/doctors/my/patients/stats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

const POST = async (body: Doctor.Payload): Promise<Doctor.Response> => {
  const res = await fetch(`${BASE_URL}/doctors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

const DELETE = async (id: string): Promise<Doctor.Response> => {
  // Queryparams here
  const res = await fetch(`${BASE_URL}/doctors/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
};

const PATCH = async (
  id: string,
  body: Doctor.Changeset
): Promise<Doctor.Response> => {
  const res = await fetch(`${BASE_URL}/doctors/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

const Doctors = {
  GET,
  LIST,
  POST,
  PATCH,
  DELETE,
  STATS,
};

export default Doctors;
