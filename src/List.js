import React from 'react'
import PropTypes from 'prop-types'

const List = ({ data, onItemClick }) => (
  <ul>
    {data.map(item => (
      <ListItem
        key={item.id}
        text={item.name}
        onClick={() => onItemClick(item.id)}
      />
    ))}
  </ul>
)

List.propTypes = {
  data: PropTypes.array,
  onItemclick: PropTypes.func
}

export default List

const ListItem = ({ text, onClick }) => <li onClick={onClick}>{text}</li>

ListItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
}
