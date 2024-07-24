function sortStudentsByScore(students) {
  for (let i = 0; i < students.length; i++) {
    for (let k = 0; k < students.length - i - 1; k++) {
      if (students[k].score > students[k + 1].score) {
        let temp;
        temp = students[k];
        students[k] = students[k + 1];
        students[k + 1] = temp;
      }
    }
  }
  return students;
}
