import { HTMLAttributes, HTMLInputTypeAttribute } from 'react';

type PropsType =  HTMLAttributes<HTMLInputElement> & {
  className?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string | number;
  required?: boolean;
  maxLength?: number;
};

const Input: React.FC<PropsType> = (props) => {
  return (
    <>
      {props.label && (
        <label className='Input__label' htmlFor={props.name || props.label}>
          {props.label}
        </label>
      )}
      <input
        name={props.name}
        className={`Input ${props.className ? props.className : ''}`}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.value || ''}
        required={props.required}
        maxLength={props.maxLength}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
