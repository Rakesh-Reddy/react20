import React, { Component } from 'react';
//import { Link, withRouter } from 'react-router-dom';
import Header from '../Header/Header'
import axios from 'axios';
import { withTranslation } from 'react-i18next';
import swal from 'sweetalert';
import CheckboxIcon from '@material-ui/core/Checkbox';
//import Home from '../Home/Home';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                loginName: '',
                password: ''
            },
            responseData: []
        }
    }
    handleChange = (event) => {
        const { loginData } = this.state;
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });
    }

    gotoHome = () => {
        this.getData().then(response => {
            // console.log(response.data, this)
            if (response.status === 200) {
                this.setState({ responseData: response.data });
                this.props.getUserData(response.data, this.props);
            } else {
                swal('Invalid User name or password');
            }
        }).catch(err => {
            console.log(err)
            swal(err.message)

        })
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            // console.log(this.state.loginData);
            axios.put('http://10.117.189.18:9091/ingeducation/api/login', this.state.loginData).then((response) => {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        })
    }

    render() {
         let { t } = this.props;
        const { responseData } = this.state;
        return (
            <div className="pb-5">
                <Header />

                <div className="row">
                    <div className="col-md-12 pt-4 pb-2">
                    </div>
                    <div className="col-md-12 pt-4 pb-3">
                        <h2 className="text-primary">{t('loginpage')}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="row col-md-12 pb-2 text-info"><div className="col-md-3"></div>
                    <div className="col-md-2 pt-3"> {t('Enter UserName')} : </div> <input className="col-md-3 userName" id="userName" style={{ height: "47px" }}
                            placeholder="Enter Your UserName " type="text"
                            name="loginName" required
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="row col-md-12 pb-3 text-info"><div className="col-md-3"></div>
                      <div className="col-md-2 pt-3"> {t('Enter Password')} : </div>  <input className="col-md-3" id="password" style={{ height: "47px" }}
                            placeholder="Enter Your Password " type="password"
                            name="password" required
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-2">
                        <p className="text-info">{t('forgot password?')} </p>
                    </div>
                    <div className="col-sm-2">
                        <CheckboxIcon />
                       {t('Remember Me')} 
          </div>
                </div>
                <button className="btn btn-primary" style={{ width: "300px" }} onClick={this.gotoHome} >Submit</button>
            </div>
        );
    }
}

export default withTranslation()(withRouter(Login));
