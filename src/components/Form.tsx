import React, { FormEvent, HTMLProps } from "react";

interface FormProps extends HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit, ...props }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;
