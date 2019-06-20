import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import INGLOGO from '../INGLOGO.png';
import { withTranslation } from 'react-i18next';


class HeaderHome extends Component {

    handleSelect = (event) => {
        let { i18n } = this.props;
        i18n.changeLanguage(event.target.value);
      }

    render() {
        const {t} = this.props;
        return (
            <div className="row col-md-12" style={{backgroundColor:"#ff6200" , height:"85px"}}>
                <div className="col-md-4 pt-4 pb-5">
                   <Link to="/home" style={{textDecoration:"none"}}> <h2 className="text-white">{t('ING College of Education')}</h2></Link>
                    </div>
                    <div className="col-md-1 pt-3 pb-5">
                        <img className="fluid" width="100px" height="60px" src={INGLOGO} alt="" />
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2 pt-4">
                        <Link to="/"className="text-white" style={{textDecoration:"none"}}>{t('Logout')}</Link>
                    </div>
                    <div className="col-md-2 pt-4 pb-5">
                    <select className="col-md-12 text-white" style={{ backgroundColor: "#ff6200", height: "40px" }} onChange={this.handleSelect}>
                        <option value="en">English</option>
                        <option value="sp">Spanish</option>
                    </select>                    </div>
            </div>
        );
    }
}

export default withTranslation()(HeaderHome);
