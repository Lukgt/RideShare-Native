import { Button, IButtonProps } from 'native-base';
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({ children, autoSize = false, color, ...rest }: ButtonProps){

  return (
    <Button
      w={autoSize ? 'auto' : '100%'}
      bg={color || '#4F008E'}
      mt={10}
      borderRadius="lg"
      {...rest}
    >
      {children}
    </Button>
  );
};