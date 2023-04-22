import React, { ReactNode, memo } from "react";
import { CardContainer } from "./styles";

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "dark" | "light";
  children: ReactNode;
  className?: string;
}

export function CardComponent({
  children,
  variant,
  className,
  ...rest
}: ICardProps) {
  return (
    <CardContainer className={className} variant={variant} {...rest}>
      {children}
    </CardContainer>
  );
}

export const Card = memo(CardComponent);
