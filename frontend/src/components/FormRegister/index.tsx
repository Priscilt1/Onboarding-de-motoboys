import {useState} from 'react'

import { SelectSelfie } from '../SelectSelfie'
import { Container, Content } from './styles'

interface FormProps {
  name: string,
  cpf: string,
  cnpj: string,
  email: string,
  phone: string,
  address: string,
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

function cnpj(value:string) {
  value = value.replace(/\D/g,"") 

  if(value.length >14)
      value = value.slice(0, -1)

      value = value.replace(/(\d{2})(\d)/, '$1.$2') 
      value = value.replace(/(\d{3})(\d)/, '$1.$2') 
      value = value.replace(/(\d{3})(\d)/, '$1/$2') 
      value = value.replace(/(\d{4})(\d)/, '$1-$2') 

  return value
}

function email(value:string) {
  let error = false
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  if(!value.match(mailFormat))
    error = true

  return error
}

function phone(value:string) {
  value = value.replace(/\D/g,"") 

  if(value.length >11)
    value = value.slice(0, -1)

    if (value.length >10) {
      value = value.replace(/(\d{2})(\d)/, '($1) $2') 
      value = value.replace(/(\d{5})(\d)/, '$1-$2')
    } else{
      value = value.replace(/(\d{2})(\d)/, '($1) $2') 
      value = value.replace(/(\d{4})(\d)/, '$1-$2')
    }

    return value
}

export function FormRegister() {
  const [form, setForm] = useState<FormProps>({
    name: '',
    cpf: '',
    cnpj: '',
    email: '',
    phone: '',
    address: ''
  })

  const [error, setError] = useState({
    name: false,
    cpf: false,
    cnpj: false,
    email: false,
    phone: false,
    address: false
  })


  return (
   <Container>
      <Content>
        <input 
          placeholder="Nome"
          onChange={event => setForm({
            ...form,
            name: event.target.value
          })}
          value={form.name}

          onBlur={event => {
            setError({
              ...error,
              name: (form.name == "")
            })
          }}
          className={error.name ? 'error': ''}
        />

        { error.name && <span>Coloque seu nome completo :)</span> }


        <input 
          placeholder="CPF"
          onChange={event => setForm({
            ...form,
            cpf: cpf(event.target.value)
          })}
          value={form.cpf}

          onBlur={event => {
            setError({
              ...error,
              cpf: (form.cpf == "" || form.cpf.length < 10) 
            })
          }}
          className={error.cpf ? 'error': ''}
        />

        { error.cpf && <span>Por favor, informe seu CPF</span> }
      

        <input 
          placeholder="CNPJ MEI"
          onChange={event => setForm({
            ...form,
            cnpj: cnpj(event.target.value)
          })}
          value={form.cnpj}

          onBlur={event => {
            setError({
              ...error,
              cnpj: (form.cnpj == "" || form.cnpj.length < 13) 
            })
          }}
          className={error.cnpj ? 'error': ''}
        />

        { error.cnpj && <span>Por favor, informe seu CNPJ MEI</span> }
        


        <input 
          placeholder="Email"
          onChange={event => {
            setForm({
              ...form,
              email: event.target.value
            })}
          }
          onBlur={event => {
            setError({
              ...error,
              email: email(event.target.value)
            })
          }}
          value={form.email}
          className={error.email ? 'error': ''}
        />

        {error.email && <span>Email inválido, tente novamente</span> }

        <input 
          placeholder="Telefone"
          onChange={event => setForm({
            ...form,
            phone: phone(event.target.value)
          })}
          value={form.phone}

          onBlur={event => {
            setError({
              ...error,
              phone: (form.phone == "" || form.phone.length < 9) 
            })
          }}
          className={error.phone ? 'error': ''}
        />

        { error.phone && <span>Por favor, informe seu telefone</span> }
        

        <input 
          placeholder="Endereço"
          onChange={event => setForm({
            ...form,
            address: event.target.value
          })}
          onBlur={event => {
            setError({
              ...error,
              address: (form.address == "")
            })
          }}
          className={error.address ? 'error': ''}
        />

        { error.address && <span>Por favor, coloque seu endereço completo</span> }


        <SelectSelfie />

        <button type="submit">
          Cadastrar
        </button>

    </Content>
   </Container>
  )
}
 

