import React from 'react';
import { Link } from 'react-router-dom';
import ultimateLogo from '../../Images/ultimateLogo.png';
import istockphoto from '../../Images/istockphoto.png';

const LoginPage = () => {
	return (
		<div>
			<img
				src={ultimateLogo}
				alt=''
			/>
			<div className='container text-center'>
				<div className='row'>
					<div className='col-8'>
						<img
							src={istockphoto}
							alt=''
						/>
					</div>
					<div className='col-4 shadow-lg p-3 mb-5 bg-body rounded signUpForm'>
						<p className='fw-bold pt-5'>Log In Form</p>
						<form>
							<div className='formGroup field'>
								<input
									type='email'
									className='formField'
									required
								/>
								<label
									for='name'
									className='formLabel'
								>
									Write Email Address
								</label>
							</div>
							<div className='formGroup field'>
								<input
									type='password'
									className='formField'
									required
								/>
								<label
									for='name'
									className='formLabel'
								>
									Write Password
								</label>
								<div
									id='emailHelp'
									class='form-text'
								>
									Your password must be 8 character
								</div>
							</div>
							<Link to='/attendance'>
								<button
									type='submit'
									className='btn btn-primary mt-5'
								>
									Log In
								</button>
							</Link>

							<Link to='/'>
								<div class='form-text pt-3'>
									Don't Have an account?{' '}
								</div>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
