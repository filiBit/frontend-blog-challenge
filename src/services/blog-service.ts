import { inject, Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { BlogPost } from "../types";
import { BlogPostDto } from "./types";
import { UserService } from "./user-service";
import { truncate } from "../library/truncate";
import { responseMustBeOk } from "../library/responseMustBeOk";

@Injectable({
    providedIn: "root",
})
export class BlogService {
    protected userService = inject(UserService);

    async getRecentBlogPosts(): Promise<BlogPost[]> {
        const dtoPosts = (
            await fetch(environment.apiBaseUrl + "/posts")
                .then(responseMustBeOk)
                .then((res) => res.json() as Promise<BlogPostDto[]>)
        ).slice(0, 10);

        const result: BlogPost[] = [];

        for (let post of dtoPosts) {
            const user = await this.userService.getUser(post.userId);

            result.push({
                id: post.id,
                title: post.title,
                body: truncate(post.body, 50),
                authorName: user.name,
                authorEmail: user.email,
            });
        }

        return result;
    }

    async getBlogPost(id: number): Promise<BlogPost> {
        const postDto = await fetch(environment.apiBaseUrl + "/posts/" + id)
            .then(responseMustBeOk)
            .then((res) => res.json() as Promise<BlogPostDto>);
        const user = await this.userService.getUser(postDto.userId);

        return {
            id: postDto.id,
            title: postDto.title,
            body: postDto.body,
            authorName: user.name,
            authorEmail: user.email,
        };
    }
}
