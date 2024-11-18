import { filterMoreThan18 } from "./service/user_filter.service";
import { UserType } from "./types/user.type";

const users: UserType[] = [
    {
        id: 1243,
        name: "nicolas",
        lasName: "Gomez",
        age: 31
    },
    {
        id: 653452,
        name: "Pepito",
        age: 14
    }
];

const users18: UserType[] = filterMoreThan18(users);
console.log(users18);

