import {Meta} from 'iryo';

const name = 'description';
const content = 'aaa';

let meta: Meta;

beforeEach(() => {
  meta = new Meta(name);

  meta.content = content;
});

it('inject meta tag when content setted', () => {
  const metaNode = Array.from(document.head.children).find(
    element => element.tagName === 'META',
  ) as Element;

  expect(metaNode.getAttribute('name')).toBe(name);
  expect(metaNode.getAttribute('content')).toBe(content);

  meta.content = '';
});

it('eliminate meta tag when empty string is set content', () => {
  meta.content = '';

  const metaNode = Array.from(document.head.children).find(
    element => element.tagName === 'META',
  );

  expect(metaNode).toBeUndefined();
});
