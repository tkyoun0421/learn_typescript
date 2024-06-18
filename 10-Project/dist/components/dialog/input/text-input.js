import { BaseComponent } from "../../component.js";
export class TextSectionInput extends BaseComponent {
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
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get body() {
        const element = this.element.querySelector("#body");
        return element.value;
    }
}
