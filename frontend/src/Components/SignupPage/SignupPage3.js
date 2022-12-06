import React from 'react';
import { Link } from 'react-router-dom';
import ultimateLogo from '../../Images/ultimateLogo.png';
import istockphoto from '../../Images/istockphoto.png';

const SignupPage3 = () => {
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
						<p className='fw-bold pt-5'>SignUp Form</p>
						<form>
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
							<div className='row'>
								<div className='col-4'>
									<Link
										to='/signup2'
										className='btn btn-primary-outline mt-5'
									>
										Back
									</Link>
								</div>
								<div className='col-8'>
									<Link to='/attendance'>
										<button
											type='submit'
											className='button mt-5'
										>
											Sign Up
										</button>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage3;
