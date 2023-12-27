import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Book> {
    return this.booksService.findOne(+id);
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.booksService.create(book);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() book: Book): Promise<Book> {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.booksService.remove(+id);
  }
}
