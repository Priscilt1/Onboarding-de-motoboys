import { SelectSelfie } from '../SelectSelfie'
import { Container, Content } from './styles'
 

export function FormRegiste() {
  return (
   <Container>
      <Content>
        <input 
          placeholder="Nome"
        />

        <input 
          placeholder="CPF"
        />

        <input 
          placeholder="CNPJ MEI"
        />

        <input 
          placeholder="Email"
        />

        <input 
          placeholder="Telefone"
        />

        <input 
          placeholder="Endereço"
        />

        <SelectSelfie />

        <button type="submit">
          Cadastrar
        </button>

    </Content>
   </Container>
  )
}
 

