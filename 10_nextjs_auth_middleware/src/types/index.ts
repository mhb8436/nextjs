export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  password?: string;
}

export interface Session {
  user: User;
  expires: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  name: string;
  confirmPassword: string;
}
