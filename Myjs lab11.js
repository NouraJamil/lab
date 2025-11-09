const student =[
    {id:101,name:'AHMAD' ,phone:'123-333',major:'SE'},
    {id:102,name:'ABDULAH',phone:'123-222',major:'NES'},
    {id:103,name:'ZEGUL' ,phone:'123-444',major:'SE'},
    {id:104,name:'FARIS' ,phone:'123-555',major:'NES'},
    {id:105,name:'SARAH' ,phone:'123-111',major:'SE'},
]
function filterStudent(major){
    const filterStudent=student.filter(student=> student.major===major);
    displyAll(filterStudent);
}
function displyAll(filterStudent){
    const tableBody=document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML='';
    filterStudent.forEach(student => {
        const row=tableBody.insertRow();
        row.innerHTML=`
        <td>${student.id}</td>
         <td>${student.name}</td>
        <td>${student.phone}</td>
        <td>${student.major}</td>
 `;
        
    });
}