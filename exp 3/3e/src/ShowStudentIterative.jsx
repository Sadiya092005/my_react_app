import StudentCard from "./StudentCard";
function ShowStudentIterative() {
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
studentIsEnrolled: true
},
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
return (
<div>
<h1>React Iterative Demo</h1>

{studentArray.map((student, i) => (
<StudentCard
name={student.studentName}
age={student.studentAge}
course={student.studentCourse}
city={student.studentCity}
isEnrolled={student.studentIsEnrolled} />
))}
</div>
);
}
export default ShowStudentIterative;