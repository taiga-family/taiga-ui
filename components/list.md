# List

- **Package**: `LAYOUT`
- **Type**: components

### Usage Examples

#### Bulleted

**Template:**
```html
<h2 tuiHeader="h6">Body L</h2>
<br />
<h6 tuiHeader="body-l">List of Continents</h6>
<ul tuiList>
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ul>
<br />
<h2 tuiHeader="h6">Body M</h2>
<br />
<h6 tuiHeader="body-l">List of Continents</h6>
<ul tuiList="m">
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ul>
<br />
<h2 tuiHeader="h6">UI S</h2>
<br />
<h6 tuiHeader="body-l">List of Continents</h6>
<ul tuiList="s">
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Numbered

**Template:**
```html
<h2 tuiHeader="h6">Body L</h2>
<br />
<h6 tuiHeader="body-l">List of Continents</h6>
<ol tuiList>
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ol>
<br />
<h2 tuiHeader="h6">Body M</h2>
<br />
<h6 tuiHeader="body-l">List of Continents</h6>
<ol tuiList="m">
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ol>
<br />
<h2 tuiHeader="h6">UI S</h2>
<br />
<h6 tuiHeader="body-l">List of Continents</h6>
<ol tuiList="s">
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ol>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Definition

**Template:**
```html
<header tuiHeader="h6">Regular</header>
<dl tuiList> @for (item of data | keyvalue; track $index) { <dt>{{ item.key }}</dt>
<dd>{{ item.value }}</dd> } </dl>
<br />
<header tuiHeader="h6">Compact</header>
<dl compact tuiList="m" > @for (item of data | keyvalue; track $index) { <dt>{{ item.key }}</dt>
<dd>{{ item.value }}</dd> } </dl>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [KeyValuePipe, TuiHeader, TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = {
        Name: 'Taiga UI',
        Version: '5.22.0',
        Component: 'List',
    };
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Nested

**Template:**
```html
<header tuiHeader="h6">
<hgroup tuiTitle>
<h1>Header of first list</h1>
</hgroup>
</header>
<ol tuiList>
<li> First level <ol tuiList>
<li>Second level</li>
<li>
<span>Second level</span>
<ol tuiList>
<li>Third level</li>
<li>Third level</li>
</ol>
</li>
<li>
<span>Second level</span>
<ol tuiList>
<li>Third level</li>
<li>
<span>Third level</span>
<ol tuiList>
<li>Fourth level</li>
<li>Fourth level</li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
<li>First level</li>
</ol>
<br />
<header tuiHeader="h6">
<hgroup tuiTitle>
<h1>Header of second list</h1>
</hgroup>
</header>
<ul tuiList>
<li> First level <ul tuiList>
<li>Second level</li>
<li>
<span>Second level</span>
<ul tuiList>
<li>Third level</li>
<li>Third level</li>
</ul>
</li>
</ul>
</li>
<li>First level</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiList, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Long text

**Template:**
```html
<ul tuiList>
<li>If a list item is long, the bullet stays aligned to the top.</li>
<li>There are no restrictions on the text length at all. You can write as much text as you want.</li>
<li>
<div> This item uses <strong>nested tags</strong> inside which should not break </div>
</li>
</ul>
<ol tuiList>
<li>If a list item is long, the bullet stays aligned to the top.</li>
<li>There are no restrictions on the text length at all. You can write as much text as you want.</li>
</ol>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Custom color

**Template:**
```html
<ul style="--tui-list-marker: var(--tui-status-negative)" tuiList >
<li>All bullets in this list share the same custom color</li>
<!-- prettier-ignore -->
<li>Set the<code>--tui-list-marker</code>variable on the list itself</li>
<li>No need to override the bullet background manually</li>
</ul>
<ul tuiList>
<li>Bullets can also be recolored individually</li>
<li style="--tui-list-marker: var(--tui-status-warning)">This one is a warning</li>
<li style="--tui-list-marker: var(--tui-status-positive)">This one is positive</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
