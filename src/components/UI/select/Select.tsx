import SelectComponent from "react-select";
import type { ISelectItem, SetStateType } from "../../../types/main.types";

export interface ISelectProps {
   options: ISelectItem[];
   value: string[] | null;
   setValue: SetStateType<string[] | null>;
   changeHandler?: (newValue: string[] | null) => void;
}

const Select = ({ options, value, setValue, changeHandler }: ISelectProps) => {
   console.log("inner", value);
   return (
      <SelectComponent
         options={options}
         isMulti={true}
         value={
            value
               ? value.map(val => options.find(opt => opt.value === val))
               : undefined
         }
         onChange={newValue => {
            let formattedValue: string[] | null = newValue
               .filter(item => item !== undefined)
               .map(item => item.value);
            if (formattedValue.length === 0) {
               formattedValue = null;
            }
            if (changeHandler) {
               changeHandler(formattedValue);
            }
            setValue(() => {
               if (newValue.length === 0) {
                  return null;
               } else {
                  return formattedValue;
               }
            });
         }}
      />
   );
};

export default Select;
