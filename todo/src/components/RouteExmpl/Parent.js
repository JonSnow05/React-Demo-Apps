import React from 'react'
import{Switch,Link,Route,BrowserRouter as Router} from 'react-router-dom'
import About from './About'
import Home from './Home'
import NotFoundPage from './NotFoundPage'
import Post from './Post'

function Parent() {
    return (
        <Router basename='/react'>
        <div >
            <ul className='nav'>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/post" >Post</Link></li>
                <li><Link to="/about" >About us</Link></li>
            </ul>
            {/* <Link to=""></Link> */}
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/post/:id" component={Post}/>
            <Route path="/about" component={About}/>
            <Route  component={NotFoundPage} />
            </Switch>
        </div>
        </Router>
    )
}

export default Parent
