# PrimitiveTextfield

- **Package**: `LEGACY`
- **Type**: components

This component is deprecated, use new Textfield instead to build your custom textfield controls PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. Does not work with Angular forms

### How to Use (Import)

```ts
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPrimitiveTextfieldModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-primitive-textfield [(value)]="value">Type something</tui-primitive-textfield>
```

### Example

```html
<tui-primitive-textfield [disabled]="disabled" [editable]="editable" [focusable]="focusable" [invalid]="invalid" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [readOnly]="readOnly" [style.text-align]="textAlign" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContent" [tuiTextfieldFiller]="filler" [tuiTextfieldIcon]="iconContent" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" [(value)]="value" > Component label </tui-primitive-textfield>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | Disabled state |
| editable | `boolean` | Native input allows inputting |
| filler | `string` | Pale text suggestion for input (e.g. HH:MM:SS for time). Use tuiTextfieldFiller instead |
| tuiTextfieldIcon | `PolymorpheusContent` | Icon content. If content is a string, it is used as stringified svg. Requires you to import TuiTextfieldControllerModule |
| readOnly | `boolean` | Component is read only |
| invalid | `boolean` | Invalid state |
| value | `string` | Value |

### Usage Examples

#### sizes

**Template:**
```html
<tui-primitive-textfield [disabled]="disabled" [focusable]="focusable" [invalid]="computedInvalid" [readOnly]="readOnly" [tuiTextfieldIcon]="iconContent" [(value)]="value" (focusedChange)="onFocused($event)" >
<ng-content />
<input tuiTextfieldLegacy [type]="inputType" />
</tui-primitive-textfield>
<ng-template #iconContent>
<button appearance="icon" tuiIconButton type="button" class="icon" [iconStart]="icon" [tuiHint]="hintContent" (click)="togglePasswordVisibility()" > Toggle password visibility </button>
</ng-template>
<ng-template #hintContent>{{ hint }}</ng-template>
```

**TypeScript:**
```ts
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHintDirective} from '@taiga-ui/core';
import {
    AbstractTuiControl,
    type TuiNativeFocusableElement,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-primitive-textfield-example-1',
    imports: [
        TuiButton,
        TuiHintDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example extends AbstractTuiControl<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private isPasswordHidden = true;

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    protected get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    protected get icon(): string {
        return this.isPasswordHidden ? '@tui.eye' : '@tui.eye-off';
    }

    protected get hint(): string {
        return this.isPasswordHidden ? 'Show password' : 'Hide password';
    }

    protected get inputType(): string {
        return this.isPasswordHidden ? 'password' : 'text';
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
```

**LESS:**
```less
:host {
    display: block;
}

.icon {
    cursor: pointer;
    pointer-events: auto;
}
```

#### Options

**Template:**
```html
<form tuiTextfieldSize="m" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" >
<label> Modified cleaner icon <tui-primitive-textfield [(value)]="value" (focusedChange)="onFocused($event)" > Type an email <input tuiTextfieldLegacy type="email" />
</tui-primitive-textfield>
</label>
<br />
<label> Override modified cleaner icon <tui-primitive-textfield iconCleaner="@tui.pencil" tuiHintContent="Hint is shown for disabled control" [disabled]="true" [(value)]="value" (focusedChange)="onFocused($event)" > Type an email <input tuiTextfieldLegacy type="email" />
</tui-primitive-textfield>
</label>
</form>
```

**TypeScript:**
```ts
import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {
    AbstractTuiControl,
    type TuiNativeFocusableElement,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-primitive-textfield-example-2',
    imports: [TuiHint, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTextfieldOptionsProvider({
            iconCleaner: '@tui.pencil',
            hintOnDisabled: true,
        }),
    ],
})
export default class Example extends AbstractTuiControl<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
```

Custom align content by text-align
