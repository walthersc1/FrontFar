import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function ModalProducto({nombre}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
    <button onClick={onOpen} className="bg-blue-900 text-white font-bold p-2 w-10 rounded-l-md">+</button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">{nombre}</ModalHeader>
                <ModalBody>
                    <div className="col-span-6 text-center p-1">
                        <p className="text-left">Nombre {nombre}</p>
                        <input placeholder="Ingresar código" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>
                    <div className="col-span-6 text-center p-1">
                        <p className="text-left">Descripción {nombre}:</p>
                        <input placeholder="Ingresar nombre" className="rounded-md bg-gray-50 p-2 border-2 w-full border-gray-700"></input>
                    </div>                                   
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                    Action
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    </>
  )
}
