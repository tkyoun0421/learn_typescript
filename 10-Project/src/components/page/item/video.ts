import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
                <h3 class="video__title"></h3>
            </div>
            </section>`);
    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;
    iframe.src = url;

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

// <iframe
//   width="951"
//   height="535"
//   src="https://www.youtube.com/embed/msvGycmHiKA"
//   title='[뉴스 &#39;꾹&#39;] 117만명 와도 "백종원 탓" 투덜? "그래도 맛보다 가격" 직진 (2024.06.18/MBC뉴스)'
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerpolicy="strict-origin-when-cross-origin"
//   allowfullscreen
// ></iframe>;
