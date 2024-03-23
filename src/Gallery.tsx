import { ReactElement, useState } from 'react';
import './Gallery.css';
import magnifyingGlass from './assets/magnifying_glass.svg';

interface GalleryInter
{
    videos: string[];
    images: string[];
    imageThumbnails: string[];
    onExit: React.Dispatch<boolean>;
}
export default function Gallery({ videos, images, imageThumbnails, onExit }: GalleryInter)
{
    const [imagePreview, setImagePreview] = useState("");
    let row1: ReactElement[] = [];

    if (imagePreview == "")
    {
        for (let i = 0; i < videos.length; i++)
        {
            row1.push(<div className="galleryiframediv"><iframe className="galleryiframe" allowFullScreen={true} src={videos[i]}></iframe></div>);

        }
        for (let i = 0; i < images.length; i++)
        {
            if (imageThumbnails && i < imageThumbnails.length)
                row1.push(<ImagePreview imageURL={images[i]} thumbnailURL={imageThumbnails[i]} onClick={setImagePreview}></ImagePreview>);
            else
                row1.push(<ImagePreview imageURL={images[i]} thumbnailURL={images[i]} onClick={setImagePreview}></ImagePreview>);

        }
    }

    function handleExitClick(e: React.MouseEvent)
    {
        e.stopPropagation();
        document.body.style.overflow = "visible";
        onExit(false);
    }
    return (
        <div className='gallerybackground' onClick={handleExitClick}>
            {imagePreview == "" &&
                <>
                <div className='galleryforeground' onClick={(e: React.MouseEvent) => { e.stopPropagation() }}>
                    <div className="galleryforeground_internal">
                        {row1}
                    </div>
                    <div className='galleryexit' onClick={handleExitClick}>
                        <button className='galleryexit_button'>X</button>
                    </div>
                </div>
                </>
            }
            {imagePreview != "" &&
                <div className='galleryforeground' onClick={(e: React.MouseEvent) => { e.stopPropagation() }}>
                    <ImageWindow imageURL={imagePreview} onClick={setImagePreview}></ImageWindow>
                </div>
            }
        </div>
    );
}


interface ImageWindowInterface
{
    imageURL: string;
    onClick: React.Dispatch<string>;
};

export function ImageWindow({ imageURL, onClick }: ImageWindowInterface)
{
    function handleImageExit(e: React.MouseEvent)
    {
        e.stopPropagation();
        onClick("");
    }
    return (
        <>
            <div className="galleryforegroundimage">
                <img src={imageURL} className="largeimage"></img>
            </div>
            <div className='galleryexit' onClick={handleImageExit}>
                <button className='galleryexit_button'>X</button>
            </div>
       </>
    );
}

interface ImagePreviewInterface
{
    imageURL: string;
    thumbnailURL: string;
    onClick: React.Dispatch<string>;
};


function ImagePreview({ imageURL, thumbnailURL, onClick}: ImagePreviewInterface)
{
    function handleImageClick(e: React.MouseEvent)
    {
        e.stopPropagation();
        onClick(imageURL);

    }

    return (
        <div className="galleryimage_container">
            <img className="galleryimage_child_image" src={thumbnailURL} onClick={handleImageClick}></img>
            <img className="galleryimage_child_magnify" src={magnifyingGlass} onClick={handleImageClick}></img>
        </div>
    );
}