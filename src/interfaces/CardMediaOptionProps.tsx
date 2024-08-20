import { ButtonHTMLAttributes } from "react";

export interface CardMediaOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isBlue?: boolean;
  image: string;
}