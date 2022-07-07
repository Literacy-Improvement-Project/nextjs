import ModalTest from "../components/organism/Modal/ModalTest";
import { useState } from 'react';
export default function Modal() {

    const [showModal, setShowModal] = useState(true);

    return (
        <div>
            <h1>되는건가?</h1>
            <ModalTest
                onClose={() => setShowModal(false)}
                show={showModal}
                title={"title"}
                maskClosable={true}
                data={"test"}
            >
                몰라
            </ModalTest>
        </div>
    );
}