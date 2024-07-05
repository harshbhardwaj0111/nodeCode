const express=require('express');
const route=express.Router();
const exportStudent=require('../controller/studentList')
const exportTeacher=require('../controller/teacherList')
const exportCourse=require('../controller/courseList')
const exportLogin=require('../controller/loginList')
const exportSoftech=require('../controller/softechList')
const exportClass=require('../controller/classList')

route.get('/getuserdata',exportStudent.getStudentList)
route.post('/getuserdata1',exportStudent.getStudentList1)

route.get('/getteacherdata',exportTeacher.getteacherList)
route.post('/postteacherdata',exportTeacher.postteacherList)
route.put('/putteacherdata',exportTeacher.putteacherList)

route.post('/postcoursedata',exportCourse.postcourseList)
route.delete('/deletecoursedata',exportCourse.deletecouseList)
route.put('/updatecoursedata',exportCourse.updatecourseList)
route.post('/postcoursedataBody',exportCourse.postcourseListbody)
route.get('/getcoursedata',exportCourse.getcourseList)
route.get('/findcoursedata',exportCourse.findcourseList)


route.post('/postLogin',exportLogin.postloginList)

route.get('/getsoftechdata',exportSoftech.getsoftechList)

route.get('/getClassData',exportClass.getClassList)
route.post('/postClassData',exportClass.postClassList)
route.delete('/deleteClassData',exportClass.deleteClassList)

module.exports=route;