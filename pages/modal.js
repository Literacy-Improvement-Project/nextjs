import ModalTest from "../components/organism/Modal/ModalTest";
import { useState } from 'react';
export default function Modal() {

    const [showModal, setShowModal] = useState(true);

    return (
        <ModalTest
            onClose={() => setShowModal(true)}
            show={showModal}
            title={"title"}
            maskClosable={true}
            data={"test"}
        >
            몰라
        </ModalTest>
    );
}