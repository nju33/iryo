import React from 'react';
import Link from 'next/link';
import {Style} from 'iryo';

const style = new Style();

export const index: React.FC = () => {
  React.useEffect(() => {
    style.content = 'body{color:orange}';

    return () => {
      style.content = '';
    };
  });

  return (
    <div>
      <span>index index index</span>
      <Link href="/foo">
        <a>foo</a>
      </Link>
    </div>
  );
};

export default index;
