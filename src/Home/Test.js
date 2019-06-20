import React, {Component} from 'react';
import { AppContext } from '../App';

class Test extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        console.log("in render Test:", this.props)
        return (
            <div>HIhi</div>
        )
    }
}

export default Test;