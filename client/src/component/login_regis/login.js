import React, { Component } from 'react';
import FormField from '../util/formfield';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { update, validate, generateData, isFormValid } from '../util/formAction';
import { loginUser } from '../../actions/user';

class Login extends Component{
    state = {
        formError: false,
        formSuccess:'',
        formdata:{
            email: {
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password: {
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }
    

    UpdateForm(event){
        const newFormdata = update(event,this.state.formdata,'dasd')
        this.setState({
            formError: false,
            formdata: newFormdata
        }
        )
    }

    submitForm(event){
        event.preventDefault();
        let dataToSubmit = generateData(this.state.formdata,'login')
        let valid = isFormValid(this.state.formdata,'login')
        console.log('submit',valid)
        if(valid){
            this.props.dispatch(loginUser(dataToSubmit)).then(response =>{
                if(response.payload.loginSuccess){
                    console.log(response.payload);
                    this.props.history.push('/user/dashboard')
                }else{
                    this.setState({
                        formError: true
                    })
                }
            });
        }
        else{
            this.setState({
                formError:true
            }
            )                
        }
    }

    render() {
        return(
        <div className='signin_wrapper'>
            <form onSubmit={(event)=> this.submitForm(event)}>
            <FormField
            id={'email'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.email}
            ></FormField>
            <FormField
            id={'password'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.password}
            ></FormField>
            <button onClick={(event)=> this.submitForm(event)}>
                        Log in
            </button>
            <button 
                        style={{marginLeft:'10px'}}
                        onClick={()=> this.props.history.push('/reset_user') }>
                       Forgot my password
            </button>
            { this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
            </form>     

        </div>
    )
    
    }
}

export default connect()(withRouter(Login));