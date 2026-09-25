# Touchable

- **Package**: `ADDON-MOBILE`
- **Type**: directives

Directive to emulate native iOS touches

### Usage Examples

#### Basic

**Template:**
```html
<div appearance="floating" tuiCardLarge tuiTouchable="scale" class="tui-space_bottom-3" >
<h2 [style.margin]="0">scale</h2> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
<div appearance="floating" tuiCardLarge tuiTouchable="opacity" class="tui-space_bottom-3" >
<h2 [style.margin]="0">opacity</h2> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
<div appearance="floating" tuiCardLarge tuiTouchable="background" class="tui-space_bottom-3" >
<h2 [style.margin]="0">background</h2> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTouchable} from '@taiga-ui/addon-mobile';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppearance, TuiCardLarge, TuiTouchable],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
