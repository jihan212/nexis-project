import React from 'react';
import ultimateLogo from '../../Images/ultimateLogo.png';
import { Link } from 'react-router-dom';

const Attendance = () => {
	const EmployeeData = [
		{
			Date: '3/11/2022',
			Name: 'Vi Bleiman',
			Status: 'Present',
		},
		{
			Date: '1/3/2022',
			Name: 'Honor Fordy',
			Status: 'Present',
		},
		{
			Date: '3/20/2022',
			Name: 'Silvano Sandy',
			Status: 'Present',
		},
		{
			Date: '2/10/2022',
			Name: 'Betty Fitzsymon',
			Status: 'Absent',
		},
		{
			Date: '11/6/2022',
			Name: 'Mel Norcross',
			Status: 'Absent',
		},
		{
			Date: '1/27/2022',
			Name: 'Roscoe Robiot',
			Status: 'Absent',
		},
		{
			Date: '12/14/2021',
			Name: 'Bea Crunden',
			Status: 'Present',
		},
		{
			Date: '4/27/2022',
			Name: 'Gerhard Orvis',
			Status: 'Present',
		},
		{
			Date: '7/4/2022',
			Name: 'Kenyon Hawkswood',
			Status: 'Present',
		},
		{
			Date: '7/17/2022',
			Name: 'Golda Glantz',
			Status: 'Absent',
		},
	];

	return (
		<div className='signUpBody'>
			<Link to='/'>
				<img
					src={ultimateLogo}
					alt=''
				/>
			</Link>
			<div className='d-flex justify-content-center '>
				<p className='text-center bg-primary text-white fw-semibold fs-5 px-5 py-2 rounded-9'>
					Attendance Information
				</p>
			</div>
			<div class='table-responsive'>
				<table class='table table-borderless'>
					<thead>
						<tr className='spacer'>
							<th scope='col'>Date</th>
							<th scope='col'>Employee Name</th>
							<th scope='col'>Status</th>
						</tr>
					</thead>
					<tbody>
						{EmployeeData.map((data) => {
							return (
								<tr>
									<th scope='row'>{data.Date}</th>
									<td>{data.Name}</td>
									<td>{data.Status}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Attendance;
