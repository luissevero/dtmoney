import { Container } from './style'
import { useEffect } from 'react'
import { api } from '../../services/api'

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(res => console.log(res.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Salário</td>
                        <td>06/11/2021</td>
                    </tr>
                    <tr>
                        <td className="title">Aluguel</td>
                        <td className="withdraw">R$1.100,00</td>
                        <td>Despesas primárias</td>
                        <td>10/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}