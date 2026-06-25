// Imports 
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'


export default function BudgetCard({ budget, maxBudget }: { budget: number, maxBudget: number }) {

    const budgetPercentage = Number((budget / maxBudget * 100).toFixed(1))

    return (

        <Card className="text-center h-100" >
            <Card.Header className="text-white bg-primary"><h3>Budget Spent</h3></Card.Header>

            <Card.Body>
                <Card.Text><h5>💰 {budget}  / {maxBudget} Tokens</h5></Card.Text>

                <ProgressBar now={budgetPercentage} label={`${budgetPercentage}%`} variant="primary" />


            </Card.Body>
        </Card>



    )
}