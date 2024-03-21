import inquirer from "inquirer";
// asking questions from users through inquirer
let answers = await inquirer.prompt([
    { messege: "enter first number", type: "number", name: "firstnumber" },
    { messege: "enter second number", type: "number", name: "secondnumber" },
    {
        messege: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statments if-else
if (answers.operator === "addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("invalid input");
}
