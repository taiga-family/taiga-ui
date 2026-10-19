# BlockStatus

- **Package**: `LAYOUT`
- **Type**: components

Component for status screens, result screens and zero screens

### How to Use (Import)

```ts
import {TuiBlockStatus} from '@taiga-ui/layout';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiBlockStatus,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-block-status [card]="card">
  <img
    tuiSlot="top"
    src="src"
  />
  <h4>Title</h4>
  Description
  <button
    tuiButton
    tuiItem
  >
    Button
  </button>
</tui-block-status>
```

### Example

```html
<tui-block-status [card]="card" [size]="size" >
<img alt="hidden content" src="assets/images/camping.svg" tuiSlot="top" />
<h4>Title</h4> Description <button appearance="secondary" tuiButton type="button" > Action </button>
</tui-block-status>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [card] | `boolean` | Enable border radius and padding for card view |
| [size] | `TuiSizeL` | Size (for desktop only) |

### Usage Examples

#### Basic

**Template:**
```html
<tui-block-status>
<img alt="not found" src="assets/images/not-found.svg" tuiSlot="top" class="image" />
<h4>Not found</h4> Try to find by number </tui-block-status>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatus],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### With actions

**Template:**
```html
<tui-block-status *ngIf="size$ | async as size">
<img alt="survived" src="assets/images/going-up.svg" tuiSlot="top" />
<h4>Something has been achieved</h4>
<span class="text"> You can do something with it, or you can not do it. And the description text can be quite long. </span>
<button appearance="secondary" tuiButton type="button" [size]="size" > Do </button>
<button appearance="flat-grayscale" tuiButton type="button" [size]="size" > Not to do </button>
</tui-block-status>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton, type TuiSizeL} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';
import {map, type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpointService = inject(TuiBreakpointService);

    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map((key) => (key === 'mobile' ? 'm' : 'l')),
    );
}
```

#### Cards

**Template:**
```html
<div *ngIf="size$ | async as size" class="container" >
<tui-block-status class="card" [card]="true" >
<img alt="hidden content" src="assets/images/camping.svg" tuiSlot="top" class="image" /> We hide the unwanted block <button appearance="secondary" tuiButton type="button" [size]="size" > Return </button>
</tui-block-status>
<tui-block-status class="card" [card]="true" >
<img alt="something wrong" src="assets/images/cancel.svg" tuiSlot="top" class="image" /> Something happened in this block <button appearance="secondary" tuiButton type="button" [size]="size" > Try again </button>
</tui-block-status>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton, type TuiSizeL} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';
import {map, type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf, TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpointService = inject(TuiBreakpointService);

    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map((key) => (key === 'mobile' ? 'm' : 'l')),
    );
}
```

**LESS:**
```less
.container {
    display: flex;
    gap: 1rem;

    :host-context(tui-root._mobile) & {
        flex-direction: column;
    }
}

.image {
    inline-size: 5.5rem;
    block-size: 5.5rem;
}

.card {
    background-color: var(--tui-background-base-alt);
    block-size: auto;
}
```

#### Customization

**Template:**
```html
<div class="container">
<tui-block-status class="card" [card]="true" >
<tui-avatar-stack tuiSlot="top">
<tui-avatar *ngFor="let user of users" size="l" [src]="user | tuiInitials" [style.background]="user | tuiAutoColor" />
</tui-avatar-stack> You can put other content instead of image using <code>tui-block-content</code> css class <button appearance="primary" size="s" tuiButton type="button" [style.border-radius.rem]="100" > Got it </button>
</tui-block-status>
<tui-block-status [card]="true" [class.card]="true" >
<img alt="Alex Inkin" src="assets/images/avatar.jpg" tuiSlot="top" class="avatar" />
<h1>Alex Inkin</h1>
</tui-block-status>
</div>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiButton, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgFor,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiAvatarStack,
        TuiBlockStatus,
        TuiButton,
        TuiInitialsPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly users = [
        'Alex Inkin',
        'Vladimir Potekhin',
        'Nikita Barsukov',
        'Maxim Ivanov',
    ];
}
```

**LESS:**
```less
.container {
    display: flex;
    gap: 1rem;

    :host-context(tui-root._mobile) & {
        flex-direction: column;
    }
}

.card {
    background-color: var(--tui-background-base-alt);
    block-size: auto;
}

.avatar[tuiSlot='top'] {
    inline-size: 6.25rem;
    block-size: 6.25rem;
    border-radius: 50%;
}
```

#### Mobile

**Template:**
```html
<div tuiPlatform="ios" class="container" >
<tui-block-status class="card" [card]="true" >
<img alt="hidden content" src="assets/images/camping.svg" tuiSlot="top" class="image" /> We hide the unwanted block <button appearance="secondary" size="m" tuiButton type="button" > Return </button>
</tui-block-status>
<tui-block-status tuiPlatform="ios" class="card" [card]="true" >
<img alt="something wrong" src="assets/images/cancel.svg" tuiSlot="top" class="image" /> Something happened in this block <button appearance="secondary" size="m" tuiButton type="button" > Try again </button>
</tui-block-status>
<tui-block-status tuiPlatform="ios" class="card" [card]="true" > Something happened in this block </tui-block-status>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatus, TuiButton, TuiPlatform],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.card {
    background-color: var(--tui-background-base-alt);
    block-size: auto;
}
```

#### Desktop medium

**Template:**
```html
<tui-block-status size="m">
<img alt="survived" src="assets/images/going-up.svg" tuiSlot="top" />
<h4>There is nothing here yet</h4>
<span>To get started, create a server</span>
<button appearance="primary" size="s" tuiButton type="button" > Create </button>
</tui-block-status>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Empty image block

**Template:**
```html
<tui-block-status size="m">
<h4>Something happened in this block</h4>
<span>Try again later</span>
<button appearance="secondary" size="s" tuiButton type="button" > Retry </button>
</tui-block-status>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Empty description block

**Template:**
```html
<div class="container">
<tui-block-status class="card" [card]="true" >
<img alt="hidden content" src="assets/images/camping.svg" tuiSlot="top" class="image" />
<h3>No operations</h3>
</tui-block-status>
<tui-block-status class="card" [card]="true" >
<img alt="hidden content" src="assets/images/camping.svg" tuiSlot="top" class="image" />
<h3>No operations</h3>
<button appearance="secondary" size="m" tuiButton type="button" > Return </button>
</tui-block-status>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.card {
    background-color: var(--tui-background-base-alt);
    block-size: auto;
}
```
