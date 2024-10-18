import { useState, useEffect } from 'react'
import UserProfile from './UserProfile'
import { PortfolioContext, PortfolioContextType } from './PortfolioContext';
import './App.css'
import InfoSide from './InfoSide'

function App() {
    const [portfolio, setPortfolio] = useState({} as PortfolioContextType);
    
    useEffect(() =>
    {
        fetch("https://raw.githubusercontent.com/ethanr555/PortfolioData/refs/heads/main/portfolio.json")
            .then((response) => { let j: PortfolioContextType = response.json() as unknown as PortfolioContextType; return j; })
            .then((json) => setPortfolio(json));
    },[])
    
  return (
      <div className="App">
          <PortfolioContext.Provider value={ portfolio }>
            <div className="sidebyside_left">
                <UserProfile />
            </div>
            <div className="sidebyside_right">
                <InfoSide />
            </div>
          </PortfolioContext.Provider>
    </div>
  )
}

export default App