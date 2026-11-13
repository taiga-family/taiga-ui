# LazyLoading

- **Package**: `KIT`
- **Type**: directives

Directive can be used for image lazy loading. It is the same as `tuiLoading="lazy"` but supports also old browsers

### How to Use (Import)

```ts
import {TuiImgLazyLoading} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiImgLazyLoading,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<img
  src="myImage.jpg"
  height="200"
  width="300"
  tuiLoading="lazy"
/>
```

### Usage Examples

#### Usage

**Template:**
```html
<p *ngFor="let src of array">
<img alt="Random image" height="200" tuiLoading="lazy" width="300" [src]="src" />
</p>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiImgLazyLoading} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiImgLazyLoading],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly array = Array.from(
        {length: 100},
        (_, i) => `https://picsum.photos/${250 + i}/200`,
    );
}
```
