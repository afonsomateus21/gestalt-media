import { LinkProps } from "react-router-dom";

export interface CardMediaOptionProps extends LinkProps {
  title: string;
  isBlue?: boolean;
  image?: string;
  isHome?: boolean;
}