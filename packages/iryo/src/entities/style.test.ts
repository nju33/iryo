import {Style} from 'iryo';

const css = 'body{color:orange;}';

let style: Style;

beforeEach(() => {
  style = new Style();

  style.content = css;
});

it('inject style tag when content setted', () => {
  const styleNode = Array.from(document.head.children).find(
    element => element.tagName === 'STYLE',
  ) as Element;

  expect(styleNode.textContent).toBe(css);

  style.content = '';
});

it('eliminate style tag when empty string is set content', async () => {
  style.content = '';

  const styleNode = Array.from(document.head.children).find(
    element => element.tagName === 'STYLE',
  );

  expect(styleNode).toBeUndefined();
});
