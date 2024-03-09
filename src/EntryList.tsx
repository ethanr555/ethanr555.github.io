import { ProjectEntry, CareerEntry, EducationEntry } from "./Entry";
import { useContext } from 'react';
import { PortfolioContext } from './PortfolioContext'
import './EntryList.css';
import { EntryMode } from "./EnumDefintion";

interface EntryListInter
{
    currentMode: EntryMode;
}

export default function EntryList({ currentMode }: EntryListInter)
{
    const portfolio = useContext(PortfolioContext);
    let amount = [];
    switch (currentMode)
    {
        case EntryMode.Project:
            {
                if (portfolio)
                {
                    for (let i = 0; i < portfolio.Projects.length; i++)
                    {
                        amount.push(
                            <ProjectEntry
                                name={portfolio.Projects[i].Name}
                                description={portfolio.Projects[i].Description}
                                date={portfolio.Projects[i].Date}
                                company={portfolio.Projects[i].CompanyName}
                                company_link={portfolio.Projects[i].CompanyLink}
                                code_repo={portfolio.Projects[i].CodeRepoName}
                                code_repo_link={portfolio.Projects[i].CodeRepoLink}
                                project_name={portfolio.Projects[i].ProjectSiteName}
                                project_link={portfolio.Projects[i].ProjectSiteLink}
                                team={portfolio.Projects[i].Team}
                                tools={portfolio.Projects[i].Tools}
                                videos={portfolio.Projects[i].Videos}
                                images={portfolio.Projects[i].Images}
                                thumbnail={portfolio.Projects[i].Thumbnail}
                            />);
                        if (i + 1 < portfolio.Projects.length) amount.push(<hr className="entry-div" />);
                    }  
                }
   
            }
            break;
        case EntryMode.Career:
            {
                if (portfolio)
                {
                    for (let i = 0; i < portfolio.Career.length; i++)
                    {
                        amount.push(
                            <CareerEntry
                                title={portfolio.Career[i].Title}
                                descriptionItems={portfolio.Career[i].DescriptionItems}
                                date={portfolio.Career[i].Date}
                                companyName={portfolio.Career[i].CompanyName}
                                companyLink={portfolio.Career[i].Link}
                            />);
                        if (i + 1 < portfolio.Career.length) amount.push(<hr className="entry-div" />);
                    }
                }
                
            }
            break;
        case EntryMode.Education:
            {
                if (portfolio)
                {
                    for (let i = 0; i < portfolio.Education.length; i++)
                    {
                        amount.push(
                            <EducationEntry
                                degreeName={portfolio.Education[i].DegreeName}
                                gpa={portfolio.Education[i].GPA}
                                date={portfolio.Education[i].Date}
                                universityName={portfolio.Education[i].UniversityName}
                                universityLink={portfolio.Education[i].UniversityLink}
                            />);
                        if (i + 1 < portfolio.Education.length) amount.push(<hr className="entry-div" />);
                    }  
                }
                   
            }
            break;
        default:
            {
                console.log(currentMode);
                break;
            }

    }

 

    return (
        <div className="entrylist">
            { amount }
        </div>
        
    );
}