
import Card from 'react-bootstrap/Card'
import { cards } from './Cards.ts'


import Badge from 'react-bootstrap/Badge';



export default function CardInput({ handleInput, inputText, setInputText, playedCards }:
    {
        handleInput: (event: React.KeyboardEvent<HTMLInputElement>) => void, inputText: string,
        setInputText: (value: string) => void,
        playedCards: string[]
    }) {

    return (

        <Card className="text-center mt-3 mb-3" >
            <Card.Header className="bg-secondary text-white"><h3>Scan a Card</h3></Card.Header>

            <Card.Body>
                <input type="text" value={inputText} className="mt-3 mb-5"
                    onKeyDown={handleInput} onChange={e => setInputText(e.target.value)}></input>
                <Card.Text>


                    {[...playedCards].reverse().map((card, index) => (
                        <Badge
                            key={index}
                            bg={cards[card as keyof typeof cards].type === 'sustainability' ? 'success' : 'danger'}
                            className="m-1">
                            {card + " "  + cards[card as keyof typeof cards].title}
                        </Badge>
                    ))}


                </Card.Text>


            </Card.Body>
        </Card >

    )


}