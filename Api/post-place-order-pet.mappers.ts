import { OrderPet } from "./dto/place-order-pet.dto";


export function PlaceOrderPet(id:number, petId:number, quantity:number, shipDate: string, status: string, complete:boolean): OrderPet{
  return{

    id: id,
    petId: petId,
    quantity: quantity,
    shipDate: shipDate,
    status: status,
    complete: complete

  }






}