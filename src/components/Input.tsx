import { FormControl, Input as BaseInput } from 'native-base';
import { IInputProps } from 'native-base/lib/typescript/components/primitives/Input/types';

interface InputProps extends IInputProps {
  labelName: string;
}

export const Input = ({ labelName, ...props }: InputProps) => (
  <>
    <FormControl.Label _text={{ bold: true, fontSize: 16 }}>
      {labelName}
    </FormControl.Label>
    <BaseInput {...props} />
  </>
);
