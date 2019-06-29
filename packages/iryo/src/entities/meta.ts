import {ThisElement} from './element';
import {diInjectable, IInjectable} from './injectable';

@diInjectable<Meta>()
export class Meta implements ThisElement {
  public element: Element;

  public injectable: IInjectable;

  public eliminate: ReturnType<IInjectable['inject']> | undefined;

  public constructor(
    name: string,
    Injectable?: {new (element: Element): IInjectable},
  ) {
    const element = document.createElement('meta');
    element.setAttribute('name', name);
    this.element = element;

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.injectable = new Injectable!(this.element);
  }

  public set content(content: string) {
    this.element.setAttribute('content', content);

    if (content) {
      this.eliminate = this.injectable.inject();
    } else if (this.eliminate !== undefined) {
      this.eliminate();
    }
  }
}
