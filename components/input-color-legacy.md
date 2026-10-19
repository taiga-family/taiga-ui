# InputColorLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputColor instead. Note setting gradients will no longer be supported. You can use CSS Gradient Generator for that.

### How to Use (Import)

```ts
import {TuiColorPickerModule} from '@taiga-ui/legacy';

// ...

@NgModule({
  standalone: true,
  imports: [
    // ...
    TuiColorPickerModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-color-picker [(color)]="color"></tui-color-picker>
```

### Example

```html
<tui-color-picker />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(color)] | `[number, number, number, number]` | RGBA color tuple |

### Usage Examples

#### Input color

**Template:**
```html
<tui-input-color class="b-form" [colors]="palette" [(ngModel)]="color" > Background color </tui-input-color>
<tui-input-color tuiTextfieldSize="m" class="b-form tui-space_vertical-2" [colors]="palette" [(ngModel)]="color" > Background color </tui-input-color>
<tui-input-color tuiTextfieldSize="s" class="b-form" [colors]="palette" [(ngModel)]="color" > Background color </tui-input-color>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputColorModule, TuiTextfield],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected color = '#ffdd2d';
}
```

#### Color selector in dropdown

**Template:**
```html
<button appearance="" tuiButton type="button" [style.background]="background" [style.color]="background" [tuiDropdown]="picker" [tuiDropdownOpen]="false" >
<span class="invert">Color me Kubrick</span>
<ng-template #picker>
<tui-color-selector [(color)]="color" />
</ng-template>
</button>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {DomSanitizer, type SafeStyle} from '@angular/platform-browser';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiColorSelectorModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButton, TuiColorSelectorModule, TuiDropdown],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);

    protected color = '#ffdd2d';

    protected get background(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }
}
```

**LESS:**
```less
.invert {
    color: inherit;
    filter: invert(1);
}
```

#### Palette in dropdown

**Template:**
```html
<button appearance="" tuiButton type="button" [style.background]="color$ | async" [tuiDropdown]="palette" [tuiDropdownOpen]="false" > Palette only <ng-template #palette>
<tui-palette [colors]="colors" (selectedColor)="updateColor($event)" />
</ng-template>
</button>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiPaletteModule} from '@taiga-ui/legacy';
import {BehaviorSubject} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiDropdown, TuiPaletteModule],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected colors = new Map([
        ['blue', 'var(--tui-status-info)'],
        ['green', 'var(--tui-status-positive)'],
        ['red', 'var(--tui-status-negative)'],
    ]);

    protected color$ = new BehaviorSubject('var(--tui-status-positive)');

    protected updateColor(color: string): void {
        this.color$.next(color);
    }
}
```

#### Native input color

**Template:**
```html
<tui-input [maskito]="mask" [tuiTextfieldIcon]="color" [(ngModel)]="value" > Input color </tui-input>
<ng-template #color>
<input tabindex="-1" type="color" [(ngModel)]="value" (click.stop)="(0)" (mousedown.stop)="(0)" />
<tui-icon icon="@tui.paint-bucket" />
<hr [style.background]="value" />
</ng-template>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiIcon} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        MaskitoDirective,
        TuiIcon,
        TuiInputModule,
        TuiTextfieldControllerModule,
        TuiWrapperModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};
    protected value = '#ffdd2d';
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

input {
    .fullsize();

    opacity: 0;
    pointer-events: auto;
    cursor: pointer;

    &:hover + tui-icon {
        opacity: 0.65;
    }
}

hr {
    position: absolute;
    bottom: -0.4rem;
    inline-size: 1.4rem;
    block-size: 0.3rem;
    border-radius: 0.125rem;
}
```
