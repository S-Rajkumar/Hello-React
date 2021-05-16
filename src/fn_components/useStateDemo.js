import React, {useState} from 'react';

const UseStateDemo = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{props.title}</h1>
            <p><button onClick = {() => {
                setCount(count + 1);
            }}>Click Me</button> Count : {count}</p>
        </div>
    )
}

const UseStateExample = () => {
    let nameRef = React.createRef();
    let emailRef = React.createRef();
    const [name, updateName] = useState("React");
    const [email, updateEmail] = useState("learn@react.js");
    return (
        <div>
            <table>
                <tr><th>Name</th><td> : </td><td>{name}</td></tr>
                <tr><th>Email</th><td> : </td><td>{email}</td></tr>
            </table>
            <input type="text" ref = {nameRef}/> <button onClick = {() => updateName(nameRef.current.value)}>update Name</button><br />
            <input type="email" ref = {emailRef} /> <button onClick = { () => updateEmail(emailRef.current.value)}>update Email</button>
        </div>
    )
}

const UserTableRow = (props) => {
    return (
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
        </tr>
    )
}

const UseStateAddUser = () => {
    let nameRef = React.createRef();
    let emailRef = React.createRef();
    const [userDetails, addUserDetails] = useState([{
        "name" : "react",
        "email" : "learn@react.js"
    }])

    return (
        <div>
            <br />
            <table>
            <thead><tr><th>Name</th><th>Email</th></tr></thead>
            <tbody>
                 {userDetails.map((userDetail, i) => <UserTableRow key = {i} user = {userDetail} />)}
            </tbody>
             </table>
             <input type="text" ref = {nameRef} placeholder = "Name" />
             <input type="email" ref = {emailRef} placeholder = "Email" /><br />
             <button onClick = { () => {
                 let _tempUser = {
                     "name" : nameRef.current.value,
                     "email" : emailRef.current.value
                 }
                 var _tempUserDetails = userDetails.slice();
                 _tempUserDetails.push(_tempUser);
                 addUserDetails(_tempUserDetails);
             }}>Add User</button>
        </div>
    )
}

export {UseStateDemo, UseStateExample, UseStateAddUser};