import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login,loginFail,middlewarefunc } from '../actions/actions'
import LoginForm from '../components/LoginForm'
import LoginSuccess from '../components/LoginSuccess'
import LoginSuccessContainer from './LoginSuccessContainer'





const App = ({  responseData,onLoginClick }) => (
  <div>

      {
        responseData.invalidCredentials?<span>please enter valid credentials</span>:<span></span>
      }
      {responseData.loginSuccessfull?<LoginSuccessContainer />  : <LoginForm onSubmit={(id, pass) =>
         onLoginClick(id,pass)
      } />

    }

  </div>
)

const mapStateToProps = (state) => {
  console.log("mapStateToProps")
  console.log(state.LoginReducer);
   return {
      responseData:state.LoginReducer

   }
};
const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
   return {

     onLoginClick: (id,pass) => {
       //we make ajax call here and on its response we set condition
    /*  if(id==='username' && pass=='password')
      {
      dispatch(login(id,pass));
    }
    else {
        console.log("dispatch logout");
    dispatch(loginFail());
    }
    */

    dispatch(middlewarefunc(id,pass));
     }

   }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
