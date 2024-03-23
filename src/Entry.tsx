import { useState } from 'react';
import './Entry.css'
import Gallery from './Gallery';
import grid from './assets/grid.svg';

interface ProjectEntryProps
{
    name: string;
    date: string;
    company: string;
    company_link: string;
    code_repo: string;
    code_repo_link: string;
    project_name: string;
    project_link: string;
    description: string;
    team: string;
    tools: string[];
    videos: string[];
    images: string[];
    imageThumbnails: string[];
    thumbnail: string;
}
export function ProjectEntry({ name = "", date = "", company = "", company_link = "", code_repo = "Link", code_repo_link = "", project_name = "", project_link = "", description = "", team = "", tools = [], videos = [], images = [], imageThumbnails = [], thumbnail = "" }: ProjectEntryProps)
{
    const [galleryVisible, setGalleryVisible] = useState(false);
    let toolList = "";
    if (tools.length > 0)
    {
        for (let i = 0; i < tools.length; i++)
        {
            toolList += tools[i];
            if (i + 1 < tools.length) toolList += ", ";
        }
    }

    function handleGalleryVisible()
    {
        document.body.style.overflow = "hidden";
        setGalleryVisible(true);
    }

    return (
        <>
            {galleryVisible && <Gallery videos={videos} images={images} imageThumbnails={imageThumbnails}  onExit={setGalleryVisible} />}

            <div className='entry'>
                {name && <h2 className='title'>{name}</h2>}
                <div className='leftcolumn'>
                    <div className='leftcolumn_internal'>
                        {thumbnail && videos && images && <p className='entry_imgdesc'>↓  Click image below to see gallery ↓</p> }
                        {thumbnail && videos && images && <GalleryPreview thumbnailURL={thumbnail} onClick={handleGalleryVisible} />}
                        {date && <p>Date: {date}</p>}
                        {code_repo_link && <p>Code Repo: <a href={code_repo_link}>{code_repo}</a></p>}
                        {company && <p>Company: <a href={company_link}>{company}</a></p>}
                        {project_link && <p>Project Website: <a href={project_link}>{project_name}</a></p>}
                        {team && <p>Team: {team}</p>}
                        {tools.length > 0 && <p>Tools: {toolList}</p>}
                    </div>
                </div>
                <div className='rightcolumn'>
                    {description && <p>{description}</p>}
                </div>

            </div>
        </>
    );
}

interface CareerEntryProps
{
    title: string;
    descriptionItems: string[];
    companyName: string;
    date: string;
    companyLink: string;
}
export function CareerEntry({ title, descriptionItems, companyName, date, companyLink }: CareerEntryProps)
{
    let itemList = [];
    for (let i = 0; i < descriptionItems.length; i++)
    {
        itemList.push(<li>{descriptionItems[i]}</li>);
    }
    return (
        <div className='entry'>
            {title && <h2 className='title'>{title}</h2>}
            <div className='centercolumn'>
                   <ul>{itemList}</ul>
                   {date && <p>Date: {date}</p>}
                   {companyName && <p>Company: <a href={companyLink}>{companyName}</a></p>}
            </div>
        </div>
    );
}

interface EducationEntryInter
{
    degreeName: string,
    gpa: number,
    universityName: string,
    universityLink: string,
    date: string
}
export function EducationEntry({ degreeName, gpa, universityName, universityLink, date }: EducationEntryInter)
{
    return (
        <div className='entry'>
            {degreeName && <h2 className='title'>{degreeName}</h2>}
            <div className='centercolumn'>
                {gpa && <p>GPA: {gpa}</p>}
                {date && <p>Date: {date}</p>}
                {universityName && <p>University/College: <a href={universityLink}>{universityName}</a></p>}
            </div>
        </div>
    );
}

interface GalleryPreviewInterface
{
    thumbnailURL: string;
    onClick: React.Dispatch<boolean>;
};
function GalleryPreview({thumbnailURL, onClick }: GalleryPreviewInterface)
{
    function handleImageClick(e: React.MouseEvent)
    {
        e.stopPropagation();
        onClick(true);

    }

    return (
        <div className="gallerypreview_container">
            <img className="gallerypreview_child_image" src={thumbnailURL} onClick={handleImageClick}></img>
            <img className="gallerypreview_child_magnify" src={grid} onClick={handleImageClick}></img>
        </div>
    );
}