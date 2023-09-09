import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Owner } from "../../owners/entities/owner.entity"
import { Column, Entity, In, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class Pet {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string

    @Field()
    @Column({ nullable: true })
    @Field({ nullable: true })
    type?: string

    @Field(() => Int)
    @Column()
    ownerId: number

    @Field(() => Owner)
    @ManyToOne(() => Owner, owner => owner.pets)
    owner: Owner

}