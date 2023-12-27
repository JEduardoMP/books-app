import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOne({ where: { id } });
  }

  async create(book: Book): Promise<Book> {
    const newBook = this.booksRepository.create(book);
    return await this.booksRepository.save(newBook);
  }

  async update(id: number, book: Book): Promise<Book> {
    await this.booksRepository.update(id, book);
    return this.booksRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
