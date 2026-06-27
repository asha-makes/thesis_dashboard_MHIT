import Card from 'react-bootstrap/Card'

type WildCardProps = {
  activeWildCard: { key: string, title: string, description: string, budget: number } | null
}

export default function WildCard({ activeWildCard }: WildCardProps) {

  if (!activeWildCard) return null

  return (
    <Card className="text-center mt-3 mb-3">
      <Card.Header className="bg-danger text-white"><h3>{activeWildCard.key} - Event Card</h3></Card.Header>
      <Card.Body>
        <Card.Text>{activeWildCard.title}</Card.Text>
        <Card.Text>{activeWildCard.description}</Card.Text>
        <Card.Text>💰 Budget Impact: {activeWildCard.budget}</Card.Text>
      </Card.Body>
    </Card>
  )
}