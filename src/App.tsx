import { useEffect, useRef, useState } from "react";
import NetworkTopology from "./components/NetworkTopology/NetworkTopology";
import styles from "./App.module.scss";
import { useQuery } from "@tanstack/react-query";
import { type ITopologyData } from "./types/entities.types";
import { filterData } from "./utils/dataTransformer";
import SelectTopologyType from "./components/SelectTopologyType/SelectTopologyType";

function App() {
   const originalDataRef = useRef<ITopologyData | null>(null);
   const [selectOptions, setSelectOptions] = useState<string[] | null>(null);
   const { data, isPending, isError } = useQuery<ITopologyData>({
      queryKey: ["data"],
      queryFn: async () => {
         const res = await fetch("/api");
         const data: ITopologyData = await res.json();
         const filteredData = filterData(data);
         return filteredData;
      },
   });
   useEffect(() => {
      if (data && !originalDataRef.current) {
         originalDataRef.current = data;
      }
   }, [data]);

   if (isPending) {
      return <div>Загрузка данных...</div>;
   }
   if (isError) {
      return <div>Произошла ошибка</div>;
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.select}>
            <SelectTopologyType
               originalDataRef={originalDataRef}
               value={selectOptions}
               setValue={setSelectOptions}
            />
         </div>
         {data && <NetworkTopology data={data} />}
      </div>
   );
}

export default App;
