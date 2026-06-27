import './App.css'
import TopBar from './TopBar.tsx';
import BudgetCard from './BudgetCard.tsx';
import SustainabilityScore from './SustainabilityScore.tsx';
import CardInput from './CardInput.tsx'
import WildCard from './WildCard.tsx';
import RulesModal from './RulesModal.tsx'
import { useState } from 'react';
import { cards } from './Cards.ts'
import { events } from './events.ts'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {

  // States
  const [budgetCounter, setBudgetCounter] = useState(100)
  const [sustainabilityPoints, setSustainabilityPoints] = useState(0)
  const [modalShow, setModalShow] = useState(false)
  const [inputText, setInputText] = useState('')
  const [playedCards, setPlayedCards] = useState<string[]>([])
  const [playedEvents, setPlayedEvents] = useState<string[]>([])
  const [activeWildCard, setActiveWildCard] = useState<null | { key: string, title: string, description: string, budget: number }>(null)


// #region Wild Card Function


const triggerWildCard = () => {
  setActiveWildCard(null)
  if (Math.random() < 0.2) {
    const availableEvents = Object.keys(events).filter(key => !playedEvents.includes(key))
    if (availableEvents.length > 0) {
      const randomKey = availableEvents[Math.floor(Math.random() * availableEvents.length)]
      const selectedEvent = events[randomKey as keyof typeof events]
      setBudgetCounter(prev => prev + selectedEvent.budget)
      setActiveWildCard({ key: randomKey, ...selectedEvent })
      setPlayedEvents(prev => [...prev, randomKey])
    }
  }
}

//#endregion



  // Handling Card Input
  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.key === 'Enter') {

      const currentCard = cards[inputText as keyof typeof cards]

      if (playedCards.includes(inputText)) {
        if (currentCard.type === 'sustainability') {
          setBudgetCounter(prev => prev - currentCard.budget / 2)
          setSustainabilityPoints(prev => prev - currentCard.sustainability)
        } else if (currentCard.type === 'event') {
          setBudgetCounter(prev => prev - currentCard.budget)
          setSustainabilityPoints(prev => prev - currentCard.sustainability)
        }
        setPlayedCards(prev => prev.filter(c => c !== inputText))
        setInputText('')
       triggerWildCard()

        return
      }

      // if not in the card list 
      if (!currentCard) {
        setInputText('')
        return
      }
      // Update Scores
      setBudgetCounter(prev => prev + currentCard.budget)
      setSustainabilityPoints(prev => prev + currentCard.sustainability)

      // Push it to the list of previously played cards
      setPlayedCards(prev => [...prev, inputText])
      setInputText('')

      // Wild Card Trigger
      triggerWildCard()



    }

  }

  return (

    <div >
      <TopBar setModalShow={setModalShow} />

      <Container className="mt-5" >
        <Row className="align-items-stretch">
          <Col><BudgetCard budget={budgetCounter} maxBudget={100}></BudgetCard></Col>
          <Col><SustainabilityScore points={sustainabilityPoints} pointsAim={100} synergyIncrease={() => setSustainabilityPoints(p => p + 1)}></SustainabilityScore></Col>

        </Row>
        <Row className="align-items-stretch">
          <Col><CardInput handleInput={handleInput} inputText={inputText} setInputText={setInputText} playedCards={playedCards}></CardInput></Col>
          <Col> <WildCard activeWildCard = {activeWildCard}></WildCard> </Col>
        </Row>

      </Container>

      <RulesModal modalShow={modalShow} setModalShow={setModalShow}></RulesModal>

    </div>

  )
}

export default App;