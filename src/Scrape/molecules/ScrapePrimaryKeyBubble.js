import React, { Component } from 'react'
import MenuBubble from '../atoms/MenuBubble'
import { faKey } from "@fortawesome/free-solid-svg-icons";

export default class ScrapePrimaryKeyMenu extends Component {
  render() {
    return (
      <MenuBubble icon={faKey}/>
    )
  }
}
