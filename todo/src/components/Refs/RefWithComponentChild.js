import React, { Component } from 'react'

 class RefWithComponentChild extends Component {
     constructor(props) {
         super(props)
     
        this.inputRef = React.createRef()
     }
     
     focusElement() {
        this.inputRef.current.focus()
     }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
            </div>
        )
    }
}

export default RefWithComponentChild
