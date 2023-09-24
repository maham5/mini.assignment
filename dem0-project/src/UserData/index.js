import React  from "react";

const UserData = () =>{
    return (
      user.map((curuser) => {
        const {id , title ,author} = curuser
         return (
<tr>
    <td>
        {id}
    </td>
    <td>
        {title}
    </td>
    <td>
        {author}
    </td>
</tr>
         
         )
      }
    )
    )
}
export default UserData;