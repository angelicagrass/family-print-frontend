import React from 'react'
import PuffLoader from 'react-spinners/ClipLoader'

const Loader = () => {
  return (
    <PuffLoader color={props => props.theme.colors.main} size={50} />
  )
}

export default Loader