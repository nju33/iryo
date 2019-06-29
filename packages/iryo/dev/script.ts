import {Style, Meta} from 'iryo';

const meta = new Meta('description');
const style = new Style();

meta.content = 'test';

style.content = `
  body {
    color: orange;
  }
`;

setTimeout(() => {
  meta.content = '';
  style.content = '';
}, 3000);
