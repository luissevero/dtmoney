import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import { useState } from "react"

Modal.setAppElement('#root')

export function App() {

	const [modalTransaction, setModalTransaction] = useState(false)

    function handleOpenModalTransaction(){
        setModalTransaction(true)
    }

    function handleCloseModalTransaction(){
        setModalTransaction(false)
    }

    return (
        <>
			<Header 
				onClickButton={handleOpenModalTransaction}
			/>
			<Dashboard />
			<Modal
                isOpen={modalTransaction}
                onRequestClose={handleCloseModalTransaction}
            >
                <h2>Cadastrar transação</h2>
            </Modal>    
			<GlobalStyle />
        </>
	)
}
