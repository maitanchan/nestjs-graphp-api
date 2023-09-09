import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './entities/pets.entity';
import { CreatePetInput } from './dto/create-pet.input';
import { Owner } from '../owners/entities/owner.entity';

@Resolver(() => Pet)
export class PetsResolver {

    constructor(private readonly petService: PetsService) { }

    @Mutation(() => Pet)
    createPet(@Args('createPetData') createPetData: CreatePetInput): Promise<Pet> {

        return this.petService.createPet(createPetData)

    }

    @Query(() => [Pet])
    getAllPets(): Promise<Pet[]> {

        return this.petService.getAllPets()

    }

    @Query(() => Pet)
    getPet(@Args('id', { type: () => Int }) id: number): Promise<Pet> {

        return this.petService.getPet(id)

    }

    @ResolveField(() => Owner)
    getOwner(@Parent() pet: Pet): Promise<Owner> {

        return this.petService.getOwner(pet.ownerId)

    }

}
