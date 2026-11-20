# TextfieldController

- **Package**: `LEGACY`
- **Type**: directives

Directive allows to customize `TuiPrimitiveTextfield` with parameters that it adds into DI tree. That means that you can use the directive on any root element and it will customize all textfields in this scope. Most Taiga UI form controls are based on `TuiPrimitiveTextfield` and thus accept these options. If there are several controllers above textfield, their values will be merged. The nearest directives are in priority.

### How to Use (Import)

```ts
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfieldControllerModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div
  class="wrapper"
  [tuiTextfieldCleaner]="true"
>
  <tui-input>...</tui-input>
</div>
```

### Example

```html
<ng-template>
<tui-input [formControl]="control" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContentSelected" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" > Hello </tui-input>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiTextfieldCleaner | `boolean` | Shows a cross to reset a value |
| tuiTextfieldCustomContent | `PolymorpheusContent` | Right content (e.g. avatar with maximum size 32x32px) |
| tuiTextfieldLabelOutside | `boolean` | Label is outside a component and made with Label |
| tuiTextfieldSize | `TuiSizeS | TuiSizeL` | Size |

### Usage Examples

#### Basic

**Template:**
```html
<!-- Works in several levels-->
<div class="wrapper tui-space_top-3" [tuiTextfieldCleaner]="true" >
<!-- You can also put directive directly on textfield -->
<tui-primitive-textfield tuiTextfieldSize="s"> Cool <input placeholder="Hello!" tuiTextfieldLegacy />
</tui-primitive-textfield>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiPrimitiveTextfieldModule, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
