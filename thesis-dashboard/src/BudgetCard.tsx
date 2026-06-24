// BudgetCard.tsx
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function BudgetCard({ budget, maxBudget }: { budget: number, maxBudget: number }) {

    const budgetPercentage = Number((budget / maxBudget * 100).toFixed(1))

    return (

        <div className="ms-5 mt-3">
            <h1>💰 {budget} Tokens</h1>
            <ProgressBar now={budgetPercentage} label={`${budgetPercentage}%`} variant="danger"  />

        </div>
    )
}