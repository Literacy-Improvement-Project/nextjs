import Modal from "../components/organism/Modal/Modal";
import { useState } from 'react';
export default function modal() {

    const [showModal, setShowModal] = useState(false);
    return (
        <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
            title={"title"}
            maskClosable={true}
            data={"test"}
        >
        </Modal>
    );
}