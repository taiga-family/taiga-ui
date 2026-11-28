# List

- **Package**: `LAYOUT`
- **Type**: directives

### Usage Examples

#### Bulleted

**Template:**
```html
<h2>Body L</h2>
<h6 style="font: var(--tui-font-body-l)">List of Continents</h6>
<ul tuiList>
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ul>
<h2>Body M</h2>
<h6 style="font: var(--tui-font-body-m)">List of Continents</h6>
<ul tuiList="m">
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ul>
<h2>UI S</h2>
<h6 style="font: var(--tui-font-ui-s)">List of Continents</h6>
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
import {TuiList} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiList],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
h2 {
    padding-block-start: 0.3125rem;
    padding-block-end: 0.3125rem;
}

h6 {
    margin: 0;
}
```

#### Numbered

**Template:**
```html
<h2>Body L</h2>
<h6 style="font: var(--tui-font-body-l)">List of Continents</h6>
<ol tuiList>
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ol>
<h2>Body M</h2>
<h6 style="font: var(--tui-font-body-m)">List of Continents</h6>
<ol tuiList="m">
<li>Eurasia</li>
<li>Africa</li>
<li>Australia</li>
<li>Antarctica</li>
<li>North America</li>
<li>South America</li>
</ol>
<h2>UI S</h2>
<h6 style="font: var(--tui-font-ui-s)">List of Continents</h6>
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
import {TuiList} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiList],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Definition

**Template:**
```html
<header tuiHeader="h6">
<hgroup tuiTitle>
<h1>Regular</h1>
</hgroup>
</header>
<dl tuiList>
<ng-container *ngFor="let item of data | keyvalue">
<dt>{{ item.key }}</dt>
<dd>{{ item.value }}</dd>
</ng-container>
</dl>
<br />
<header tuiHeader="h6">
<hgroup tuiTitle>
<h1>Compact</h1>
</hgroup>
</header>
<dl compact tuiList="m" >
<ng-container *ngFor="let item of data | keyvalue">
<dt>{{ item.key }}</dt>
<dd>{{ item.value }}</dd>
</ng-container>
</dl>
```

**TypeScript:**
```ts
import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [KeyValuePipe, NgForOf, TuiHeader, TuiList, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = {
        Name: 'Taiga UI',
        Version: '4.96.0',
        Component: 'List',
    };
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
    standalone: true,
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
    standalone: true,
    imports: [TuiList],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
