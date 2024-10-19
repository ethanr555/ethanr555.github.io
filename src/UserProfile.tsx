import { useContext } from 'react'
import {PortfolioContext, PortfolioContextType } from './PortfolioContext'
import userImage from './assets/profilepicture.png'
import './UserProfile.css'

export default function UserProfile()
{
    const portfolio: Partial<PortfolioContextType> = useContext(PortfolioContext);
    const description: string = portfolio && portfolio.Bio ? portfolio.Bio.Description: "";
    const phoneNumber: string = portfolio && portfolio.Bio ? portfolio.Bio.PhoneNumber: "";
    const email: string = portfolio && portfolio.Bio ? portfolio.Bio.Email: "";
    const linkedIn: string = portfolio && portfolio.Bio ? portfolio.Bio.LinkedIn : "";
    const github: string = portfolio && portfolio.Bio ? portfolio.Bio.Github : "";


    return (
        <div className='userprofile'>
            <img className="img" src={userImage} />
            {description && <p className="p"> {description} </p>}
            <ul>
                {phoneNumber && <li className="p">Phone Number: <a href={"tel:" + phoneNumber}>{phoneNumber} </a> </li>}
                {email && <li className="p">Email: <a href={"mailto:" + email}>{email}</a></li>}
                {linkedIn && <li className="p">LinkedIn: <a href={linkedIn}>Link</a></li>}
                {github && <li className="p">Github: <a href={github}>Link</a></li>}
            </ul>
            <div>
                <a href="https://d2m6vacaxnz5yc.cloudfront.net/resume.pdf">
                    <button className='resumebutton'>
                        Download Resume
                    </button>
                </a>
            </div>
        </div>

    );
}