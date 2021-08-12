export default class StudentStorage {

    getStudents() {
        return JSON.parse(window.localStorage.getItem("students")) || []
    }

    getStudent(id) {
        const students = this.getStudents()
        return students.find(student => student.id == id)
    }

    addStudent(name, surname, age) {
        const student = {id:Date.now(), name: name, surname: surname, age: age + ''}
        let studentsList = this.getStudents()
        studentsList.push(student)
        this.save(studentsList)
    }

    deleteStudent(id) {
        let students = this.getStudents()
        const index = students.findIndex(student => student.id == id) 
        students.splice(index, 1)
        this.save(students)
    }

    updateStudent(updatedStudent) {
        let students = this.getStudents()
        const index = students.findIndex(student => student.id == updatedStudent.id) 
        students[index] = updatedStudent
        this.save(students)
    }

    save(studentsList) {
        window.localStorage.setItem("students", JSON.stringify(studentsList))
    }

}