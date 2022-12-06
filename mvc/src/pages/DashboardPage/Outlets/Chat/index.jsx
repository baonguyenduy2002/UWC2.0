import React from "react";

import PersonalInfo from "../../../../components/ManageEmployee/PersonalInfo/index";

function Chat() {
	return <div>
		<PersonalInfo
			id="#CO1124"
			name="John Wick"
			type="Nhân Viên Thu Gom"
			workingStatus= {true}
			dob="14/06/1996"
			address="142 Tô Hiến Thành, Phường 14, Quận 10"
			email="johnwick@gmail.com"
			url="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  		/>
  </div>;
}

export default Chat;
