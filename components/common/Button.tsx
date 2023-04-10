import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

const Button: React.FC<ButtonComponentPropType> = (props) => {
  return (
    <button className='Button' {...props}>
      {props.children}
    </button>
  );
};

// PARAM type
interface ButtonComponentPropType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  // [key: string]: any;
  className?: string;
  children: ReactNode;
}

export default Button;
