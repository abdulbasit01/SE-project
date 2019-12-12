import React ,{Component}from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {Route ,Link} from 'react-router-dom';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css"
class Slider extends Component {
    state={
        test1:{
            id: uuid(),
            name:"Test1",
            Speciality:"Computer Science Maths Stats",
            PreviousRating:"Excellent",
            Education:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        test2:{
            name:"Test1",
            Speciality:"A-levels",
            PreviousRating:"Ordinary",
            Education:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        test3:{
            name:"Test1",
            Speciality:"Computer Science Maths Stats",
            PreviousRating:"Excellent",
            Education:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        test4:{
            name:"Test1",
            Speciality:"Computer Science Maths Stats",
            PreviousRating:"Good",
            Education:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        }
    }
    render() { 
        return (
                <div>
                    <h1 className="">Some Verified Profiles</h1>
                    <Card body outline color="secondary">
                        <CardTitle>{this.state.test1.name}</CardTitle>
                        <CardText>{this.state.test1.Speciality}</CardText>
                        <CardText>{this.state.test1.PreviousRating}</CardText>
                        <CardText>{this.state.test1.Education}</CardText>
                        <Link to="/Selectors/Students"><Button>Hire</Button></Link>
                    </Card>
                    <Card body outline color="secondary">
                        <CardTitle>{this.state.test2.name}</CardTitle>
                        <CardText>{this.state.test2.Speciality}</CardText>
                        <CardText>{this.state.test2.PreviousRating}</CardText>
                        <CardText>{this.state.test2.Education}</CardText>
                        <Link to="/Selectors/Students"><Button>Hire</Button></Link>
                    </Card>
                </div>
          );
    }
}
 
export default Slider ;
