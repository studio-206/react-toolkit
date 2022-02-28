import React, { FormEvent } from "react";

interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
