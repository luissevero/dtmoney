import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState } from "react"

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'

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
			<NewTransactionModal
                isOpen={modalTransaction}
                onRequestClose={handleCloseModalTransaction}
            />
			<GlobalStyle />
        </>
	)
}
