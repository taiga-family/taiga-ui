# Compass

- **Package**: `KIT`
- **Type**: components

Direction isn't present (direction is NaN)

Following pointer on the page

### Example

```html
<tui-compass [degrees]="degrees" [style.color]="color" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [degrees] | `number` | pointer direction in degrees |
| [style.color] | `string` | custom color |

### Usage Examples

#### Example 1

Direction isn't present (direction is NaN)

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCompass} from '@taiga-ui/kit';

@Component({
    imports: [TuiCompass],
    template: '<tui-compass />',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Example 2

Following pointer on the page

**TypeScript:**
```ts
import {Component, ElementRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {TuiCompass} from '@taiga-ui/kit';

@Component({
    imports: [TuiCompass],
    template: '<tui-compass [degrees]="degrees" />',
    encapsulation,
    changeDetection,
    host: {'(document:mousemove)': 'calculate($event)'},
})
export default class Example {
    private readonly compass = viewChild(TuiCompass, {read: ElementRef<HTMLElement>});

    protected degrees = 0;

    protected calculate(event: MouseEvent): void {
        const rect =
            this.compass()?.nativeElement.getBoundingClientRect() ?? EMPTY_CLIENT_RECT;

        const x = Math.ceil(event.clientX - (rect.left + rect.width / 2));
        const y = Math.ceil(event.clientY - (rect.top + rect.height / 2));

        this.degrees = Math.atan2(y, x) * (180 / Math.PI) + 90;
    }
}
```
