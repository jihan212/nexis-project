import React from 'react';
import { Link } from 'react-router-dom';
import ultimateLogo from '../../Images/ultimateLogo.png';
import istockphoto from '../../Images/istockphoto.png';

const SignupPage2 = () => {
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
									type='tel'
									className='formField'
									required
								/>
								<label
									for='name'
									className='formLabel'
								>
									+880 XXXXXXXXXXX
								</label>
							</div>
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
							<div className='row'>
								<div className='col-4'>
									<Link
										to='/'
										className='btn btn-primary-outline mt-5'
									>
										Back
									</Link>
								</div>
								<div className='col-8'>
									<Link to='/signup3'>
										<button
											type='submit'
											className='btn btn-primary mt-5'
										>
											Next Step
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

export default SignupPage2;
