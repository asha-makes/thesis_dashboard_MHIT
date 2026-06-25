
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

export default function SustainabilityScore({ points, pointsAim, synergyIncrease }: { points: number, pointsAim: number, synergyIncrease: () => void }) {

    const percentageSustainabilityScore = Number((points / pointsAim * 100).toFixed(1))
    return (

        <Card className="text-center" >

            <Card.Header className="bg-success text-white"><h3>Sustainability Score</h3></Card.Header>
            <Card.Body>
                <Card.Text><h5>🌱 {points} / {pointsAim} Points</h5></Card.Text>

                <ProgressBar now={percentageSustainabilityScore} label={`${percentageSustainabilityScore}%`} variant="success" />

                <Button variant="success" onClick={synergyIncrease} className="mt-2">Add Synergy</Button>

            </Card.Body>
        </Card>











    )
}