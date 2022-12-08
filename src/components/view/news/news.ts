import "./news.css";

class News {
  draw(data: Article[]) {
    const news = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector("#newsItemTemp");
    news.forEach((item: Article, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      if (idx % 2) newsClone.querySelector(".news__item")?.classList.add("alt");
      const newsMetaPhoto = newsClone.querySelector(".news__meta-photo") as HTMLDivElement;
      newsMetaPhoto.style.backgroundImage = `url(${
        item.urlToImage || "img/news_placeholder.jpg"
      })`;
      const newsMetaAuthor = newsClone.querySelector(".news__meta-author") as HTMLLIElement;
      newsMetaAuthor.textContent = item.author || item.source.name;
      const newsMetaDate = newsClone.querySelector(".news__meta-date") as HTMLLIElement;
      newsMetaDate.textContent = item.publishedAt
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("-");

      const newsDescriptionTitle = newsClone.querySelector(".news__description-title") as HTMLHeadElement;
      newsDescriptionTitle.textContent = item.title;
      const newsDescriptionSource = newsClone.querySelector(".news__description-source") as HTMLHeadElement;
      newsDescriptionSource.textContent = item.source.name;
      const newsDescriptionContent = newsClone.querySelector(".news__description-content") as HTMLParagraphElement;
      newsDescriptionContent.textContent = item.description;
      const newsReadMoreLink = newsClone.querySelector(".news__read-more a") as HTMLLinkElement;
      newsReadMoreLink.setAttribute("href", item.url);

      fragment.append(newsClone);
    });
    (document.querySelector(".news") as HTMLDivElement).innerHTML = "";
    (document.querySelector(".news") as HTMLDivElement).appendChild(fragment);
  }
}

export default News;
