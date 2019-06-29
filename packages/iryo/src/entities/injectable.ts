import {ThisElement} from './element';
import diFactory from '../dependency-injection';

export type Eliminate = () => void;

export interface InjectableImpl {
  inject(): Eliminate;
}

export type IInjectable = ThisElement & InjectableImpl;

export class Injectable implements IInjectable {
  public element: NonNullable<ThisElement['element']>;

  public constructor(element: NonNullable<ThisElement['element']>) {
    this.element = element;
  }

  private eliminate = (parent: Element) => () => {
    parent.removeChild(this.element);
  };

  public inject = (selector: string = 'head') => {
    const parent = document.querySelector(selector);

    if (parent === null) {
      throw new Error(`There is no element selector is \`${selector}\``);
    }

    parent.appendChild(this.element);

    return this.eliminate(parent);
  };
}

export const diInjectable = diFactory(Injectable);
