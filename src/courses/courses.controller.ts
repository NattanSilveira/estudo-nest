import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from "@nestjs/common";
import { CoursesService } from "./courses.service";

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get('list')
  findAll() {
    // return response.status(200).send('Listagem de cursos'); //enviando status code dentro da response da requisição
    return this.coursesService.findAll();
  }
  // @Get(':id') //: indica o parametro recebido
  // findOne(@Param() params) {
  //   return `Curso ${params.id}`;
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    //indicando o parametro especifico a ser capturado e tipando ele
    // return `Curso ${id}`;
    return this.coursesService.findOne(id);
  }
  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT) //Forçando o status code da requisição
  create(@Body() body) {
    // return body;
    return this.coursesService.create(body);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    // return `Atualização do Curso ${id}`;
    return this.coursesService.update(id, body);
  }
  @Delete(':id')
  destroy(@Param('id') id: string) {
    // return `Deletando curso ${id}`;
    return this.coursesService.remove(id);
  }
}
