import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import {
  InputDialog,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { Component } from "./components/component.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );

    // For demo :)
    this.page.addChild(
      new ImageComponent(
        "Image Title",
        "https://www.google.com/imgres?q=%EC%95%84%EC%9D%B4%EC%9C%A0&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa9%2F221125_%25EC%25B2%25AD%25EB%25A3%25A1%25EC%2598%2581%25ED%2599%2594%25EC%2583%2581_%25EB%25A0%2588%25EB%2593%259C%25EC%25B9%25B4%25ED%258E%25AB_01_%2528cropped%2529.jpg%2F250px-221125_%25EC%25B2%25AD%25EB%25A3%25A1%25EC%2598%2581%25ED%2599%2594%25EC%2583%2581_%25EB%25A0%2588%25EB%2593%259C%25EC%25B9%25B4%25ED%258E%25AB_01_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fko.wikipedia.org%2Fwiki%2F%25EC%2595%2584%25EC%259D%25B4%25EC%259C%25A0&docid=H7tC1r-g9KoXZM&tbnid=gO_la0F2vK6ZXM&vet=12ahUKEwiByMii2eSGAxWar1YBHR4vDTwQM3oECGcQAA..i&w=250&h=344&hcb=2&ved=2ahUKEwiByMii2eSGAxWar1YBHR4vDTwQM3oECGcQAA"
      )
    );
    this.page.addChild(
      new VideoComponent(
        "Video Title",
        "https://www.youtube.com/watch?v=JleoAppaxi0&pp=ygUJ7JWE7J207Jyg"
      )
    );
    this.page.addChild(
      new NoteComponent("Note Title", "Don't forget to code your dream")
    );
    this.page.addChild(new TodoComponent("Todo Title", "TypeScript Course!"));
    this.page.addChild(
      new ImageComponent(
        "Image Title",
        "data:image/jpeg;base64,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"
      )
    );
    this.page.addChild(
      new VideoComponent(
        "Video Title",
        "https://www.youtube.com/watch?v=JleoAppaxi0&pp=ygUJ7JWE7J207Jyg"
      )
    );
    this.page.addChild(
      new NoteComponent("Note Title", "Don't forget to code your dream")
    );
    this.page.addChild(new TodoComponent("Todo Title", "TypeScript Course!"));
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
