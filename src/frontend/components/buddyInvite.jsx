import React from 'react';

const buddyInvite = () => {
	return (
		<div>
			To: [buddy email]<br />
			From: hello@flextogether.com<br />
			Subject: [user1] Wants to Work out Together<br />
			<hr />
			Hi [buddy], <br />
			[User 1] would like you to comlete the FlextTogether beta with them.<br />
			They've chosen some times that work for them. Please click the link<br />
			below to enter times you are available to participate.<br />
			<a href="/buddyTimePicker">Choose some times</a>
		</div>
	);
};

export default buddyInvite;
