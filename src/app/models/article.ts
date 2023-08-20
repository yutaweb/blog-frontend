export class Article {
    id: number;
    title: string;
    text: string;
    image: string;
    author: string;
    created_at: string;
    updated_at: string;
    count: number;
    tags: Tag[];
    users: User[];

    constructor(article: any = {}) {
        this.id = article.id;
        this.title = article.title || "";
        this.text = article.text || "";
        this.image = article.image || "";
        this.author = article.author || "";
        this.created_at = article.created_at || new Date();
        this.updated_at = article.updated_at || new Date();
        this.count = article.count || 0;
    }
}

class Tag {
    slug: string;
    name: string;

    constructor(tag: any = {}) {
        this.slug = tag.slug || "";
        this.name = tag.name || "";
    }
}

class User {
    email: string;
    password: string;

    constructor(user: any = {}) {
        this.email = user.email || "";
        this.password = user.password || "";
    }
}
