import {
    Button,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import {useActions} from "@/app/hooks/useActions";
import React, {FC, useState} from "react";
import {Input} from "@chakra-ui/input";

interface IModalBuy {
    isOpen: boolean;
    onClose: (boolean) => void;
}

const ModalBuy: FC<IModalBuy> = ({isOpen, onClose}) => {
    const [isActive, setIsActive] = useState(false)
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const {resetCart} = useActions()
    const handleClickSave = () => {
        setIsActive(true)
    }
    const handleClickClose = () => {
        setIsActive(false)
        onClose(true)
        resetCart()
    }
    return (
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={handleClickClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Order form </ModalHeader>
                    <ModalCloseButton/>
                    {!isActive ?
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input ref={initialRef} placeholder='First name'
                                       required/>
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Phone number</FormLabel>
                                <Input type={"tel"} placeholder='Phone number'/>
                            </FormControl>
                        </ModalBody> :
                        <div className={"ml-5 text-xl mr-5"}> Thanks. Your order is confirmed.
                            Please wait for the manager's call.</div>
                    }
                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={handleClickSave}
                                hidden={isActive}>
                            Order
                        </Button>
                        <Button
                            onClick={handleClickClose}>{!isActive ? 'Cancel' : 'Close'}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalBuy;