import React, { Component } from 'react';
import {Route ,Link} from 'react-router-dom';
import {Nav, NavItem, NavLink} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import "../Students/stdLogin.css"
import "../Students/bootstrap.css"
import Teacher from "../Teacher/Teacher"
class LoginSignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin:true,
             isRegister:false,
             username:"test",
             password:"1234",
        }
    }
    showRegister=(e)=>{
        this.setState({
            isLogin:false,
            isRegister:true,
        })
    }
    showLogin=()=>{
        this.setState({
            isLogin:true,
            isRegister:false,
        })
        console.log(this.state)
    }
    render() { 
        return (
            <React.Fragment>
                <div className="root-container input-form-control">
                    <div className="box-controller">
                        <div className="controller" onClick={this.showLogin}>
                            Login
                        </div>
                        <br/>
                        <div className="controller" onClick={this.showRegister}>
                            Sign Up
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    {this.state.isLogin && <Login/>}
                    {this.state.isRegister && <Register/>}
                </div>
            </React.Fragment>
          );
    }
}
export default LoginSignUp;
class Login extends Component{
    constructor(props) {
        super(props)
        this.state={    
            username:"test",
            password:"xyJKwI903478",
        }
    }
    nameRef=React.createRef()
    password=React.createRef()
    checkFields=(e)=>{
        let userName=this.nameRef.current.value;
        let password=this.password.current.value
        if (userName==="test" && password==="xyJKwI903478"){
            console.log("Matched")
        }
        else{
            alert("Some Faulty Values")
        }
    }
    
    render(){
        return(
            <div className="inner-container">
            <div className="box">
                <div className="input-group row">
                    <label htmlFor="username"  className="col-lg-1">username</label>
                    <input type="text" id="username" placeholder="username" className="input-b col-lg-5" ref={this.nameRef}/>
                </div>
                <div className="input-group row" >
                    <label htmlFor="password"  className="col-lg-1">password</label>
                    <input type="password" id="password" placeholder="password" className="input-b col-lg-5" ref={this.password}/>
                </div>
                
                <div className="row">
                    <input type="submit" value="login" className="btn btn-success customBtn" onClick={this.checkFields}/>
                </div>
            </div>
        </div>
        )
    }
}
class Register extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             errors:[],
             information:{
                name:"",
                password:"",
                cfPassword:""
             }
        }
    }
    // showValidationError=(element,message)=>{
    //     this.setState((prevState)=>({errors:[...prevState.errors , {element, message} ] } ) );
    // }
    nameRef=React.createRef()
    password=React.createRef()
    emailE=React.createRef()
    cfPassword=React.createRef()
    
    onChangeUser=(e)=>{
        let valN=this.nameRef.current.value;
        let valP=this.password.current.value;
        let valCF=this.cfPassword.current.value;
        let valE=this.emailE.current.value;
        this.setState({
           information:{
                name:valN,
                email:valE,
                password:valP,
                cfPassword : valP===valCF ? valCF: null
               
            }
        })
        console.log(this.state.information)


    }
    submitForm=(e)=>{

    }
    submiRegister=(e)=>{
        null
    }
    render(){
       return(
        <div className="inner-container">
        <div className="box">
                <div className="input-group row">
                    <label htmlFor="username " className="col-lg-2">User name</label>
                    <input type="text" id="username" placeholder="username" className="input-b col-lg-5" ref={this.nameRef} onChange={this.onChangeUser}/>
                </div>
                <div className="input-group row">
                    <label htmlFor="password" className="col-lg-2">Set Password</label>
                    <input type="password" id="password" placeholder="password" className="input-b col-lg-5" ref={this.password} onChange={this.onChangeUser}/>
                </div>
                <div className="input-group row" >
                    <label htmlFor="password-c"  className="col-lg-2">confirm password</label>
                    <input type="password" id="password-c" placeholder="confirm password" className="input-b col-lg-5" ref={this.cfPassword} onChange={this.onChangeUser}/>
                </div>
                <div className="input-group row">
                    <label htmlFor="email" className="col-lg-2">Email</label>
                    <input type="email" id="email" placeholder="email" className="input-b col-lg-5" ref={this.emailE} onChange={this.onChangeUser}/>
                </div>
                <div className="row">
                    <label htmlFor="" className="col-lg-2">subjects</label>
                    <div className="col-lg-5 customDiv">
                        <div id="checkboxes" className={this.classes} >
                            <label htmlFor="four"><input type="checkbox" id="four" value="Agha Khan Board"/>AKU</label>
                            <label htmlFor="four"><input type="checkbox" id="four" value="Federal Board"/>Federal Boards</label>
                            <label htmlFor="four"><input type="checkbox" id="four" value="Sindh Board"/>Sindh Board</label>
                            <label htmlFor="four"><input type="checkbox" id="four" value="Others"/>Others</label>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <button className="btn btn-success customBtn" onClick={this.submitRegister}>Register</button>
                </div>
                
            </div>
            
        </div>
        
       );
    }
}