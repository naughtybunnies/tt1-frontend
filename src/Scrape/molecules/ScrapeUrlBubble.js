import React, { Component } from 'react'
import MenuBubble from '../atoms/MenuBubble'
import { faFile } from "@fortawesome/free-solid-svg-icons";


export default class ScrapeUrlBubble extends Component {
  render() {
    return (
      <MenuBubble icon={faFile}/>
        
    )
  }
}
