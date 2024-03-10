import './SectionSelector.css'
import { EntryMode } from './EnumDefintion';

interface SectionSelectorInterface
{
    mode: EntryMode;
    onModeChange: React.Dispatch<EntryMode>;

}
export default function SectionSelector({ mode, onModeChange }: SectionSelectorInterface)
{
    let projectEnabled = false;
    let careerEnabled = false;
    let educationEnabled = false;
    switch (mode)
    {
        case EntryMode.Project:
            {
                projectEnabled = true;
                break;
            }
        case EntryMode.Career:
            {
                careerEnabled = true;
                break;
            }
        case EntryMode.Education:
            {
                educationEnabled = true;
                break;
            }
        default:
            {
                break;
            }
    }

    function handleProjectClick()
    {
        if (onModeChange != undefined) onModeChange(EntryMode.Project);
    }
    function handleCareerClick()
    {
        if (onModeChange != undefined) onModeChange(EntryMode.Career);
    }
    function handleEducationClick()
    {
        if (onModeChange != undefined) onModeChange(EntryMode.Education);
    }

    return (
        <div className="sectionSelector_div">
            <button className="sectionSelector" disabled={ projectEnabled} onClick={ handleProjectClick}>Projects</button>
            <button className="sectionSelector" disabled={ careerEnabled} onClick={ handleCareerClick}>Career</button>
            <button className="sectionSelector" disabled={educationEnabled} onClick={handleEducationClick}>Education</button>
        </div>
    );
}