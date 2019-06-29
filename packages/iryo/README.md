# Iryo

[![github](https://badgen.net/badge/github/nju33,iryo/000?icon=github&list=1)](https://github.com/nju33/iryo)
[![npm:version](https://badgen.net/npm/v/iryo?icon=npm&label=)](https://www.npmjs.com/package/iryo)
[![ci:status](https://badgen.net/circleci/github/nju33/iryo/master)](https://circleci.com/gh/nju33/iryo)
[![Coverage Status](https://coveralls.io/repos/github/nju33/iryo/badge.svg?branch=v0.2.2)](https://coveralls.io/github/nju33/iryo?branch=master)
[![license](https://badgen.net/npm/license/iryo)](https://github.com/nju33/iryo/blob/master/LICENSE)

## Usage

### Style

```js
import {Style} from 'iryo';

const style = new Style();

// It inject style element which <style>body { color: orange; }</style>
style.content = 'body { color: orange; }';

// It eliminate its style element
style.content = '';
```

### Meta

```js
import {Meta} from 'iryo';

const metaDescription = new Meta('description');

// It inject meta element which <meta name="description" content="foo">
metaDescription.content = 'foo';

// It eliminate its meta element
metaDescription.content = '';
```
