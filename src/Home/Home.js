import React, { Component } from 'react';
import axios from 'axios';
import HeaderHome from '../Header/HeaderHome';
import swal from 'sweetalert';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            courseSummary: [],
            details: false,
            showDetails:true
        }
    }

    componentDidMount() {
        console.log("in Home", this.props)
        if (this.props.data.isRegistered === "yes") {
            axios.get(`http://10.117.189.18:9091/ingeducation/api/summary/${this.props.data.studentId}`).then((response) => {
                this.setState({ courseSummary:[ response.data] });
                console.log(response)
            }).catch(function (error) {
            })
        }
        else {
            axios.get('http://10.117.189.18:9091/ingeducation/api/courses').then((response) => {
                this.setState({ courseList: response.data });
            }).catch(function (error) {
            })
        }
    }

    details = () => {
        this.setState({ details: true,showDetails:false });

    }

    enroll = (item) => {
        const enroll = {
            studentId: this.props.data.studentId,
            courseId:item.courseId
        }
        axios.post('http://10.117.189.18:9091/ingeducation/api/enrollment',enroll).then((response) => {
            swal('Enrolled Successfully');
            console.log(response)
        }).catch(function (error) {
        })
    }

    render() {
        const { details,showDetails } = this.state;
        return (
            <div className="pt-4">
                <HeaderHome />
                { 
                    (this.props.data.isRegistered === "no") ? (
                        this.state.courseList.map((item, i) => {
                            return (
                                <div className="row col-md-12" key={i}>
                                <div className=" col-md-12 border border-top pt-3 pb-3" style={{ color: "#ff6200" }} key={i}>
                                    <div className="col-md-12">
                                    <div className="col-md-4 text-success pb-4 pt-3"><b> Course </b></div>
                                    <div className="row col-md-12" ><div className="col-md-3"></div>
                                        <div className="col-md-2 pt-3">Course Id :</div><div className=" col-md-3 pt-3">  {item.courseId} </div><div className="col-md-3"></div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div>
                                        <div className="col-md-2 pt-3"> Course Name :</div> <div className=" col-md-3 pt-3">{item.courseName} </div><div className="col-md-3"></div>
                                    </div>
                                    <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3"> Fee (Per Annum):</div>
                                        <div className="col-md-3 pt-3"> {item.fee} </div>
                                    </div>
                                    <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2"></div>
                                     { (this.state.showDetails === true) ? (<button id="btn1" className="col-md-3" style={{ backgroundColor: "#ff6200" }} onClick={this.details}>  Details </button>) : null}
                                    </div>
                                    {
                                        (this.state.details === true) ? (
                                            <div className="row col-md-12">
                                                <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2">Course Start Date :</div>
                                                    <div className="col-md-3">  {item.startDate} </div></div>
                                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Duration:</div>
                                                    <div className="col-md-3 pt-3">  {item.duration} </div>
                                                </div>
                                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Eligibility:</div>
                                                    <div className="col-md-3 pt-3">+2 pass for Bachelors, Bachelor Degree for Masters (as applicable) </div>
                                                </div>
                                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">College Campus:</div>
                                                    <div className="col-md-3 pt-3">  Bangalore & Delhi </div>
                                                </div>
                                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Admission Criteria:</div>
                                                    <div className="col-md-3 pt-3">  Through Entrance test and Personal Interview </div>
                                                </div>
                                                <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2"></div>
                                        <button style={{ backgroundColor: "#ff6200" }} className="col-md-3" onClick={()=>this.enroll(item)}>  Enroll Course </button>
                                    </div>
                                    {/* <div className="row pt-3 col-md-12"><div className="col-md-3"></div><div className="col-md-2"></div>
                                        <button style={{ backgroundColor: "#ff6200" }} className="col-md-3" onClick={this.closeDetails}>  Close </button>
                                    </div> */}
                                            </div>
                                        ) : null
                                    }
                                    </div>
                                </div>
                                </div>
                            )
                        }) 
                    ) : (this.state.courseSummary.map((item, i) => {
                        return (
                            <div className="row col-md-12 pt-3 pb-3" style={{ color: "#ff6200" }} key={i}>
                                
                                <div className="col-md-12 text-success pb-4 pt-3"><b>Details of Enrolled Course </b></div>
                                <div className="row col-md-12" ><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3">Enrollment ID :</div><div className=" col-md-3 pt-3">  {item.enrollmentId} </div><div className="col-md-3"></div>
                                </div>
                                <div className="row col-md-12" ><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3">Course Name :</div><div className=" col-md-3 pt-3">  {item.courseName} </div><div className="col-md-3"></div>
                                </div>
                                 <div className="row col-md-12"><div className="col-md-3"></div>
                                    <div className="col-md-2 pt-3">Duration :</div> <div className=" col-md-3 pt-3">{item.duration} </div><div className="col-md-3"></div>
                                </div>
                               <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3"> Fee :</div>
                                    <div className="col-md-3 pt-3"> {item.fee} </div>
                                </div>
                                <div className="row col-md-12"><div className="col-md-3"></div><div className="col-md-2 pt-3">Start Date:</div>
                                    <div className="col-md-3 pt-3">  {item.enrollDate} </div>
                                </div>
                            </div>
                        )
                    })
                        )
                }

            </div>
        );
    }
}

export default HomePage;