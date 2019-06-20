import React from 'react';
import {shallow} from 'enzyme';
import HomePage from '../Home/Home';

describe('When EventComponent  component is given', () => {
    let wrapper;
    let data = {
        isRegistered: 'yes'
    }
    it('should render', () => {
      wrapper = shallow(<HomePage data={data}/>);
      expect(wrapper).toHaveLength(1);
    });
  
    it('should render buttons', () => {
      wrapper = shallow(<HomePage />);
      expect(wrapper.find('#btn1')).toHaveLength(1);
    });

    // describe('When first button is cliked', () => {
    //     it('should have called details function', () => {
    //       const spy = jest.spyOn(wrapper.instance(), 'details');
    //       wrapper.instance().forceUpdate();
    //       wrapper.find('#btn1').simulate('click');
    //       expect(spy).toHaveBeenCalled();
    //     });
    //   });

});