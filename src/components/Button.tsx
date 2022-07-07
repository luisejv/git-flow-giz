import React from "react";
import { KeyedMutator } from "swr";
import { ApiResponse } from "../types/user";

interface ButtonProps {
  mutate?: KeyedMutator<ApiResponse>;
}

const Button: React.FC<ButtonProps> = ({ mutate = () => {} }) => {
  return <button onClick={() => mutate()}>Cambiar</button>;
};

export default Button;
