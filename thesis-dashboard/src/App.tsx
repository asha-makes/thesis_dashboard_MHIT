import './App.css'
import TopBar from './TopBar.tsx';
import BudgetCard from './BudgetCard.tsx';
import SustainabilityScore from './SustainabilityScore.tsx';
import CardInput from './CardInput.tsx'
import WildCard from './WildCard.tsx';
import RulesModal from './RulesModal.tsx'
import { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  // States
  const [budgetCounter, setBudgetCounter] = useState(8)
  const [sustainabilityPoints, setSustainabilityPoints] = useState(0)
  const [modalShow,setModalShow] = useState(false)

  return (

    <div >
      <TopBar setModalShow = {setModalShow}/>

      <Container className="mt-5" >
        <Row className="align-items-stretch">
          <Col><BudgetCard budget={budgetCounter} maxBudget={100}></BudgetCard></Col>
          <Col><SustainabilityScore points={sustainabilityPoints} pointsAim={100} synergyIncrease={() => setSustainabilityPoints(p => p + 1)}></SustainabilityScore></Col>

        </Row>
        <Row className="align-items-stretch">
          <Col><CardInput></CardInput></Col>
          <Col> <WildCard></WildCard> </Col>
        </Row>
       

      </Container>

      <RulesModal modalShow = {modalShow} setModalShow={setModalShow}></RulesModal>

    </div>

  )
}

export default App;