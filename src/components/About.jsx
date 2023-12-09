import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component{
    render(){
        return(
            <div >
                <div >
                    <button >
                        <Link to='/' >Home</Link>
                    </button>
                </div>
                <div>
                    <div >
                        <h1 >Welcome to About Page</h1>
                    </div>
                    
                </div>
                <div >
                    <div >
                        <p >Here i should talk about the page. This is made in React. Im practising Routting with this about page. Thanks you!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;