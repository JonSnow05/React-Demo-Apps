import React,{Component} from 'react';

class Welcome extends Component{
    render () {
        return(
            <div>
            <h5>This is Example of Class Component</h5>
            {this.props.name} aka {this.props.hero}
            </div>
        )
    }
}

export default Welcome