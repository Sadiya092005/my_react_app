import React, { useState } from "react";

function Form() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [course, setCourse] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
alert(
"Name: " + name +
"\nEmail: " + email +
"\nCourse: " + course
);
};
return (
<div className="form-container">
<h2>Student Registration Form</h2>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your name"
/>
<label>Email:</label>

<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Enter your email"
/>
<label>Course:</label>
<select
value={course}
onChange={(e) => setCourse(e.target.value)}
>
<option value="">Select Course</option>
<option value="AI & Data Science">AI & Data Science</option> <option
value="Computer Science">Computer Science</option> <option
value="Information Technology">Information Technology</option> </select>
<button type="submit">Submit</button>
</form>
</div>
);
}
export default Form;