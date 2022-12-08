import AppController from "../controller/controller";
import { AppView } from "../view/appView";
import Controller from "../controller/controller";
import { ArticlesResponse } from "../../types/ArticlesResponse";
import { SourcesResponse } from "../../types/SourcesResponse";

class App {
  controller: Controller;
  view: AppView;
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sources = document.querySelector(".sources") as HTMLDivElement;

    if (sources) {
      sources.addEventListener("click", (e) => {
        this.controller.getNews(e, (data: ArticlesResponse) => this.view.drawNews(data))
      });
    }
    this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
  }
}

export default App;
