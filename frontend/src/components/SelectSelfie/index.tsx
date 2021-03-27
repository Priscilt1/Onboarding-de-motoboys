import { Container } from './styles'
import Selfie from './Selfie.svg'
 

export function SelectSelfie() {
  return (
   <Container>
      <img src={Selfie} alt="Envie sua selfie"/>
        <h2>Selecione a sua selfie favorita
          <p>É importante que você sem mascara e nem com óculos escuros</p>
        </h2>
        <input
          type="file"
          name="selfie"
        />
   </Container>
  )
}
 

