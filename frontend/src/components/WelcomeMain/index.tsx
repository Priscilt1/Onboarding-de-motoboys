import Gif  from './motoboy.gif'
import { Container, Content } from './styles'
 
import {
  Link
} from "react-router-dom"

export function WelcomeMain() {
  return (
    <Container>
        <img src={Gif} alt="Gif de delivery"/>
        <Content>
          <p>Venha fazer parte do nosso time 💜</p>

          <Link to="/register">
            <button className="register" type="button"> 
              Faça seu cadastro
            </button>
          </Link>
          
          <Link to="/status">
            <button type="button"> 
              Consulte seu cadastro
            </button>
          </Link>
      </Content>
    </Container>
  )
}
 

