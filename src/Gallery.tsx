import { ReactElement } from 'react';
import './Gallery.css';

interface GalleryInter
{
    videos: string[];
    images: string[];
    onExit: React.Dispatch<boolean>;
}
export default function Gallery({ videos, images, onExit }: GalleryInter)
{

    let row1: ReactElement[] = [];

    for (let i = 0; i < videos.length; i++)
    {
        row1.push(<div className="galleryiframediv"><iframe className="galleryiframe" allowFullScreen={true} src={videos[i]}></iframe></div>);         

    }
    for (let i = 0; i < images.length; i++)
    {
       row1.push(<img className="galleryimage" src={images[i]}></img>);
    }

    function handleExitClick(e: React.MouseEvent)
    {
        e.stopPropagation();
        document.body.style.overflow = "visible";
        onExit(false);
    }
    return (
        <div className='gallerybackground' onClick={handleExitClick}>
            <div className='galleryforeground' onClick={(e: React.MouseEvent) => {e.stopPropagation()}}>
                <div className="galleryforeground_internal">
                    {row1}
                </div>
                <div className='galleryexit' onClick={handleExitClick}>
                    <button className='galleryexit_button'>X</button>
                </div>
            </div>
        </div>
    );
}