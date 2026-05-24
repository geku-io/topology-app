import SelectComponent from "react-select";
import type { ISelectItem, SetStateType } from "../../../types/main.types";

interface ISelectProps {
   options: ISelectItem[];
   value: string[] | null;
   setValue: SetStateType<string[] | null>;
}

const Select = ({ options, value, setValue }: ISelectProps) => {
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
            setValue(() => {
               if (newValue.length === 0) {
                  return null;
               } else {
                  return newValue
                     .filter(item => item !== undefined)
                     .map(item => item.value);
               }
            });
         }}
      />
   );
};

export default Select;
