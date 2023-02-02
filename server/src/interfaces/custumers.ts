export interface CustomerRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUpdateRequest {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
}
