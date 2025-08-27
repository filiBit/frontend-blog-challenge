import { Component, inject } from "@angular/core";
import { BlogPost } from "../types";
import { BlogService } from "../services/blog-service";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@Component({
    templateUrl: "./home-page.html",
    imports: [MatCardModule, MatIconModule],
})
export class HomePage {
    blogService = inject(BlogService);
    protected blogPosts: BlogPost[] = [];
    ngOnInit() {
        this.blogService.getRecentBlogPosts().then((blogPosts) => {
            this.blogPosts = blogPosts;
        });
    }
}
