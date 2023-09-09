import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateOwnerInput {

  @Field()
  @Column()
  @IsNotEmpty()
  name: string

}
