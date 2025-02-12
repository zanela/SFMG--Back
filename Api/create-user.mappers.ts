import { User } from "./dto/create-user.dto"

export function CreateUser(id: number, username: string, firstName: string, lastName: string, email: string, password: string, phone: string, userStatus: number): User{

    return{

        id: id,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: userStatus

    }



}