import type { ISelectProps } from "../UI/select/Select";
import Select from "../UI/select/Select";
import { topologyModes } from "../../constants/topologyMode";
import type { ITopologyData } from "../../types/entities.types";
import { filterDataByMode } from "../../utils/dataTransformer";
import { queryClient } from "../../main";

interface ISelectTopologyProps extends Pick<
   ISelectProps,
   "value" | "setValue"
> {
   originalDataRef: React.RefObject<ITopologyData | null>;
}

const SelectTopologyType = ({
   setValue,
   value,
   originalDataRef,
}: ISelectTopologyProps) => {
   const changeHandler = (newValue: string[] | null) => {
      queryClient.setQueryData<ITopologyData>(["data"], prev => {
         if (!originalDataRef || !originalDataRef.current) return prev;
         if (newValue) {
            return filterDataByMode(originalDataRef.current, newValue);
         } else {
            console.log(originalDataRef.current);
            return originalDataRef.current;
         }
      });
   };
   return (
      <Select
         options={topologyModes}
         value={value}
         setValue={setValue}
         changeHandler={changeHandler}
      />
   );
};

export default SelectTopologyType;
