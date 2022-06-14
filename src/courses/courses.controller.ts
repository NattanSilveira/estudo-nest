import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from "@nestjs/common";
import { CoursesService } from "./courses.service";

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get('list')
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos'); //enviando status code dentro da response da requisição
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
  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT) //Forçando o status code da requisição
  create(@Body() body) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso ${id}`;
  }
  @Delete(':id')
  destroy(@Param('id') id: string) {
    return `Deletando curso ${id}`;
  }
}
