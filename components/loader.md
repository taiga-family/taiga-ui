# Loader

- **Package**: `CORE`
- **Type**: components

Use css-variable
`--tui-thickness`
to customize width of the circle stroke. By default, it is 1/12 of diameter.

Use css-variable
`--tui-diameter`
to customize the loader size instead of one of the predefined
`[size]`
options.

### Example

```html
<div class="example">
<tui-loader [inheritColor]="inheritColor" [loading]="loading" [overlay]="overlay" [size]="size" [textContent]="template" >
<div>
<b>Colonel Trautman:</b> It's over Johnny. It's over! </div>
<div>
<b>Rambo:</b> Nothing is over! Nothing! You just don't turn it off! It wasn't my war! You asked me I didn't ask you! And I did what I had to do to win, for somebody who wouldn't let us win! Then I come back to the world, and I see all those maggots at the airport, protestin' me, spittin', callin' me a baby killer and all kinds of vile crap! Who are they to protest me?! Huh?! Who are they?! Unless they been me and been there and know what the hell they yellin' about! </div>
</tui-loader>
<ng-template #textTemplate>
<div>Loading</div>
<div> You can use a template with <a tuiLink [routerLink]="routes.Notification" > HTML </a> here </div>
</ng-template>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [loading] | `boolean` | show/hide loader |
| [inheritColor] | `boolean` | inherit parent color |
| [overlay] | `boolean` | content overlay when loader is showed |
| [size] | `TuiSizeXS \| TuiSizeXL` | — |
| [textContent] | `PolymorpheusContent` | custom content under loader |

### Usage Examples

#### With inherited background color

**Template:**
```html
<tui-loader [inheritColor]="true"> I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you. </tui-loader>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';

@Component({
    imports: [TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: block;
    background: var(--tui-background-accent-1);
    box-shadow: 0 0 0 100rem var(--tui-background-accent-1);
    color: var(--tui-text-primary-on-accent-1);
}
```

#### With content overlay

**Template:**
```html
<tui-loader [overlay]="true"> I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you. </tui-loader>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';

@Component({
    imports: [TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: block;
    background: #3e4757;
    box-shadow: 0 0 0 100rem #3e4757;
    color: var(--tui-background-base);
}
```

#### Options

**Template:**
```html
<tui-loader> This example demonstrates how to configure loader options using tuiLoaderOptionsProvider. The loader is configured with size 'l', overlay enabled, and inheritColor disabled. </tui-loader>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader, tuiLoaderOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        tuiLoaderOptionsProvider({
            size: 'l',
            inheritColor: false,
            overlay: true,
        }),
    ],
})
export default class Example {}
```

**LESS:**
```less
.inline-flex {
    display: inline-flex;
}
```

#### Custom stroke width

Use css-variable `--tui-thickness` to customize width of the circle stroke. By default, it is 1/12 of diameter.

**Template:**
```html
<tui-loader />
<tui-loader />
<tui-loader />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader, tuiLoaderOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiLoaderOptionsProvider({size: 'xl'})],
})
export default class Example {}
```

**LESS:**
```less
tui-loader {
    min-inline-size: 3.5rem;

    &:nth-child(1) {
        /**
        Don't use `rem` units if you support Safari.
        Safari doesn't support `rem` units for `stroke-*` properties of `<circle />`.
        Use `em` units => they will be interpreted as `rem` ones
        (`<circle />` has `font-size: 1rem`).
        Or just use simple `px` units.
        */
        --tui-thickness: 0.125em;
    }

    &:nth-child(2) {
        --tui-thickness: 0.25rem;
    }

    &:nth-child(3) {
        --tui-thickness: 0.5rem;
    }
}

:host {
    display: flex;
    gap: 2rem;
}
```

#### Custom size

Use css-variable `--tui-diameter` to customize the loader size instead of one of the predefined `[size]` options.

**Template:**
```html
<tui-loader [style.--tui-diameter.rem]="1.75" />
<tui-loader [style.--tui-diameter.rem]="3" />
<tui-loader [style.--tui-diameter.rem]="4.5" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';

@Component({
    imports: [TuiLoader],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    align-items: center;
    gap: 2rem;
}
```
