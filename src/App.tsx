import { useState, useEffect } from 'react'
import UserProfile from './UserProfile'
import { PortfolioContext } from './PortfolioContext';
import './App.css'
import InfoSide from './InfoSide'

function App() {
    const [portfolio, setPortfolio] = useState("");
    
    useEffect(() =>
    {
        fetch("https://gist.githubusercontent.com/ethanr555/0faacb365944aed6d65f3a87db5d6197/raw/portfolio.json")
            .then((response) => { let j: any = response.json(); console.log(j); return j; })
            .then((json) => setPortfolio(json));
    },[])
    
  return (
      <>
          <PortfolioContext.Provider value={ portfolio }>
            <div className="sidebyside_left">
                <UserProfile />
            </div>
            <div className="sidebyside_right">
                <InfoSide />
            </div>
          </PortfolioContext.Provider>
    </>
  )
}

export default App