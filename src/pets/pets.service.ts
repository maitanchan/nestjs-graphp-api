import { Injectable } from '@nestjs/common';
import { Pet } from './entities/pets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { OwnersService } from '../owners/owners.service';
import { Owner } from '../owners/entities/owner.entity';

@Injectable()
export class PetsService {

    constructor(@InjectRepository(Pet) private readonly petsRepository: Repository<Pet>, private readonly ownerService: OwnersService) { }

    async createPet(createPetData: CreatePetInput): Promise<Pet> {

        const newPet = this.petsRepository.create(createPetData)

        return this.petsRepository.save(newPet)

    }

    async getAllPets(): Promise<Pet[]> {

        return this.petsRepository.find()

    }

    async getPet(id: number): Promise<Pet> {

        return this.petsRepository.findOne({ where: { id } });

    }

    getOwner(ownerId: number): Promise<Owner> {

        return this.ownerService.findOne(ownerId)

    }


}
