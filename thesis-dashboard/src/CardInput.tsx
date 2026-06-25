
import Card from 'react-bootstrap/Card'

import Badge from 'react-bootstrap/Badge';
import { CardText } from 'react-bootstrap';


export default function CardInput() {

    return (

        <Card className="text-center mt-3 mb-3" >
            <Card.Header className="bg-secondary text-white"><h3>Scan a Card</h3></Card.Header>

            <Card.Body>
                <input className = "mt-3 mb-5"></input>
                <CardText>
                    
                    
                    <Badge bg= "primary" className = "m-1">Test Badge</Badge>
                    <Badge bg= "primary" className = "m-1">Test Badge</Badge>
                    <Badge bg= "primary" className = "m-1">Test Badge</Badge>
                    <Badge bg= "primary" className = "m-1">Test Badge</Badge>
                    <Badge bg= "primary" className = "m-1">Test Badge</Badge>


                    <Badge bg= "danger" className = "m-1">Test Badge</Badge>
                    <Badge bg= "danger" className = "m-1">Test Badge</Badge>
                    <Badge bg= "danger" className = "m-1">Test Badge</Badge>
                    <Badge bg= "danger" className = "m-1">Test Badge</Badge>
                    <Badge bg= "danger" className = "m-1">Test Badge</Badge>
                    
                
                
                
                </CardText>

         

            </Card.Body>
        </Card>

    )


}