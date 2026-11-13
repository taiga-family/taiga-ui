# Icon

- **Package**: `CORE`
- **Type**: components

A component to show icons and color them with CSS. Taiga UI ships with Lucide icons . Same mechanism is used in all `iconStart` / `iconEnd` inputs across the library.

### Example

```html
<tui-icon [background]="background" [badge]="badge" [icon]="icon" [style.background]="background ? 'var(--tui-status-info-pale-hover)' : ''" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [icon] | `string` | icon name |
| [background] | `string` | icon used as a mask to produce 2-color icons |
| [badge] | `string` | second icon used as a smaller badge in bottom right corner |

### Usage Examples

#### Basic

Using `&commat;tui.` , `&commat;img.` and `&commat;font.` prefixes to set icon resolution mode. Control font using `--tui-font-icon` variable.

**Template:**
```html
<tui-icon icon="@tui.heart" />
<tui-icon icon="@img.mastercard" />
<tui-icon icon="@font.home" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon],
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
    gap: 1rem;
    color: var(--tui-text-action);

    --tui-font-icon: 'Material Symbols Outlined';
}
```

#### Parameters

By default icons follow font-size in both icon size and container size. You can set custom container size by explicit `inline-size` / `block-size` . Built-in Lucide icons also support setting thickness via `--tui-stroke-width` variable.

**Template:**
```html
<tui-textfield iconEnd="@tui.scaling">
<label tuiLabel>Container</label>
<input postfix="px" tuiInputSlider [max]="48" [min]="16" [(ngModel)]="container" />
<input tuiSlider type="range" />
</tui-textfield>
<tui-textfield iconEnd="@tui.image-upscale">
<label tuiLabel>Icon</label>
<input postfix="px" tuiInputSlider [max]="48" [min]="16" [(ngModel)]="icon" />
<input tuiSlider type="range" />
</tui-textfield>
<tui-textfield iconEnd="@tui.line-squiggle">
<label tuiLabel>Stroke</label>
<input postfix="px" tuiInputSlider [max]="3" [min]="1" [tuiNumberFormat]="{precision: 1}" [(ngModel)]="thickness" />
<input tuiSlider type="range" [step]="0.1" />
</tui-textfield>
<tui-icon icon="@tui.user" [style.--tui-stroke-width.px]="thickness" [style.block-size.px]="container" [style.font-size.px]="icon" [style.inline-size.px]="container" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputSlider, TuiNumberFormat, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected container = 24;
    protected icon = 24;
    protected thickness = 2;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

tui-icon {
    margin: 1rem;
    align-self: center;
    box-shadow: 0 0 0 0.125rem var(--tui-border-normal);
}
```

#### Features

Combining icons for 2 colors or badge-like effect and using pipe to resolve icon URL by name.

**Template:**
```html
<tui-icon background="@tui.info-filled" icon="@tui.info" />
<tui-icon badge="@tui.star" icon="@tui.user" />
<img alt="" [src]="'@tui.mastercard' | tuiIcon" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon, TuiIconPipe],
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
    gap: 1rem;
}

tui-icon {
    color: var(--tui-text-action);

    &:first-child {
        color: var(--tui-status-negative);
        background-color: var(--tui-status-negative-pale-hover);
    }

    &::after {
        color: var(--tui-status-warning);
    }
}

img {
    inline-size: 1.5rem;
    block-size: 1.5rem;
}
```

#### Bundled

By default icons are loaded as assets when they first appear in the DOM and then cached according to your server policy, just like any image. You can also provide a dictionary of icons to be included in the bundle instead using `tuiIconsProvider` .

**Template:**
```html
<tui-icon icon="@tui.heart" />
<tui-icon icon="@img.mastercard" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
import heart from '@taiga-ui/icons/src/heart.svg';
import mastercard from '@taiga-ui/icons/src/mastercard.svg';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        tuiIconsProvider({
            '@tui.heart': heart,
            '@img.mastercard': mastercard,
        }),
    ],
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
    color: var(--tui-text-action);
}
```

#### Resolver

You can use `tuiAssetsPathProvider` helper to set a custom path for icon assets or use `tuiIconResolverProvider` to completely override name to path resolution logic. Keep in mind "/" symbol is not allowed in icon's name because then it is treated as URL.

**Template:**
```html
<tui-icon icon="@tui.heart" />
<tui-icon icon="discord" />
```

**TypeScript:**
```ts
import {Component, SkipSelf} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER, TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_ICON_RESOLVER,
            deps: [[new SkipSelf(), TUI_ICON_RESOLVER]],
            useFactory(defaultResolver: TuiStringHandler<string>) {
                return (name: string) =>
                    name.startsWith('@tui.')
                        ? defaultResolver(name)
                        : `/assets/icons/${name}.svg`;
            },
        },
    ],
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
    color: var(--tui-text-action);
}
```

#### External

You can pass external icons as URLs or base64 encoded strings. Set `--tui-stroke-width` to 0px if you are seeing skewed proportions, for example if your SVGs do not have `viewBox` or you are using PNGs.

**Template:**
```html
<tui-icon icon="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg" />
<tui-icon icon="https://cdn-icons-png.flaticon.com/64/12710/12710759.png" />
<tui-icon [icon]="icon" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly icon = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
    )}`;
}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
    color: var(--tui-text-action);

    --tui-stroke-width: ~'0px';
}
```

#### Background

Using one icon as a background for another.

**Template:**
```html
<tui-icon background="@tui.wifi" icon="@tui.wifi" />
<tui-icon background="@tui.wifi" icon="@tui.wifi-high" />
<tui-icon background="@tui.wifi" icon="@tui.wifi-low" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon],
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
    gap: 1rem;
}

tui-icon {
    background: var(--tui-border-normal);
    color: var(--tui-status-warning);

    &:first-child {
        color: var(--tui-status-positive);
    }

    &:last-child {
        color: var(--tui-status-negative);
    }
}
```

#### Icon fonts

Make sure to include the actual font somewhere in your app as instructed by your icon font vendor.

**Template:**
```html
<p>
<b>Material Symbols Outlined</b> has user friendly naming, the actual word <code>home</code> gets turned into a house icon: </p>
<tui-icon icon="@font.home" class="material" />
<p>
<b>FontAwesome</b> uses Private Use Area of Unicode to turn <code>\f004</code> into a heart icon, which you can pass as the icon name: </p>
<tui-icon icon="@font.\f004" class="awesome" />
<p> Alternatively, you can pass empty icon name and use <b>FontAwesome</b> classes to get the same result for the basic case, because it also uses <code>::before</code> pseudo-element: </p>
<tui-icon icon="@font." class="awesome fa-heart" />
<p> Ultimately, what you put after <code>&commat;font.</code> goes into CSS <code>content</code> and gets displayed using font defined via <code>--tui-font-icon</code> variable. </p>
<p>The rest is determined by the font you use and you should consult its documentation.</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.material {
    --tui-font-icon: 'Material Symbols Outlined';
}

.awesome {
    --tui-font-icon: 'Font Awesome 6 Free';
}
```
