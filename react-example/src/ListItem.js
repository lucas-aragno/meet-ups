import React, { Component, PropTypes } from 'react'

class ListItem extends Component {

 constructor (props) {
   super(props)
   this.state = {
     hovered: false
   }
 }

 listStyle () {
   const { color, animatePadding, defaultPadding } = this.props
   const { hovered } = this.state
   return hovered
     ? { 'backgroundColor': color, 'paddingLeft': animatePadding, 'transition': '0.3s' }
     : { 'backgroundColor': color, 'paddingLeft': defaultPadding, 'transition': '0.3s' }
 }

 changeHover () {
   const { hovered } = this.state
   this.setState({
     hovered: !hovered
   })
 }

  render () {
    const { item } = this.props
    return (
      <li style={this.listStyle()} onMouseLeave={this.changeHover.bind(this)} onMouseEnter={this.changeHover.bind(this)}>
        {item}
      </li>
    )
  }
}

ListItem.propTypes = {
  itemz: PropTypes.string,
  animatePadding: PropTypes.number,
  defaultPadding: PropTypes.number,
  color: PropTypes.string
}

export default ListItem
