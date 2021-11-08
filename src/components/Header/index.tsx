import logoImg from '../../assets/logo.svg'
import { 
    Container,
    Content 
} from './style'

interface HeaderProps {
    onClickButton: () => void
}
export function Header({ onClickButton }: HeaderProps){

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button 
                    type='button'
                    onClick={onClickButton}
                >
                    Nova transação
                </button>
            </Content>

           
        </Container>
    )
}