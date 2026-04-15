/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  private courses: any[] = [];

  getAllCourses() {
    return {
      message: 'All courses fetched successfully',
      data: this.courses,
    };
  }

  getCourseById(id: string) {
    return {
      message: 'Course fetched successfully',
      id: id,
    };
  }

  createCourse(dto: CreateCourseDto) {
    this.courses.push(dto);

    return {
      message: 'Course created successfully',
      data: dto,
    };
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    return {
      message: 'Course updated successfully',
      id: id,
      data: dto,
    };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
    return {
      message: 'Course patched successfully',
      id: id,
      updatedFields: Object.keys(dto),
    };
  }

  deleteCourse(code: string) {
  const index = this.courses.findIndex(c => c.code == code);

  if (index > -1) {
    const deleted = this.courses.splice(index, 1);

    return {
      message: 'Course deleted successfully',
      code,
      data: deleted[0],
    };
  }

  return { message: 'Course not found' };
}

  uploadCourseMaterial(id: string, files: Express.Multer.File[]) {
    return {
      message: 'Materials uploaded successfully',
      courseId: id,
      files: files.map(file => ({
        filename: file.filename,
        path: file.path,
      })),
    };
  }
}