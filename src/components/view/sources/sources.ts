import { Source } from "../../../types/Source";
import "./sources.css";

class Sources {
  draw(data: Source[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector("#sourceItemTemp") as HTMLTemplateElement;

    data.forEach((item: Source) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
      const sourceItemName = sourceClone.querySelector(".source__item-name") as HTMLDivElement;
      sourceItemName.textContent = item.name;
      const sourceItem = sourceClone.querySelector(".source__item") as HTMLDivElement;
      sourceItem.setAttribute("data-source-id", item.id);

      fragment.append(sourceClone);
    });
    const sources = document.querySelector(".sources") as HTMLDivElement;
    sources.append(fragment);
  }
}

export default Sources;
