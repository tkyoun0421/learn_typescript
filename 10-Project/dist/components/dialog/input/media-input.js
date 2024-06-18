import { BaseComponent } from "../../component.js";
export class MediaSectionInput extends BaseComponent {
    constructor() {
        super(`
    <div>
        <div class="form__container">
            <label for="title">Title</label>
            <input id="title" type="text" />
        </div>
        <div class="form__container">
            <label for="url">URL</label>
            <input id="url" type="text" />
        </div>
    </div>
    `);
    }
    get title() {
        const element = this.element.querySelector("#title");
        return element.value;
    }
    get url() {
        const element = this.element.querySelector("#url");
        return element.value;
    }
}
