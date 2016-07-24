import React, { Component, PropTypes } from 'react'
import ListItem from './ListItem'

export default class AnimateMenu extends Component {
  static propTypes = {
    items: PropTypes.array,
    animatePadding: PropTypes.number,
    defaultPadding: PropTypes.number,
    oddColor: PropTypes.string,
    evenColor: PropTypes.string
  }

  static defaultProps = {
    items: [],
    animatePadding: 60,
    defaultPadding: 10,
    oddColor: '#eee',
    evenColor: '#ccc'
  }


  render () {
    const { items, animatePadding, defaultPadding, oddColor, evenColor } = this.props
    return (
      <ul>
        {
          items.map((item, index) => {
            const color = (index % 2 === 0) ? evenColor : oddColor
            return <ListItem
                     key={`${item}-key`}
                     item={item}
                     color={color}
                     defaultPadding={defaultPadding}
                     animatePadding={animatePadding}
                   />
          })
        }
      </ul>
    )
  }
}
