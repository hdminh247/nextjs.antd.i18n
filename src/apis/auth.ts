import { api, setAuthHeader } from "./axios";

// Login for normal user
export async function login(email: string, password: string): Promise<any> {
  try {
    const result = await api.post("/auth/login", { username: email, password });
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}

export async function verifyUser(token?: string) {
  // If token is defined, set it in header
  if (token) {
    setAuthHeader(token);
  }

  try {
    const result = await api.get("/auth/me");
    return result.data;
  } catch (e) {
    return {
      error: true,
      data: null,
      errors: [],
    };
  }
}
