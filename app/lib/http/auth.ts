import { Auth, Doctor } from "../definitions";

const BASE_URL = "http://127.0.0.1:8000";

// TODO: Validate email
const LOGIN = async (data: {email: string, password: string}): Promise<Auth.Response> => {
  const body = JSON.stringify({username: data.email, password: data.password});
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json"
    }
  });
  const resp = await res.json();
  return resp;
};

const ME = async (token: string): Promise<Doctor.Response> => {
    const res = await fetch(`${BASE_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    const resp = await res.json();
    return resp;
  };
  

const Auth_ = {
  ME, LOGIN
}

export default Auth_;
