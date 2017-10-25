import React from 'react'
import PropTypes from 'prop-types'

const List = ({ data, onItemClick, removeItem, changeItemPosition }) => (
  <ul>
    {data.map((item, index) => (
      <ListItem
        key={item.id}
        text={item.name}
        onClick={() => onItemClick(item.id)}
        remove={() => removeItem(item.id)}
        isFirst={index === 0}
        isLast={index === data.length - 1}
        moveUp={() => changeItemPosition(index, index - 1)}
        moveDown={() => changeItemPosition(index, index + 1)}
      />
    ))}
  </ul>
)

List.propTypes = {
  data: PropTypes.array,
  onItemclick: PropTypes.func,
  removeItem: PropTypes.func,
  changeItemPosition: PropTypes.func
}

export default List

const ListItem = ({
  text,
  onClick,
  remove,
  moveUp,
  moveDown,
  isFirst,
  isLast
}) => (
  <li>
    <span onClick={onClick}>{text}</span>{' '}
    <button onClick={remove}>delete</button>{' '}
    {!isFirst && <button onClick={moveUp}>up</button>}{' '}
    {!isLast && <button onClick={moveDown}>down</button>}
  </li>
)

ListItem.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  remove: PropTypes.func,
  moveUp: PropTypes.func,
  moveDowm: PropTypes.func,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
}
