import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from "@nestjs/common";

@Controller('courses')
export class CoursesController {
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
}
