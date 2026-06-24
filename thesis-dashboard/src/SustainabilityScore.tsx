
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';


export default function SustainabilityScore({ points, pointsAim, synergyIncrease }: { points: number, pointsAim: number, synergyIncrease: () => void }) {

    const percentageSustainabilityScore = Number((points / pointsAim * 100).toFixed(1))
    return (
        <div className="ms-5 mt-3">
            <h1>🌱 {points} Points</h1>

            
            <ProgressBar now={percentageSustainabilityScore} label={`${percentageSustainabilityScore}%`} variant="success" />


                 <Button variant="success" onClick={synergyIncrease} className = "mt-2">Add Synergy</Button>
        

        </div>
    )
}