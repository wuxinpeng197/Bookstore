import React, { Component } from 'react';
import FormField from '../util/formfield';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { update, validate, generateData, isFormValid } from '../util/formAction';
import { registerUser } from '../../actions/user';
import Dialog from '@material-ui/core/Dialog';

class Register extends Component{
    state = {
        formError: false,
        formSuccess:false,
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
                    email:true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            name: {
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'name',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            lastname: {
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'lastname',
                    placeholder: 'Enter your lastname'
                },
                validation:{
                    required: true
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
            },
            confirmPassword: {
                element: 'input',
                value: '',
                config:{
                    name: 'confirmpassword_input',
                    type: 'confirmpassword',
                    placeholder: 'Enter your confirmPassword'
                },
                validation:{
                    required: true,
                    confirm: 'password'
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

        let dataToSubmit = generateData(this.state.formdata,'register')
        let valid = isFormValid(this.state.formdata,'register')
        
        if(valid){
            this.props.dispatch(registerUser(dataToSubmit)).then(res=>{
                if(res.payload.success){
                    this.setState(
                        {
                            formSuccess:true
                        }
                    )
                    setTimeout(()=>{
                        this.props.history.push('/register_login');
                        
                    },3000)
                }
                else{
                    this.setState(
                        {
                            formError:true
                        }
                    )
                }
            })
        }
        else{
            this.setState(
                {
                    formError:true
                }
            )
        }
  
    }

    render() {
        return(
            <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                    <h2>Personal information</h2>
            <form onSubmit={(event)=> this.submitForm(event)}>
            <FormField
            id={'email'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.email}
            ></FormField>
            <FormField
            id={'name'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.name}
            ></FormField>
            <FormField
            id={'lastname'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.lastname}
            ></FormField>
            <h2>Verify password</h2>
            <FormField
            id={'password'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.password}
            ></FormField>

            <FormField
            id={'confirmPassword'}
            change={(event)=>{this.UpdateForm(event)}}
            formdata={this.state.formdata.confirmPassword}
            ></FormField>

            <button onClick={(event)=> this.submitForm(event)}>
                        Register
            </button>
            { this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
            </form>     
                </div>
                <Dialog open={this.state.formSuccess}>
                    <div className="dialog_alert">
                        <div>Congratulations !!</div>
                        <div>
                            You will be redirected to the LOGIN in a couple seconds...
                        </div>
                    </div>
                </Dialog>

                </div>
                </div>
        </div>
        )
    }
}

export default connect()(withRouter(Register));