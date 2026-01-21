import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoUri } from './config/database.config';
import { BoardsModule } from './modules/boards/boards.module';


@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    BoardsModule,
  ],
})
export class AppModule {}