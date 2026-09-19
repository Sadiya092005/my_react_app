import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShowStudentIterative from
'./ShowStudentIterative.jsx'
 const studentArray = [
{
studentName: "Rahul",
studentAge: 20,
studentCourse: "React JS",
studentCity: "Madanapalle",
studentIsEnrolled: true
},
{
studentName: "Ramesh",

studentAge: 20,
studentCourse: "React JS",
studentCity: "Madanapalle",
studentIsEnrolled: true },
{
studentName: "Mahes",
studentAge: 20,
studentCourse: "React JS",
studentCity: "Madanapalle",
studentIsEnrolled: true },
{
studentName: "Arun",
studentAge: 20,
studentCourse: "React JS",
studentCity: "Madanapalle",
studentIsEnrolled: true },
{
studentName: "Ravi",
studentAge: 20,
studentCourse: "React JS",
studentCity: "Madanapalle",
studentIsEnrolled: true },
{
studentName: "Sasi",
studentAge: 20,
studentCourse: "React JS",
studentCity: "Madanapalle",
studentIsEnrolled: true

}
]
createRoot(document.getElementById('root')).render(
<StrictMode>
{/* <App /> */}
{/* {<MultipleUseState/> } */}
{/*<UserList/> */}

{ <ShowStudentIterative/> }
</StrictMode>,
);