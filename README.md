# React Context Sensitive Anchor (rcsa)

A React anchor (link) component that will avoid rendering as a nested anchor.

Can be used to avoid nesting with any component, so custom link components will work too.

## Installation

```sh
npm install --save-dev rcsa
```

Or

```sh
yarn add rcsa --dev
```

## Usage

Use the component just like you would an anchor element:

```jsx
import React from 'react';
import A from 'rcsa';

export default function MyComponent() {
  return (
    <A href="https://example.com" target="_blank">Example Link</A>
  );
}
```

If you nest it, it will use the `alt` component instead (which defaults to `span`):

```jsx
import React from 'react';
import A from 'rcsa';

export default function MyComponent() {
  return (
    <A href="https://example.com" target="_blank">
      Oops, I nested a link: <A href="https://example.com/nono">here</A>.
    </A>
  );
}
```

This will render:

```html
<a href="https://example.com" target="_bank">Oops, I nested a link: <span>here</span>.</a>
```

Other than HTMLAnchorElement attributes (or the props of whatever `component` is), you can also provide these props:

* `component`: The primary component to use when rendered normally. Defaults to `'a'`.
* `alt`: An alternative component to use when rendered within a nested context. Defaults to `'span'`.
* `primaryProps`: An object containing props that should *only* be applied when rendering as the primary component.
* `altProps`: An object containing props that should *only* be applied when rendering as the alternate component.
* `emulateLink`: A boolean whether the link should be emulated when inside another link. I would advise against using this feature, since it could confuse the user. The parent href will show in the corner, but the user will be taken to the child href. It's also your responsibility to style the alternate component like a link.

The following top level props are automatically removed when rendering as the alternative component:

* href
* hreflang
* ping
* rel
* target
* type

One last example showing all the props:

```jsx
import React from 'react';
import A from 'rcsa';
import { NavLink } from 'example-nav-library';

export default function MyComponent() {
  const link = 'https://example.com';

  return (
    <A
      component={NavLink}
      href={link}
      target="_blank"
      alt="div"
      primaryProps={{ className: 'link' }}
      altProps={{ title: link, className: 'nested-link' }}
      emulateLink
    >Example Link</A>
  );
}
```

## License

Copyright 2020 LinkedIn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.