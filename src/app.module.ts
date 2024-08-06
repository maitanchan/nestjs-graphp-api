import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { PetsModule } from './pets/pets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [

    GraphQLModule.forRoot<ApolloDriverConfig>({

      driver: ApolloDriver,

      autoSchemaFile: join(process.cwd(), 'src/schema.gql')

    }),

    TypeOrmModule.forRoot({

      type: 'sqlite',

      database: ':memory:',

      entities: ['dist/**/*.entity{.ts,.js}'],

      synchronize: true

    }),

    PetsModule,

    OwnersModule

  ],

})
export class AppModule { }
