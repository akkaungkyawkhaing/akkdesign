import React, { Component } from 'react'
export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            formErrors: {name: '', email: '', subject: '', message: ''},
            nameValid: false,
            emailValid: false,
            subjectValid: false,
            messageValid: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e){
    //     e.preventDefault();
    //     axios({
    //       method: "POST", 
    //       url:"http://localhost:3002/send", 
    //       data:  this.state
    //     }).then((response)=>{
    //       if (response.data.status === 'success'){
    //         alert("Message Sent."); 
    //         this.resetForm()
    //       }else if(response.data.status === 'fail'){
    //         alert("Message failed to send.")
    //       }
    //     })
    //   }

      resetForm(){
    
        this.setState({name: '', email: '', subject: '', message: ''})
     }
    

    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Get in Touch</span>
                                <h2 className="colorlib-heading">Contact</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-mail"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        {/* <p><a href="mailto:aungkyawkhaing22@freelancedev.work"><span className="__cf_email__" data-cfemail="dfb6b1b9b09fbbb0b2beb6b1f1bcb0b2">aungkyawkhaing22@freelancedev.work</span></a></p> */}
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-phone"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        {/* <p><a href="tel://+1210-501-1002">+1 (210) 501 1002</a></p> */}
                                        <p>-</p>
                                    </div>
                                </div>
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-map"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-7 col-md-push-1">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                        <form action="" id="contact-form">
                                            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                                <input type="text" className="form-control required" placeholder="Name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
                                            </div>
                                            <div className="form-group">
                                                <textarea name="text" id="message" cols="30" rows="7" className="form-control" placeholder="Message" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="button" className="btn btn-primary btn-send-message" value="Send Message" />   
                                            </div>
                                            {/* onClick={this.handleSubmit} */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div> */}

                <div className="footer">
                    <p>
                        <small>
                            Copyright {(new Date().getFullYear())}&nbsp;AK, All rights reserved
                            {/* Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true"></i><br></br> */}
                        </small>
                    </p>
                </div>
            
            </div >
        )
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let subjectValid = this.state.subjectValid;
        let messageValid = this.state.messageValid;
      
        switch(fieldName) {
            case 'name':
                nameValid = value.length > 3;
            fieldValidationErrors.name = nameValid ? '': ' is too short';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'subject':
                subjectValid = value.length > 6;
                fieldValidationErrors.subject = subjectValid ? '': ' is too short';
                break;
            case 'message':
                messageValid = value.length > 6;
                fieldValidationErrors.message = messageValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        emailValid: emailValid,
                        subjectValid: subjectValid,
                        messageValid: messageValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.name && this.state.emailValid && this.state.subjectValid && this.state.message});
      }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
      }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
    handleSubmit(event) {

        if (this.state.name != "" && this.state.email != "" && this.state.subject != "" && this.state.message != "")
        {
            const templateId = 'template_design_Ak';

            this.sendFeedback(templateId, {from_name: this.state.name, from_email: this.state.email, from_subject: this.state.subject, from_message: this.state.message})
        }
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            //console.log('Email successfully sent!')
            this.resetForm()
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    // blog.mailtrap.io/react-contact-form/
    // blog.mailtrap.io/react-send-email/
}