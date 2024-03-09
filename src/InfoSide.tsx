import { useState } from "react";
import EntryList from "./EntryList";
import SectionSelector from "./SectionSelector";
import { EntryMode } from "./EnumDefintion";
import './App.css';


export default function InfoSide() 
{
    const [mode, setMode] = useState(EntryMode.Project);
    return (
        <>
            <div className="infoside">
                <SectionSelector mode={mode} onModeChange={ setMode} />
                <EntryList currentMode={mode} />
            </div>
           
        </>
      
    );
}