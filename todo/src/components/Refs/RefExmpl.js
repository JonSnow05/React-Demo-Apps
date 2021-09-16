import React, { Component } from 'react'

 class RefExmpl extends Component {

    constructor(props) {
        super(props)
    
        this.inputref = React.createRef();
        this.inputref2 = null;
        this.setRefs = element => {
            this.inputref2=element
        }
    }

    componentDidMount() {
        this.inputref.current.focus()
       /*  if(this.inputref2){
            this.inputref2.focus()
        } */ //THis is a old way to create ref for an element
    }
    
    onClickHandler = () => {
        alert(`Your Name : ${this.inputref.current.value}`)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputref} />
                <input type='text' ref={this.setRefs} />
                <button onClick={this.onClickHandler}>Alert</button>
            </div>
        )
    }
}

export default RefExmpl
