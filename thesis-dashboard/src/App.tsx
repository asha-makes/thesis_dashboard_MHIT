import './App.css'
import TopBar from './TopBar.tsx';
import BudgetCard from './BudgetCard.tsx';
import SustainabilityScore from './SustainabilityScore.tsx';
import { useState } from 'react';



function App() {

  // Budget State Tracker
  const [budgetCounter, setBudgetCounter] = useState(20)
  const [sustainabilityPoints, setSustainabilityPoints] = useState(5)

  return (
    <div>
      <TopBar />
      <BudgetCard budget={budgetCounter} maxBudget = {100}></BudgetCard>
      <SustainabilityScore points = {sustainabilityPoints}  pointsAim = {100} synergyIncrease={() => setSustainabilityPoints(p => p+1)}></SustainabilityScore>
    </div>

  )
}

export default App;