//Reduce salaries to calculate total payroll
let salaries = [25000, 30000, 40000, 28000, 35000];

let totalpayroll = salaries.reduce((acc,curr) => acc + curr,0);

console.log(totalpayroll);
