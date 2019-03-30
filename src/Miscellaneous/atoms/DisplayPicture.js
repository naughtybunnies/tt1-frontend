import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    border-radius: 100%;
    width: 250px;
    height: 250px;
    object-fit: cover;
`


export default function DisplayPicture(props) {
  return (
    <Image src={ props.image || require('./mock.jpg') } alt=""/>
  )
}
