import { Patient } from "../definitions";

const BASE_URL = "http://127.0.0.1:8000";

const GET = async (id: string): Promise<Patient.Response> => {
  const res = await fetch(`${BASE_URL}/patients/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const LIST = async (): Promise<Patient.Response[]> => {
  // Queryparams here
  const res = await fetch(`${BASE_URL}/patients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const POST = async (body: Patient.Payload): Promise<Patient.Response> => {
  // Queryparams here
  const res = await fetch(`${BASE_URL}/patients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

const DELETE = async (id: string): Promise<Patient.Response> => {
  // Queryparams here
  const res = await fetch(`${BASE_URL}/patients/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const PATCH = async (
  id: string,
  body: Patient.Changeset,
): Promise<Patient.Response> => {
  // Queryparams here
  const res = await fetch(`${BASE_URL}/patients/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

const Patients = {
  GET,
  LIST,
  POST,
  PATCH,
  DELETE,
};

export default Patients;
