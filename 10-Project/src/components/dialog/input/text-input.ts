import { BaseComponent } from "../../component.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
    <div>
        <div class="form__container">
            <label for="title">Title</label>
            <input id="title" type="text" />
        </div>
        <div class="form__container">
            <label for="body">Body</label>
            <textarea id="body" row="3" type="text"></textarea>
        </div>
    </div>
    `);
  }
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;

    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;

    return element.value;
  }
}
