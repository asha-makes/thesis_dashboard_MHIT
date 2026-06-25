import Modal from 'react-bootstrap/Modal';

export default function RulesModal({ setModalShow, modalShow }: { setModalShow: (value: boolean) => void , modalShow:boolean}) {




    return (
        <div className="modal show text-center" style={{ display: 'block', position: 'initial' }}>
            <Modal show = {modalShow} onHide={()=>{setModalShow(false)}}>
                <Modal.Header closeButton >
                    <Modal.Title >📚 Rules</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </Modal.Body>

            </Modal>
        </div>
    )
}