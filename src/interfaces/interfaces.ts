
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

export interface SelectInputProps {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}