import React from "react";
import SettingGeneral from "../../../../components/SettingGeneral/SettingGeneral";
import SettingAccount from "../../../../components/SettingAccount/SettingAccount";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../controller/service/auth";

function Setting() {
	return (
		<div className="Setting">
			<SettingGeneral />
			<SettingAccount />
		</div>
	);
}

export default Setting;
