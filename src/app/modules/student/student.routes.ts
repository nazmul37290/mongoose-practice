import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();
// test comment
//will call controller function
router.post('/create-student',StudentController.createStudent);

router.get('/',StudentController.getAllStudents);
export const StudentRoutes= router;