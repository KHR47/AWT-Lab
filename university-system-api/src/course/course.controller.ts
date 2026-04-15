import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  getAll() {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.courseService.getCourseById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.courseService.createCourse(body.name, body.code);
  }
}
