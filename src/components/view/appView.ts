import News from './news/news';
import Sources from './sources/sources';
import { ArticlesResponse } from "../../types/ArticlesResponse";
import { SourcesResponse } from "../../types/SourcesResponse";

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesResponse): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesResponse): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
