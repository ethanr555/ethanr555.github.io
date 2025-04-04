import { createContext } from 'react';

export const PortfolioContext = createContext<Partial<PortfolioContextType>>({});

export interface PortfolioContextType
{
    Bio: Portfolio_Bio;
    Projects: Portfolio_Projects[];
    Career: Portfolio_Career[];
    Education: Portfolio_Education[];
}

interface Portfolio_Bio
{
    Description: string;
    Email: string;
    PhoneNumber: string;
    LinkedIn: string;
    Github: string;
    GithubLink: string;
    LinkedInLink: string;
}

interface Portfolio_Projects
{
    Name: string;
    Date: string;
    ProjectSiteName: string;
    ProjectSiteLink: string;
    CompanyName: string;
    CompanyLink: string;
    CodeRepoName: string;
    CodeRepoLink: string;
    Description: string;
    Team: string;
    Tools: string[];
    Videos: string[];
    Images: string[];
    ImageThumbnails: string[];
    Thumbnail: string;
}

interface Portfolio_Career
{
    Title: string;
    DescriptionItems: string[];
    CompanyName: string;
    Date: string;
    Link: string;
}

interface Portfolio_Degree
{
    DegreeTitle: string;
    DegreeMajor: string;
    Date: string;
}

interface Portfolio_Education
{
    UniversityName: string;
    UniversityLink: string;
    Degrees: Portfolio_Degree[];
}

