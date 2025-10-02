console.log("Student Grade");
function ability(){

    //Varables
    const studentName = ("April");
    const assignment1 = (85);
    const assignment2 = (72);
    const finalExam = (91);

    const assignmentAverage = (assignment1 + assignment2) / 2;

    const finalGrade = (finalExam * 0.6) + (assignmentAverage * 0.4);

    const hasPassed = (finalGrade >= 70);
    const failed = (finalGrade < 70);
    const isExcellent = (hasPassed && finalExam >= 90);
    
    


    //console.log results
    console.log("Name :" + studentName)
    console.log("Final Grade: " + finalGrade);
    console.log("Has Passed: " + hasPassed);
    console.log("Excellent performance: " + isExcellent);
    console.log("Failed: " + failed); 
}