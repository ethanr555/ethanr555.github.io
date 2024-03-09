import './Gallery.css';

interface GalleryInter
{
    videos: string[];
    images: string[];
    onExit: React.Dispatch<boolean>;
}
export default function Gallery({ videos, images, onExit }: GalleryInter)
{

    let row1: Element[] = [];
    let row2: Element[] = [];
    //currentRow -> false = row1, true = row2
    let currentRow: boolean = true;

    for (let i = 0; i < videos.length; i++)
    {
        if (currentRow)
        {
            currentRow = false;
            row1.push(<td className='gallerytd'><div className="galleryiframediv"><iframe className="galleryiframe" allowfullscreen="allowfullscreen" src={videos[i]}></iframe></div></td >);         
        }
        else
        {
            currentRow = true;
            row2.push(<td className='gallerytd'><div className="galleryiframediv"><iframe className="galleryiframe" allowfullscreen="allowfullscreen" src={videos[i]}></iframe></div></td >);
        }
    }
    for (let i = 0; i < images.length; i++)
    {
        if (currentRow)
        {
            currentRow = false;
            row1.push(<td className='gallerytd'><img className="galleryimage" src={images[i]}></img></td>);
        }
        else
        {
            currentRow = true;
            row2.push(<td className='gallerytd'><img className="galleryimage" src={images[i]}></img></td>);
        }
    }

    function handleExitClick(e: Event)
    {
        e.stopPropagation();
        onExit(false);
    }
    return (
        <div className='gallerybackground' onClick={handleExitClick}>
            <div className='galleryforeground' onClick={(e: Event) => {e.stopPropagation()}}>
                <div className="galleryforeground_internal">
                    <table>
                        <tbody>
                            <tr>
                                {row1}
                            </tr>
                            <tr>
                                {row2}
                            </tr>
                        </tbody>                       
                    </table>
                </div>
                <div className='galleryexit' onClick={handleExitClick}>
                    <button className='galleryexit_button'>X</button>
                </div>
            </div>
        </div>
    );
}