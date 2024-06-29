
for (let i = 1 ; i <= 10 ; i++) {
    console.log(i) ;
}

let obj = {
    Name: "IZEL",
    Role: "Developer",
    Company: "wollves AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key , element);
}

let i = 7 ;
while(i<6) {
    console.log(i);
    i++;
}

let x = 10;
do{
    console.log(x)
    x++;
} while(x<6);