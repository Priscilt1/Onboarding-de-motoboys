import {useState} from 'react'
import { Container, Content } from './styles'
 
interface FormProps {
  cpf: string
}

function cpf(value:string) {
  value = value.replace(/\D/g,"") 

  if(value.length >11)
      value = value.slice(0, -1)

      value = value.replace(/(\d{3})(\d)/, '$1.$2') 
      value = value.replace(/(\d{3})(\d)/, '$1.$2') 
      value = value.replace(/(\d{3})(\d)/, '$1-$2') 

  return value

}

export function StatusMain() {
  const [form, setForm] = useState<FormProps>({
    cpf: ''
  })

  const [error, setError] = useState({
    cpf: false
  })

  return (
   <Container>
     <Content>
      <h2>Informe seu CPF</h2>
      <input 
          placeholder="000.000.000-00"
          onChange={event => setForm({
            ...form,
            cpf: cpf(event.target.value)
          })}
          value={form.cpf}

          onBlur={event => {
            setError({
              ...error,
              cpf: (form.cpf == "" || form.cpf.length < 14) 
            })
          }}
          className={error.cpf ? 'error': ''}
        />
        { error.cpf && <span>Por favor, informe seu CPF</span> }
      
        <button type="submit">
          Consultar
        </button>
      </Content>
   </Container>
  )
}
 

