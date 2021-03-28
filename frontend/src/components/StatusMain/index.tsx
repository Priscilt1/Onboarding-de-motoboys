import {useState} from 'react'
import { Container, Content } from './styles'
import api from "../../services/api"
import { StatusIcon } from '../StatusIcon'
import { stat } from 'node:fs'
 
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
    cpf: false,
    invalid: false,
  })

  const [status, setStatus] = useState('')

  const handleClick = () => {
    // users/status?cpf=12213
      api.get(`users/status?cpf=${form.cpf}`)
        .then(response => {
          const { data } = response
          console.log(data)
          if (data.error) {
            setError({
              ...error,
              invalid: true
            })
            setStatus('')
            console.log('aconteceu um erro no backend', data.error)
          } else {
            setStatus(data.status)
            setError({
              cpf: false,
              invalid: false
            })
          }           
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
      })
  }

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

        { form.cpf != '' && error.invalid && <span>CPF inválido</span> }

        {status != '' && <StatusIcon status={status} /> }
      
        <button 
          type="button"
          onClick={() => handleClick()}  
        >
          Consultar
        </button>
      </Content>
   </Container>
  )
}
 

