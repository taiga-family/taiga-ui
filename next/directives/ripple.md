# Ripple

- **Package**: `ADDON-MOBILE`
- **Type**: directives

Directive for «ripple» effect on mobile devices

### Usage Examples

#### Basic

**Template:**
```html
<div tuiRipple [style.--tui-ripple-background]="'radial-gradient(circle, #5c0067 0%, #00d4ff 100%)'" > I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
<div tuiRipple [style.--tui-ripple-background]="'skyblue'" > I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
<div tuiRipple [style.--tui-ripple-background]="'red'" > I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
<div tuiRipple> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
<div tuiRipple [style.--tui-ripple-background]="'blue'" > I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die. </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRipple} from '@taiga-ui/addon-mobile';

@Component({
    imports: [TuiRipple],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiRipple] {
    position: relative;
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
    user-select: none;
    margin-block-end: 1rem;
    overflow: hidden;
}
```

#### Global Ripple

**Template:**
```html
<div tuiRipple="button,.block">
<button tuiButton type="button" > Button </button>
<div class="block">Content</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiRipple],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.block {
    inline-size: 10rem;
    block-size: 5rem;
    margin-block-start: 2rem;
    border: 1px solid var(--tui-background-accent-1);
}

.block,
button {
    position: relative;
    overflow: hidden;
}
```
