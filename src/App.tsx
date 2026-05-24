import { useState } from "react";
import NetworkTopology from "./components/NetworkTopology/NetworkTopology";
import Select from "./components/UI/select/Select";
import { topologyModes } from "./constants/topologyMode";
import styles from "./App.module.scss";

function App() {
   const [selectOptions, setSelectOptions] = useState<string[] | null>(null);
   return (
      <div className={styles.wrapper}>
         <Select
            options={topologyModes}
            value={selectOptions}
            setValue={setSelectOptions}
         />
         <NetworkTopology />
      </div>
   );
}

export default App;
