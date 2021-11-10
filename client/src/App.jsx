import About from './components/about/About'
import Info from './components/info/Info'
import PortfolioList from './components/portfolioList/PortfolioList'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { useContext } from 'react'
import { DarkContext } from './context'

const App = () => {

  const dark = useContext(DarkContext)
  const darkMode = dark.state.darkmode

  return (
    <div style={{backgroundColor: darkMode ? "#111" : "white", color: darkMode && "white" }}>
      <Toggle />
      <Info />
      <About />
      <PortfolioList />
      <Contact />
    </div>
  );
}

export default App;
