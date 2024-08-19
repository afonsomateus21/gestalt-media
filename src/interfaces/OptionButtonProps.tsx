import { ButtonHTMLAttributes, ReactNode } from "react";

export interface OptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children: ReactNode;
}