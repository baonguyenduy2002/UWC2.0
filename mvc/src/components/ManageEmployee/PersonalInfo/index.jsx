// import React from "react";
// import RemoveEmployeeButton from "../RemoveEmployee/index";
// import { iconsEmployee } from "../../../assets/index";

// import "./PersonalInfo.css";

// function PersonalInfo(props) {
//     const {id, name, type, workingStatus, dob, address, email, url} = props;
//     return (
//         <div className="PersonalInfoContainer">
//             <div className="Part1">
//                 <div className="PersonalImage">
//                     <img src={url} alt="PersonalImage" width="214px" height="231px" />
//                 </div>
//                 <div className="Info-1">
//                     <h1 style={{
//                             margin: 0,
//                             fontSize: '40px',
//                             width: 'fit-content',
//                         }}
//                     >
//                         {name}
//                     </h1>
//                     <p id="StaffID"><b>ID: </b>{id}</p>
//                     <p id="StaffType"><b>Chức vụ: </b>{type}</p>
//                     <p id="StaffStatus"><b>Tình trạng: </b>{workingStatus? 'Đang làm việc':'Tạm nghĩ'}</p>
//                 </div>
//                 <div className="RemoveEmployee-Button">
//                     <RemoveEmployeeButton item={iconsEmployee[1]} />
//                 </div>
//             </div>
//             <div className="Part2">
//                 <div><b>Date of Birth:&nbsp;</b>{dob}</div>
//                 <div><b>Address:&nbsp;</b>{address}</div>
//                 <div><b>Email:&nbsp;</b>{email}</div>
//             </div>
//             <div className="Part3">

//             </div>


//         </div>
//   );
// }
// export default PersonalInfo;
