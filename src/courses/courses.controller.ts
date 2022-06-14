import { Controller, Get, Param } from "@nestjs/common";

@Controller('courses')
export class CoursesController {
  @Get('list')
  findAll() {
    return 'listagem de cursos';
  }
  // @Get(':id') //: indica o parametro recebido
  // findOne(@Param() params) {
  //   return `Curso ${params.id}`;
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    //indicando o parametro especifico a ser capturado e tipando ele
    return `Curso ${id}`;
  }
}
