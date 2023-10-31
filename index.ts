import inquirer from inquirer;
type answersType = {
    num1: number;
    num2:number;
    operation:string;
};
inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter your first number",
    },
    {
        type:"number",
        name:"num2",
        message:"Enter your second number",
    },
    {
        type:"list",
        name:"operation",
        message:"Select Operation",
        choices:["+","-","*","/"],
    },
])
.then((answers: answersType) => {
    if(answers.operation == "+"){
        const result = answers.num1 + answers.num2;
        console.log("Sum", result);
    }else if (answers.operation == "-"){
        const result = answers.num1- answers.num2;
        console.log("Subtract", result);
    }else if(answers.operation =="*"){
        const result = answers.num1 * answers.num2;
        console.log("Multiply",result);
    }else if(answers.operation == "/"){
        const result = answers.num1 / answers.num2;
        console.log("Division",result);
    }

})
.catch((error)=>{
    if(error.isTtyError) {
        //prompt could'nt be recorded in the current environment
    }else {
        //something else went wrong
    }
});
