import { Injectable, Logger } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { IQueue } from './IQueue';
import BMResponse from '@app/boardman-commons/IResponse';
import { DbService } from '@app/boardman-commons/db/db.service';

@Injectable()
export class QueueService implements IQueue {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger(QueueService.name, {
      timestamp: true,
    });
  }
  CreateQueue(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  FindByBoardmanId(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  GetOrders(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  AddOrders(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  RemoveOrders(data: Map<string, any>): Promise<BMResponse> {
    throw new Error('Method not implemented.');
  }
  create(createQueueDto: CreateQueueDto) {
    return 'This action adds a new queue';
  }

  findAll() {
    return `This action returns all queue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queue`;
  }

  update(id: number, updateQueueDto: UpdateQueueDto) {
    return `This action updates a #${id} queue`;
  }

  remove(id: number) {
    return `This action removes a #${id} queue`;
  }
}
