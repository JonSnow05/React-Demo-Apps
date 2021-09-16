
import React, { Component } from 'react'
import UpdateComponent from './Counter'

export class ClickCounter extends Component {
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount} > Clicked - {count}</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter)
