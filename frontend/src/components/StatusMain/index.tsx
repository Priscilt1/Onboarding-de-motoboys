import { Container, Content } from './styles'
 

export function StatusMain() {
  return (
   <Container>
     <Content>
      <h2>Informe seu CPF</h2>
        <input 
            placeholder="000.000.000-00"
          />

        <button type="submit">
          Consultar
        </button>
      </Content>
   </Container>
  )
}
 

