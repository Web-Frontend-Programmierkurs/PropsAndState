import React from 'react'
import PropTypes from 'prop-types'

const BeverageDetails = ({ name, description }) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
)

BeverageDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default BeverageDetails
