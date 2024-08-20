import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface OptionButtonProps extends LinkProps {
  title: string;
  children: ReactNode;
}