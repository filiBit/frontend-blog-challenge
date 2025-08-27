import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { User } from "../types";

@Injectable({ providedIn: "root" })
export class UserService {
    getUser(id: number): Promise<User> {
        return fetch(environment.apiBaseUrl + "/users/" + id).then((res) =>
            res.json(),
        );
    }
}
