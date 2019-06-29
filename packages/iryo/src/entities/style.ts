import {ThisElement} from './element';
import {diInjectable, IInjectable} from './injectable';

@diInjectable<Style>()
export class Style implements ThisElement {
  public Injectable: {new (element: Element): IInjectable};

  public element: Element | undefined;

  public injectable: IInjectable | undefined;

  public eliminate: ReturnType<IInjectable['inject']> | undefined;

  public constructor(Injectable?: {new (element: Element): IInjectable}) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.Injectable = Injectable!;
  }

  public set content(content: string) {
    if (this.element === undefined || this.injectable === undefined) {
      this.element = document.createElement('style');

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.injectable = new this.Injectable!(this.element);
    }

    this.element.textContent = content;

    if (content) {
      this.eliminate = this.injectable.inject();
    } else if (this.eliminate !== undefined) {
      this.eliminate();
    }
  }
}
