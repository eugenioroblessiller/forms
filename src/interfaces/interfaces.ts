
export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}
export interface TextInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}