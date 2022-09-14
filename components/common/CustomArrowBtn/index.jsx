import React from 'react'
import styled from 'styled-components'
import {CgArrowLongRight} from 'react-icons/cg'

const CustomArrowBtn = styled.button`
    cursor: pointer;
    color: ${props => props.color};
    border: none;
    background: transparent;
    font-family: 'Poppins';
    font-weight: 500;
    svg {
        color: ${props => props.color};
        vertical-align: middle;
        margin-left: 8px;
        font-size: 18px;
    }
`
const CustomArrBtn = ({title,color}) => {
  return (
      <CustomArrowBtn color={color}>{title} <CgArrowLongRight/></CustomArrowBtn>
    )
}

export default CustomArrBtn