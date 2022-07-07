import Modal from "../components/organism/Modal/Modal";
import { useState } from 'react';
export default function modal() {

    const [showModal, setShowModal] = useState(true);

    return (
        <Modal
            onClose={() => setShowModal(true)}
            show={showModal}
            title={"title"}
            maskClosable={true}
            data={"test"}
        >
        </Modal>
    );
}