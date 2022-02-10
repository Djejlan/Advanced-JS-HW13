let studentInfo = [];

let url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

async function getStudents(url) {
  try {
    let response = await fetch(url);
    let newarray = await response.json();
    newarray.forEach((element) => {
      studentInfo.push(element);
    });
    return studentInfo;
  } catch (error) {
    console.log("There is a delay. Please try again");
  }
}

function averageThree(student) {
  return student.averageGrade > 3;
}

function nameOfStudentsThree(student) {
  return `${student.firstName} ${student.lastName} ${student.averageGrade}`;
}

function femaleStudents(student) {
  return student.gender === "Female";
}
function namesOfFemales(student) {
  return `${student.firstName} ${student.lastName} ${student.gender} ${student.averageGrade}`;
}
function namesOfFemales1(student) {
  return `${student.firstName} ${student.lastName} ${student.gender} ${student.averageGrade} ${student.age}`;
}
function averageFive(student) {
  return student.averageGrade === 5;
}

function maleStudents(student) {
  return student.gender === "Male";
}

function liveSkopje(student) {
  return student.city === "Skopje";
}

function ageAbove18(student) {
  return student.age > 18;
}

function maleFullName(student) {
  return `${student.firstName} ${student.lastName} ${student.gender} ${student.city} ${student.age}`;
}

function ageOver24(student) {
  return student.age > 24;
}

function stringB(student) {
  return student.firstName[0] === "B";
}

function averageOfTwo(student) {
  return student.averageGrade > 2;
}

function averageofMales(student) {
  return `${student.firstName} ${student.lastName} ${student.gender} ${student.averageGrade}`;
}

getStudents(url).then(function () {
  let averageOfThree = studentInfo
    .filter(averageThree)
    .map(nameOfStudentsThree);
  console.log(
    "All students with an average grade higher than 3 ",averageOfThree
  );

  let female = studentInfo
    .filter(femaleStudents)
    .filter(averageFive)
    .map(namesOfFemales);

  console.log("All female student names with an average grade of 5", female);

  let male = studentInfo
    .filter(maleStudents)
    .filter(liveSkopje)
    .filter(ageAbove18)
    .map(maleFullName);
  console.log(
    "All male student full names who live in Skopje and are over 18 years old",
    male
  );

  let female1 = studentInfo
    .filter(femaleStudents)
    .filter(ageOver24)
    .map(namesOfFemales1);
  console.log(
    "The average grades of all female students over the age of 24",
    female1
  );

  let maleB = studentInfo
    .filter(maleStudents)
    .filter(stringB)
    .filter(averageOfTwo)
    .map(averageofMales);
  console.log(
    "All male students with a name starting with B and average grade over 2",
    maleB
  );
});
