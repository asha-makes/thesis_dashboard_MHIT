import Card from 'react-bootstrap/Card'

export default function () {

    return (
        <Card className="text-center mt-3 mb-3" >
            <Card.Header className="bg-danger text-white"><h3>Event Card</h3></Card.Header>
            <Card.Body>
                <Card.Text>Description placeholder</Card.Text>
                <Card.Text>💰 - Budget Impact Passed In</Card.Text>
                <Card.Text>Protections</Card.Text>
            </Card.Body>
        </Card>

    )


}