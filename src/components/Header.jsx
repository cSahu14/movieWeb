import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.header `
    height : 50px;
    color : #fff;
    display : flex;
    align-items : center;
    justify-content : center;
    font-weight : bold;
    font-size : 40px;

    @media (max-width: 768px) {
        height : 30px;
        font-weight : bold;
        font-size : 20px;
    }
`

const Header = () => {
  return (
    <HeaderDiv>ASTER MOVIE WEB</HeaderDiv>
  )
}

export default Header