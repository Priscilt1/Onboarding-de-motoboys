import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

import {
  Link
} from "react-router-dom"

export function Header() {
  return (
    <Container>
      <Content>
      <Link to="/"><img src={logoImg} alt="Quero Delivery"/></Link>
        <nav>
          <ul>
            <li>
              <Link to="/register">Criar Cadastro</Link>
            </li>
            <li>
              <Link to="/status">Consulta de cadastro</Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  )
}