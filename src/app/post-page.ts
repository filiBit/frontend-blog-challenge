import { Component, inject } from "@angular/core";
import { BlogService } from "../services/blog-service";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { BlogPost } from "../types";
import { MatButtonModule } from "@angular/material/button";

@Component({
    templateUrl: "./post-page.html",
    imports: [MatButtonModule, RouterLink],
})
export class PostPage {
    protected blogService = inject(BlogService);
    private route = inject(ActivatedRoute);

    protected post: null | BlogPost = null;
    protected isPostError: boolean = false;

    ngOnInit() {
        const postId = Number(this.route.snapshot.paramMap.get("id"));
        this.blogService
            .getBlogPost(postId)
            .then((post) => {
                this.post = post;
                this.isPostError = false;
            })
            .catch(() => {
                this.isPostError = true;
                this.post = null;
            });
    }
}
