import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { User } from "../types";
import { responseMustBeOk } from "../library/responseMustBeOk";

@Injectable({ providedIn: "root" })
export class UserService {
    getUser(id: number): Promise<User> {
        return fetch(environment.apiBaseUrl + "/users/" + id)
            .then(responseMustBeOk)
            .then((res) => res.json());
    }
}
