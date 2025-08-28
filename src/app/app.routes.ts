import { Routes } from "@angular/router";
import { HomePage } from "./home-page";
import { PostPage } from "./post-page";

export const routes: Routes = [
    {
        path: "",
        component: HomePage,
    },
    {
        path: "posts/:id",
        component: PostPage,
    },
];
