import React from 'react'
import * as S from './styles'
import { Button } from '../../components'
export const Service = () => {
  return (
    <>
      <Button text='ÁREA DE LAZER' bg='#85edf5'/>
      <Button text='CONSULTAR REGRAS' bg='#eef585'/>
      <Button text='SOLICITAÇÃO DE APOIO' bg='#f5d785'/>
      <S.Exit>
      <Button text='SAIR' bg='#f04a179b' color='#201e1d'/>
      </S.Exit>
    </>
  )
}

