import React, { useState } from "react";

function MultipleUseState() {
// Number state
const [count, setCount] = useState(0);

// String state
const [name, setName] = useState("Mounika");

// Boolean state
const [isLoggedIn, setIsLoggedIn] = useState(false);

// Increment counter
const increment = () => {
setCount(count + 1);
};

// Change name
const changeName = () => {
setName("React Developer");
};

// Toggle login status
const toggleLogin = () => {
setIsLoggedIn(!isLoggedIn);
};

return (
<div style={{ textAlign: "center", marginTop: "30px" }}>
<h2>React useState Hook Example</h2>
<h3>Counter: {count}</h3>
<button onClick={increment}>Increment</button>
<hr />
<h3>Name: {name}</h3>
<button onClick={changeName}>Change Name</button>
<hr />
<h3>
Status: {isLoggedIn ? "Logged In" : "Logged Out"}
</h3>
<button onClick={toggleLogin}>
{isLoggedIn ? "Logout" : "Login"}
</button>
</div>
);
}
export default MultipleUseState;