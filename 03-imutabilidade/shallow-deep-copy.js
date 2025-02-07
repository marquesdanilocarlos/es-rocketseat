const htmlCourse = {
    course: 'HTML',
    students: [
        {
            name: 'Danilo',
            email: 'danilo@gmail.com',
        }
    ]
}

const jsCourse = {...htmlCourse, course: 'Javascript'}

//Vai modificar os students tbm de htmlCourse, pq students é referência
jsCourse.students.push({name: 'João', email: 'joao@gmail.com'})

console.log(htmlCourse);
console.log(jsCourse);

const phpCourse = {
    ...htmlCourse,
    course: 'PHP',
    students: [...htmlCourse.students, {name:'Carlinhos', email:'carlinhos@gmail.com'}]
}

phpCourse.students.push({name:'Juvenal', email:'juve@gmail.com'})

console.log(phpCourse);
