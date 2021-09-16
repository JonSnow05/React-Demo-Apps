import React, { Component } from 'react'
import RefForwarding from './RefForwarding'
import RefWithComponentChild from './RefWithComponentChild'

class ParentRef extends Component {
    constructor(props) {
        super(props)
    
        this.parentRef = React.createRef()
    }
    
    onClickHandle = () => {
        /* this.parentRef.current.focusElement() */ //RefWithComponentChild.js

        this.parentRef.current.focus()
    }
    render() {
        return (
            <div>
                {/* <RefWithComponentChild ref={this.parentRef}/> */}
                <RefForwarding ref={this.parentRef} />
                <button onClick={this.onClickHandle}>Focus</button>
            </div>
        )
    }
}

export default ParentRef
