const d = new Date();

// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let name = month[d.getMonth()];
const month = d.getMonth() + 1;
const day = d.getDate();
const year = d.getFullYear();

document.querySelector("#date").innerHTML = month + "." + day + "." + year