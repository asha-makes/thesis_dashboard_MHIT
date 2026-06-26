import Button from 'react-bootstrap/Button'

export default function TopBar({setModalShow}: {setModalShow: (value: boolean) => void }) {

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3 h1 fs-3" href="#">Game Title Placeholder</a>
                <ul className="navbar-nav navbar-flex-row ms-auto me-3">
                    <li className="nav-item fs-1"><Button className = "fs-3" onClick = {() => {setModalShow(true)}} variant="dark">📚 Rules</Button></li>
                </ul>
    
        </nav>
    )


}