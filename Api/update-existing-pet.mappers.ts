import { AddPetDto } from "./dto/add-pet.dto";


export function UpdatePetMappers(id: number, name: string, photoUrls: string, status: string): AddPetDto{
  return{
    
        id: id,
        category: {
          id: id,
          name: name
        },
        name: name,
        photoUrls: [
         photoUrls
        ],
        tags: [
        {
         id: id,
         name: name
        }
    ],
  status: status

  }

}