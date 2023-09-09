import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreatePetInput {

    @Field()
    @IsNotEmpty()
    name: string

    @Field({ nullable: true })
    type?: string

    @Field(() => Int)
    ownerId: number

}