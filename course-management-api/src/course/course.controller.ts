import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('courses')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  getAll() {
    return this.courseService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.courseService.getOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.courseService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.courseService.update(id, data);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() data: any) {
    return this.courseService.patch(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(id);
  }
}