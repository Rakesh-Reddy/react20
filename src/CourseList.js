import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeaderHome from '../Header/HeaderHome';

class courseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseDetails: []
        }
    }

    componentDidMount() {
        return new Promise((resolve, reject) => {
            axios.get('http://10.117.189.83:9090/api/courses').then((response) => {
                resolve(response);
                console.log(response)
                this.setState({ courseDetails: [response.data] });
            }).catch(function (error) {
                reject(error);
            })
        });
    }

    goToSummary = () => {
        this.props.history.push('/summary');
    }

    render() {
        return (
            <div className="pt-4">
                <HeaderHome />
                <button onClick={this.goToSummary}>Your Courses</button>
                {
                    this.state.courseList.map((item, i) => {
                        return (
                            <div className="row col-md-12 pt-3 pb-3" style={{ color: "#ff6200" }} key={i}>
                                <div className="col-md-12 text-success pb-4 pt-3"><b>List of Available Courses </b></div>
                                <div className="row col-md-12" ><div className="col-md-3"><button className="btn btn-large" style={{ backgroundColor: "#ff6200" }} onClick={this.addBenificiary}>Add Benificiary</button></div>
                                    <div className="col-md-2 pt-3">Course Id :</div><div className=" col-md-3 pt-3">  {item.courseId} </div><div className="col-md-3"></div>
                                </div>
                                <div className="row col-md-12"><div className="col-md-3"><button className="btn btn-large" style={{ backgroundColor: "#ff6200" }} onClick={this.fundTransfer}>Fund Transfer</button></div>
                                    <div className="col-md-2 pt-3"> Course Name :</div> <div className=" col-md-3 pt-3">{item.courseName} </div><div className="col-md-3"></div>
                                </div>
                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3"> Fee :</div>
                                    <div className="col-md-3 pt-3"> {item.fee} </div>
                                </div>
                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Duration:</div>
                                    <div className="col-md-3 pt-3">  {item.duration} </div>
                                </div>
                                <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Start Date :</div>
                                    <div className="col-md-3">  {item.startDate} </div>
                                </div>
                                <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Start Date :</div>
                                    <button className="col-md-3"> Enroll Course </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default courseList;