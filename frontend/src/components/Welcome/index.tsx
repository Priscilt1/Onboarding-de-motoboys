import React from "react"
import { Container } from './styles'
import { Wave } from '../Wave'
import { WelcomeMain } from '../WelcomeMain'

export function Welcome() {
  return (
    <>
      <Container>
        <h1>Seja bem vindo! {':)'} </h1>
        <WelcomeMain />
      </Container>
      <Wave />
    </>
  )
}