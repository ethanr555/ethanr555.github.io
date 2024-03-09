import { useContext } from 'react'
import {PortfolioContext } from './PortfolioContext'
import userImage from './assets/profilepicture.png'
import './UserProfile.css'

export default function UserProfile()
{
    const portfolio = useContext(PortfolioContext);
    const description: string = portfolio ? portfolio.Bio.Description: "";
    const phoneNumber: string = portfolio ? portfolio.Bio.PhoneNumber: "";
    const email: string = portfolio ? portfolio.Bio.Email: "";
    const linkedIn: string = portfolio ? portfolio.Bio.LinkedIn : "";


    return (
        <div className='userprofile'>
            <img className="img" src={userImage} />
            {description && <p className="p"> {description} </p>}
            <ul>
                {phoneNumber && <li className="p">Phone Number: <a href={"tel:" + phoneNumber}>{phoneNumber} </a> </li>}
                {email && <li className="p">Email: <a href={"mailto:" + email}>{email}</a></li>}
                {linkedIn && <li className="p">LinkedIn: <a href={linkedIn}>Link</a></li>}
            </ul>
            <div>
                <a href="https://drive.google.com/uc?export=download&id=1-B19EYs-5lptBozmEtqijTUB9pq5VYkZ">
                    <button className='resumebutton'>
                        Download Resume
                    </button>
                </a>
            </div>
        </div>

    );
}