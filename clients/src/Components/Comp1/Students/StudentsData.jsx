import React, { Component } from 'react';
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import {CSSTransition , TransitionGroup} from "react-transition-group";
import uuid from "uuid";
class Data extends Component {
    state = { 
       data:[
        {id:uuid(),name:"abdul bsit"},
        {id:uuid(),name:"hadi hussain"}
       ]
     }
    render() { 
        const {data}=this.state;
        return ( 
           <Container>
               <Button color="dark" 
               onClick={()=>{
                   const name=prompt("Enter Name");
                    this.setState(state=>({
                        data:[...state.data,{id:uuid(),name}]
                    },console.log(this.state)))
               }}
               >
                    Add User
               </Button>
           </Container>
         );
    }
}
 
export default Data;