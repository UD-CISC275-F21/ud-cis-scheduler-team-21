import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Modal_Helper_Intf {
    showModal:boolean;
    setShow: (b: boolean) => void;
}

export function Mod({showModal,setShow}:Modal_Helper_Intf): JSX.Element{
    

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    return (
        <>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100vh" }}
            >
            </div>
            <Modal show={showModal} onHide={handleClose}>         
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>          
                </Modal.Header>
                <Modal.Body>Woohoo Youre reading this text in a modal</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
