import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from '@material-tailwind/react/Button';

export function SimpleModal({showModal, type="SUCCESS", setShowModal, closeHandler, message}) {
    return (
        <>
        <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={closeHandler}>
                    {type === "SUCCESS" ? "Success" : "Error"}
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                        {message}
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="lightBlue"
                        onClick={closeHandler}
                        ripple="dark"
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
