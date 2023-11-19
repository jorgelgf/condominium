import { Button, HeaderService } from '../../components'
import * as S from './styles'
import pool from '../../img/pool.png'
import { useState } from 'react'
export const Pool = () => {
const [scheduler, setScheduler] = useState(false)

  const handleClickSchedule =()=>{setScheduler(true)}
  return (
      <>
    <HeaderService image={pool} text='pool-icon'children='ÁREA DE LAZER'/>
    <S.Container>
    <Button text='AGENDAR' onClick={handleClickSchedule} bg='#9cf3a0' color="#222422"/>
    <Button text='CONSULTAR' bg='#9cf3f3' color="#1f2020"/>
    </S.Container>
    <S.Back>
      <Button text='VOLTAR' bg='#f8f66dfa'></Button>
    </S.Back>
    </>
  )
}

