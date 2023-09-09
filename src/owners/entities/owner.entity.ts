import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from '../../pets/entities/pets.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field(() => [Pet], { nullable: true })
  @OneToMany(() => Pet, pet => pet.owner)
  pets?: Pet[]

}
