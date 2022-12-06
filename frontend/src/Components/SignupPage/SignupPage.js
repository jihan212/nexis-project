import React from 'react';
import { Link } from 'react-router-dom';
import ultimateLogo from '../../Images/ultimateLogo.png';
import istockphoto from '../../Images/istockphoto.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SignupPage = () => {
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
						<p className='fw-bold pt-5'>SignUp From</p>
						<form>
							<div className='formGroup field'>
								<input
									type='input'
									className='formField'
									placeholder='Name'
									name='name'
									id='name'
									required
								/>
								<label
									for='name'
									className='formLabel'
								>
									Write First Name
								</label>
							</div>
							<div className='formGroup field'>
								<input
									type='input'
									className='formField'
									placeholder='Name'
									name='name'
									id='name'
									required
								/>
								<label
									for='name'
									className='formLabel'
								>
									Write Last Name
								</label>
							</div>
							<Link to='/signup2'>
								<button
									type='submit'
									className='button mt-5'
								>
									Next Step
									<AiOutlineArrowRight className='m-1' />
								</button>
							</Link>

							<Link to='/login'>
								<div class='form-text pt-3'>
									Already have an account?{' '}
								</div>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
