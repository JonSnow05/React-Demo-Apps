import axios from 'axios'
import React, { Component } from 'react'

class HttpGetExmpl extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             post:[]
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (res) => {
                this.setState({
                    post:res.data
                })
            }
        )
    }
    render() {
        const {post} = this.state
        return (
            <div>
                {post.length ? post.map(post => <h3> {post.title}</h3>) : ""}
            </div>
        )
    }
}

export default HttpGetExmpl
