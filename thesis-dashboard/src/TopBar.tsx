import Button from 'react-bootstrap/Button'

export default function TopBar({setModalShow}: {setModalShow: (value: boolean) => void }) {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3 h1 fs-3" href="#">Game Title Placeholder</a>
                <ul className="navbar-nav navbar-flex-row ms-auto me-3 fs-3">
                    <li className="nav-item"><Button onClick = {() => {setModalShow(true)}} variant="dark"><h3>📚 Rules</h3></Button></li>
                </ul>
    
        </nav>
    )


}