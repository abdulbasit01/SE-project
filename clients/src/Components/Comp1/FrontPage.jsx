import React, { Component } from 'react';   
import {Route ,Link} from 'react-router-dom';
import "./FrontPage.css"
class Selection extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="category">
                    <div className="student">
                        <Link to="/Selectors/Students">As A Student</Link>
                        
                    </div>  
                    <div className="teacher">
                        <Link to="/Selectors/Teacher">As A Teacher</Link>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Selection;