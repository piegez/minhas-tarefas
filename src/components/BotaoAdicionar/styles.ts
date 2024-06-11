import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  bottom: 40px;
  border-radius: 50%;
  right: 40px;
  text-decoration: none;
`
