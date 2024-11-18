import { UserType } from "../types/user.type";

const filterMoreThan18 = (users: UserType[]): UserType[] => {
    return users.filter((usr: UserType) => usr.age >= 18);
}

export {filterMoreThan18};