import { Container } from './styles'
import { Wave } from '../Wave'
import { FormRegister } from '../FormRegister'

export function Register() {
  return (
    <>
      <Container>
        <h1>Faça seu cadastro {';)'} </h1>
        <FormRegister />
  
      </Container>
      <Wave />
    </>
  )
}

