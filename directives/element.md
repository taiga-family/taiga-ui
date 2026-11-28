# Element

- **Package**: `CDK`
- **Type**: directives

Directive is used to get a link to a native element as template reference variable (analogue of `@ViewChild('ref', {read: ElementRef}` for template)

### Usage Examples

#### Usage

**Template:**
```html
<button #component tuiAvatar type="button" > C </button>
<button #element="elementRef" tuiAvatar tuiElement type="button" > E </button>
<p> component instanceof <code>TuiAvatar</code> : <b>{{ isLink(component) }}</b>
</p>
<p> element instanceof <code>ElementRef</code> : <b>{{ isElement(element) }}</b>
</p>
<button tuiButton type="button" (click)="element.nativeElement.focus()" > Focus element </button>
```

**TypeScript:**
```ts
import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElement} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiButton, TuiElement],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isLink(component: unknown): boolean {
        return component instanceof TuiAvatar;
    }

    protected isElement(element: unknown): boolean {
        return element instanceof ElementRef;
    }
}
```

**CSS:**
```css
[tuiAvatar] {
    margin-inline-end: 0.75rem;
}
```

Directive is used to get a link to a native element as template reference variable (analogue of
`@ViewChild('ref', &#123;read: ElementRef&#125;`
for template)
