let data = [
    {name : "Salmaan Ahmed",marks : "38%",class : "3rd", address : "India"},
    {name : "Riya Sharma", marks : "85%", class : "10th", address : "123, A Colony, Dehli"}, 
    {name : "Priya Singh", marks : "70%", class : "4th", address : "456, X Colony, Mumbai"}, 
    {name : "Ankit Gupta", marks : "95%", class : "6th", address : "789,P Colony, Bangalore"}, 
    {name : "Neha Verma", marks : "60%", class : "8th", address : "101, L Colony, Kolkata"}, 
    {name : "Manoj Kumar", marks : "80%", class : "9th", address : "222, K Colony, Chennai"}, 
    {name : "Pooja Mishra", marks : "75%", class : "11th", address : "244, M Colony, Dehradhun"}, 
    {name : "Rajesh Singh", marks : "88%", class : "10th", address : "234, D Colony, Himachal"}, 
    {name : "Priya Sharma", marks : "92%", class : "9th", address : "657, H Colony, Keral"}, 
    {name : "Vikash Vermama", marks : "32%", class : "6th", address : "287, F Colony, Alwar"}, 
    {name : "Parkash Sharma", marks : "52%", class : "8th", address : "757, S Colony, Patna"}, 
    {name : "Sunny Wollve", marks : "98%", class : "12th", address : "Sikar, Rajasthan"}
]



function showStudent(student){

    let container = document.querySelector(".data")
    container.innerHTML = '';  // Clear the data contrainer in HTML //
    
    student.forEach(element => {
        const Divv = document.createElement("div");
        Divv.classList.add("box")
        Divv.innerHTML = 
        `<ul>
        <li>Student Name : <span>${element.name}</span></li>
        <li>Marks : <span>${element.marks}</span></li>
        <li>Class : <span>${element.class}</span></li>
        <li>Address : <span>${element.address}</span></li>
        </ul>`;

    container.appendChild(Divv)

});
}
showStudent(data);  // Display all Students //


function filterStudent(fill){
    const filterdstudent = data.filter(stud =>
        stud.name.toLowerCase().includes(fill.toLowerCase())
        ||
        stud.class.toLowerCase().includes(fill.toLowerCase())
        ||
        stud.address.toLowerCase().includes(fill.toLowerCase())
    );
    showStudent(filterdstudent);
}

let Search = document.querySelector("#in");
let Button = document.querySelector(".btn")

Search.addEventListener("input", (e) => {
    filterStudent(e.target.value)
});