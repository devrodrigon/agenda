export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  customerId: string;
}

export interface IUpdateRequest {
  name?: string;
  email?: string;
  phone?: string;
}
