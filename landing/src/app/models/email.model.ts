export interface IEmail {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface IEmailResponse {
  success: boolean;
  error: string;
}