import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  private courses: any[] = [];

  getAllCourses() {
    return {
      message: 'All courses fetched',
      data: this.courses,
    };
  }

  getCourseById(id: string) {
    const course = this.courses.find(c => c.code == id);

    return {
      message: 'Course fetched',
      data: course,
    };
  }

  createCourse(name: string, code: string) {
    const newCourse = { name, code };

    this.courses.push(newCourse); // ✅ save it

    return {
      message: 'Course created',
      data: newCourse,
    };
  }
}