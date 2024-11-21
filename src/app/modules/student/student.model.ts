import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const usernameSchema = new Schema<UserName>({
  firstName: { type: 'string', required: true },
  middleName: { type: 'string' },
  lastName: { type: 'string', required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: 'string', required: true },
  fatherOccupation: { type: 'string', required: true },
  fatherContactNumber: { type: 'string', required: true },
  motherName: { type: 'string', required: true },
  motherOccupation: { type: 'string', required: true },
  motherContactNumber: { type: 'string', required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: 'string', required: true },
  occupation: { type: 'string' },
  contactNumber: { type: 'string', required: true },
  address: { type: 'String', required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: 'string' },
  name: usernameSchema,
  gender: ['female', 'male'],
  dateOfBirth: { type: 'string' },
  email: { type: 'string', required: true },
  contactNumber: { type: 'string', required: true },
  emergencyNumber: { type: 'string', required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: 'string', required: true },
  permanentAddress: { type: 'string', required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: 'string' },
  isActive: ['Active', 'Inactive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
