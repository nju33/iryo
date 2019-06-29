import React from 'react';
import Link from 'next/link';
import {Style} from 'iryo';

const style = new Style();

export const foo: React.FC = () => {
  React.useEffect(() => {
    style.content = 'body{color:blue}';

    return () => {
      style.content = '';
    };
  });

  return (
    <div>
      <span>foo foo foo</span>
      <Link href="/">
        <a>index</a>
      </Link>
    </div>
  );
};

export default foo;
