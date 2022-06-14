import { Controller, Get } from "@nestjs/common";

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'listagem de cursos';
  }
}
