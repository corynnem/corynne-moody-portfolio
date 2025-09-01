export const MAX_CHARS = 600 as const;

export type FormErrors = Partial<Record<keyof FormValues | "submit", string>>;

export interface ContactFormProps {
  onSubmit?: (values: FormValues) => Promise<void> | void;
}

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export enum FormTypes {
  Name = "name",
  Email = "email",
  Message = "message",
}

interface ValidateProps {
  formValues: FormValues;
  setErrors: (arg: FormErrors) => void;
}

export const validateForm = ({
  formValues,
  setErrors,
}: ValidateProps): boolean => {
  const { name, email, message } = formValues ?? {};
  const next: FormErrors = {};

  if (!name.trim()) next.name = "What's your name?";
  if (!email.trim()) next.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    next.email = "That email looks off";
  if (!message.trim()) next.message = "Say hello! A few words go here";
  if (message.length > MAX_CHARS)
    next.message = `Keep under ${MAX_CHARS} characters`;
  setErrors(next);
  return Object.keys(next).length === 0;
};
