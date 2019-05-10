import React, {PureComponent} from 'react'
import './SignupForm.css'

export default class SignupForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
  
  			<form className="signup-form" onSubmit={this.handleSubmit}>
  				<label>
            Email
  					<br/>
            <input className="input" type="email" name="email" value={
  						this.state.email || ''
  					} onChange={ this.handleChange } />
          </label>
					<br/>
  				<label>
            Password
						<br/>
  					<input className="input" type="password" name="password" value={
							this.state.password || ''
  					} onChange={ this.handleChange } />
  				</label>
					<br/>
  				<label>
            Confirm password
						<br/>
  					<input className="input"  type="password" name="confirmPassword" value={
							this.state.confirmPassword || ''
  					} onChange={ this.handleChange } />
  				</label>
					<br/>
  				{
  					this.state.password &&
  					this.state.confirmPassword &&
  					this.state.password !== this.state.confirmPassword &&
  					<p style={{color:'red'}}>The passwords do not match!</p>
  				}
<br/>
  				<button className="submit" type="submit">Sign up</button>
  			</form>
      
		)
	}
}
