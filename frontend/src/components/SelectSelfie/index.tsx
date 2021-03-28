import { useState } from 'react'
import { Container, ContainerText } from './styles'
import Selfie from './Selfie.svg'
 

export function SelectSelfie({onFileSelect}:any) {
  const [selected, setSelected] = useState(false)
  const handleFileInput = (e:any) => {
    onFileSelect(e.target.files[0])
    setSelected(true)
  }
  
  return (
   <Container>
      <img src={Selfie} alt="Envie sua selfie"/>
      <ContainerText>
        <h2>
          Selecione a sua selfie favorita           
        </h2>
        <p>É importante que você sem mascara e nem com óculos escuros</p> 
        {selected && (<h4>Sua imagem foi carregada com sucesso!</h4>)}
        <input
          type="file"
          name="selfie"
          onChange={handleFileInput}
        />
      </ContainerText>
   </Container>
  )
}
 

