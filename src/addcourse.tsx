import { useState} from "react";
import Data from "./assets/data.json";


const[allData, setAllData] = useState([Data]);

const [filteredData,setFilteredData] = useState(allData);


