# Lists

- **Type**: markup

## large

## medium

## small

## large with heading

## medium with heading

## small with heading

## triangle bullets

### Usage Examples

#### large

**Template:**
```html
<ul class="tui-list tui-list_large">
<li class="tui-list__item">Code Review ($ 10)</li>
<li class="tui-list__item"> The whole project refactoring ($ 1000) <ul class="tui-list tui-list_linear tui-list_nested">
<li class="tui-list__item">Add auto prettier and linters on precommit ($ 50)</li>
<li class="tui-list__item">Rewrite to react and back ($ Infinity)</li>
</ul>
</li>
<li class="tui-list__item"> Live workshop from <a href="https://angular.institute/corporate" rel="noreferrer" target="_blank" tuiLink > angular.institute </a> ($ 3000) <ol class="tui-list tui-list_ordered tui-list_nested">
<li class="tui-list__item">Interactive samples</li>
<li class="tui-list__item">Case analysis</li>
<li class="tui-list__item">Angular knowledge that keeps on growing</li>
</ol>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### medium

**Template:**
```html
<ul class="tui-list">
<li class="tui-list__item">Code Review ($ 10)</li>
<li class="tui-list__item"> The whole project refactoring ($ 1000) <ul class="tui-list tui-list_linear tui-list_nested">
<li class="tui-list__item">Add auto prettier and linters on precommit ($ 50)</li>
<li class="tui-list__item">Rewrite to react and back ($ Infinity)</li>
</ul>
</li>
<li class="tui-list__item"> Live workshop from <a href="https://angular.institute/corporate" rel="noreferrer" target="_blank" tuiLink > angular.institute </a> ($ 3000) <ol class="tui-list tui-list_ordered tui-list_nested">
<li class="tui-list__item">Interactive samples</li>
<li class="tui-list__item">Case analysis</li>
<li class="tui-list__item">Angular knowledge that keeps on growing</li>
</ol>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### small

**Template:**
```html
<ul class="tui-list tui-list_small">
<li class="tui-list__item">Code Review ($ 10)</li>
<li class="tui-list__item"> The whole project refactoring ($ 1000) <ul class="tui-list tui-list_linear tui-list_nested">
<li class="tui-list__item">Add auto prettier and linters on precommit ($ 50)</li>
<li class="tui-list__item">Rewrite to react and back ($ Infinity)</li>
</ul>
</li>
<li class="tui-list__item"> Live workshop from <a href="https://angular.institute/corporate" rel="noreferrer" target="_blank" tuiLink > angular.institute </a> ($ 3000) <ol class="tui-list tui-list_ordered tui-list_nested">
<li class="tui-list__item">Interactive samples</li>
<li class="tui-list__item">Case analysis</li>
<li class="tui-list__item">Angular knowledge that keeps on growing</li>
</ol>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### large with heading

**Template:**
```html
<ul class="tui-list tui-list_large">
<li class="tui-list__item">
<div class="tui-list__item-title">Live workshop</div>
<div class="tui-list__description"> For any number of employees with advanced Angular knowledge that keeps on growing </div>
</li>
<li class="tui-list__item">
<div class="tui-list__item-title">Interactive examples</div>
<div class="tui-list__description">All our chapters for your employees with lifetime access</div>
</li>
<li class="tui-list__item">
<div class="tui-list__item-title">Case analysis</div>
<div class="tui-list__description"> We can take a look at your projects to define problems and explain how to fix them </div>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### medium with heading

**Template:**
```html
<ul class="tui-list">
<li class="tui-list__item">
<div class="tui-list__item-title">Live workshop</div>
<div class="tui-list__description"> For any number of employees with advanced Angular knowledge that keeps on growing </div>
</li>
<li class="tui-list__item">
<div class="tui-list__item-title">Interactive examples</div>
<div class="tui-list__description">All our chapters for your employees with lifetime access</div>
</li>
<li class="tui-list__item">
<div class="tui-list__item-title">Case analysis</div>
<div class="tui-list__description"> We can take a look at your projects to define problems and explain how to fix them </div>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### small with heading

**Template:**
```html
<ul class="tui-list tui-list_small">
<li class="tui-list__item">
<div class="tui-list__item-title">Live workshop</div>
<div class="tui-list__description"> For any number of employees with advanced Angular knowledge that keeps on growing </div>
</li>
<li class="tui-list__item">
<div class="tui-list__item-title">Interactive examples</div>
<div class="tui-list__description">All our chapters for your employees with lifetime access</div>
</li>
<li class="tui-list__item">
<div class="tui-list__item-title">Case analysis</div>
<div class="tui-list__description"> We can take a look at your projects to define problems and explain how to fix them </div>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### triangle bullets

**Template:**
```html
<ul class="tui-list tui-list_triangle">
<li class="tui-list__item">Code Review ($ 10)</li>
<li class="tui-list__item"> The whole project refactoring ($ 1000) <ul class="tui-list tui-list_linear tui-list_nested">
<li class="tui-list__item">Add auto prettier and linters on precommit ($ 50)</li>
<li class="tui-list__item">Rewrite to react and back ($ Infinity)</li>
</ul>
</li>
<li class="tui-list__item"> Live workshop from <a href="https://angular.institute/corporate" rel="noreferrer" target="_blank" tuiLink > angular.institute </a> ($ 3000) <ol class="tui-list tui-list_ordered tui-list_nested">
<li class="tui-list__item">Interactive samples</li>
<li class="tui-list__item">Case analysis</li>
<li class="tui-list__item">Angular knowledge that keeps on growing</li>
</ol>
</li>
</ul>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
