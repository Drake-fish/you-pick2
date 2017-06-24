import React from 'react';

import store from '../store';


export default React.createClass({
  getInitialState(){
    return{
      isChecked:false
    }
  },
  render(){
    return(
  <div className="onoffswitch">
      <h4>{this.props.food}</h4>
      <input onChange={this.handleChange} type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id={this.props.food}/>
      <label className="onoffswitch-label" htmlFor={this.props.food}>
          <span className="onoffswitch-inner"></span>
          <span className="onoffswitch-switch"></span>
      </label>
  </div>
    );
  },
  handleChange(){
    this.setState({isChecked:!this.state.isChecked});
    if(this.state.isChecked===false){
      setTimeout(()=>{
      store.session.addFood(this.props.food);
    },1000);
    }else{
      setTimeout(()=>{
    store.session.removeFood(this.props.food);
  },1000);
  }
  }
});
