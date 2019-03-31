import React, { Component } from 'react'
import RepositoryCardBubble from "../Home/atoms/RepositoryCardBubble";

export default class BubbleStream extends Component {
    constructor(props){
        super(props)
        this.state = {"myEventSource": new EventSource("http://localhost:5000/api/stream")}
    }

    componentDidMount = () => {
        this.state.myEventSource.onmessage = (e) => {
            console.log(e)
        }
        this.state.myEventSource.onerror = (e) => {
            console.log(e)
        }
    }

    handleStreamEvent = (event) => {
        console.log(event)
        // this.setState({"ste"})
    }

	render() {
		return (
			<div>
				<RepositoryCardBubble />        
			</div>
		)
	}
}
