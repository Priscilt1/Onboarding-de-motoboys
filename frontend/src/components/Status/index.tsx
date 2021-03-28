import { Container } from './styles'
import { Wave } from '../Wave'
import { StatusMain } from '../StatusMain'

export function Status() {
  return (
    <>
      <Container>
        <h1>Acompanhe seu cadastro {'ツ'} </h1>
        <StatusMain />
      </Container>
      <Wave />
    </>
  )
}

