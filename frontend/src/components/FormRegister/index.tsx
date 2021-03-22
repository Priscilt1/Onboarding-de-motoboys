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
  console.log(value)
  value = value.replace(/\D/g,"") 

  if(value.length >11)
      value = value.slice(0, -1)

      value = value.replace(/(\d{3})(\d)/, '$1.$2') 
      value = value.replace(/(\d{3})(\d)/, '$1.$2') 
      value = value.replace(/(\d{3})(\d)/, '$1-$2') 

  console.log(value)

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

export function FormRegister() {
  const [form, setForm] = useState<FormProps>({
    name: '',
    cpf: '',
    cnpj: '',
    email: '',
    phone: '',
    address: ''
  })

  console.log(form)

  return (
   <Container>
      <Content>
        <input 
          placeholder="Nome"
          onChange={event => setForm({
            ...form,
            name: event.target.value
          })}
        />

        <input 
          placeholder="CPF"
          onChange={event => setForm({
            ...form,
            cpf: cpf(event.target.value)
          })}
          value={form.cpf}
        />

        <input 
          placeholder="CNPJ MEI"
          onChange={event => setForm({
            ...form,
            cnpj: cnpj(event.target.value)
          })}
          value={form.cnpj}
        />

        <input 
          placeholder="Email"
          onChange={event => setForm({
            ...form,
            email: event.target.value
          })}
        />

        <input 
          placeholder="Telefone"
          onChange={event => setForm({
            ...form,
            phone: event.target.value
          })}
        />

        <input 
          placeholder="Endereço"
          onChange={event => setForm({
            ...form,
            address: event.target.value
          })}
        />

        <SelectSelfie />

        <button type="submit">
          Cadastrar
        </button>

    </Content>
   </Container>
  )
}
 

