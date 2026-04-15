/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  private courses = [
    { id: 1, name: 'Math', teacher: 'Khalid' },
    { id: 2, name: 'Physics', teacher: 'Dip' },
  ];

  getAll() {
    return this.courses;
  }

  getOne(id: string) {
    return this.courses.find(c => c.id === Number(id));
  }

  create(data: any) {
    this.courses.push(data);
    return data;
  }

  update(id: string, data: any) {
    const i = this.courses.findIndex(c => c.id === Number(id));
    if (i > -1) this.courses[i] = data;
    return this.courses[i];
  }

  patch(id: string, data: any) {
    const course = this.getOne(id);
    if (course) Object.assign(course, data);
    return course;
  }

  remove(id: string) {
    const i = this.courses.findIndex(c => c.id === Number(id));
    return this.courses.splice(i, 1)[0];
  }
}