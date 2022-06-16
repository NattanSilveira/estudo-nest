import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Course } from "./entities/course.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCoursesDto } from "./dto/create-courses.dto";
import { UpdateCoursesDto } from "./dto/update-courses.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}
  findAll() {
    return this.courseRepository.find();
  }
  findOne(id: string) {
    const course = this.courseRepository.findOneOrFail(id);
    if (!course) {
      throw new NotFoundException(`Curso id:${id} não encontrado`);
    }
    return course;
  }
  create(createCourseDto: CreateCoursesDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }
  async update(id: string, updateCourseDto: UpdateCoursesDto) {
    const course = await this.courseRepository.preload({
      id: +id, // + converte a string para numerico
      ...updateCourseDto,
    });
    if (!course) {
      throw new NotFoundException(`Curso id:${id} não encontrado`);
    }
    return this.courseRepository.save(course);
  }
  async remove(id: string) {
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Curso id:${id} não encontrado`);
    }
    return this.courseRepository.remove(course);
  }
}
