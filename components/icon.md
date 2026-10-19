# Icon

- **Package**: `CORE`
- **Type**: components

A component to use icons and color them with CSS. By default, `tui-icon` expects the Lucide icons. To associate a name with icon you should use that pattern `@tui.[name]`

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiIcon,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-icon icon="@tui.check"></tui-icon>
```

### Example

```html
<tui-icon [background]="backgroundIcon" [icon]="icon" [style.background]="backgroundColor" [style.color]="color" [style.font-size.px]="size" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [icon] | `string` | . |
| [background] | `string` | You can limit the area of your icon by shape which refers to removing part of icon area defined by other
                icon. |

```
npm i @taiga-ui/icons
```

```json
{
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "assets": [
            {
              "glob": "**/*",
              "input": "node_modules/@taiga-ui/icons/src",
              "output": "assets/taiga-ui/icons/"
            }
          ]
        }
      }
    }
  }
}
```

```
npm i @taiga-ui/icons-material
```

```json
{
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "assets": [
            {
              "glob": "**/*",
              "input": "node_modules/@taiga-ui/icons-material/src",
              "output": "assets/taiga-ui/icons/"
            }
          ]
        }
      }
    }
  }
}
```

```
npm i @taiga-ui/icons-fontawesome
```

```json
{
  "projects": {
    "demo": {
      "architect": {
        "build": {
          "assets": [
            {
              "glob": "**/*",
              "input": "node_modules/@taiga-ui/icons-fontawesome/src",
              "output": "assets/taiga-ui/icons/"
            }
          ]
        }
      }
    }
  }
}
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-icon icon="@tui.heart" [style.color]="'var(--tui-background-accent-1)'" />
<img alt="" [src]="'@tui.heart' | tuiIcon" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 0.625rem;
}

img {
    inline-size: 1.5rem;
}
```

#### External

**Template:**
```html
<tui-icon icon="https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg" class="red" />
<tui-icon icon="https://cdn-icons-png.flaticon.com/64/12710/12710759.png" class="hover" />
<tui-icon icon="telegram" class="text" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconResolverProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconResolverProvider((icon) =>
            icon.includes('/') ? icon : `/assets/icons/${icon}.svg`,
        ),
    ],
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    gap: 1rem;
}

.red {
    color: var(--tui-text-negative);
}

.hover {
    .transition(color);

    color: var(--tui-background-accent-1);

    &:hover {
        color: var(--tui-background-accent-1-hover);
    }
}

.text {
    color: var(--tui-text-secondary);
}
```

#### Two colors

**Template:**
```html
<tui-icon background="@tui.info-filled" icon="@tui.info" [style.background]="'pink'" [style.color]="'purple'" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Bundled

**Template:**
```html
<div class="icons">
<tui-icon icon="@tui.heart" />
<tui-icon icon="@tui.search" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconsProvider} from '@taiga-ui/core';
import heart from '@taiga-ui/icons/src/heart.svg?raw';
import search from '@taiga-ui/icons/src/search.svg?raw';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconsProvider({
            '@tui.heart': heart,
            '@tui.search': search,
        }),
    ],
})
export default class Example {}
```

**LESS:**
```less
.icons {
    display: flex;
    gap: 1rem;
    margin-block-end: 1rem;
}
```

#### Resolver

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
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
    gap: 0.625rem;
}
```

#### Lucide

Open source theme for Taiga UI Lucide Icons by default. You can browse all the icons from this pack here. Setup

**Template:**
```html
<input checked tuiSwitch type="checkbox" />
<tui-icon icon="@tui.heart" [style.color]="'var(--tui-status-negative)'" />
<img alt="" [src]="'@tui.trash' | tuiIcon" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 0.625rem;
}

img {
    inline-size: 1.5rem;
    block-size: 1.5rem;
}
```

#### Material

Taiga UI supports Material Icons. You can browse all the icons from this pack and find the one that suits you here. You can replace icons used inside components as well through DI options, see example below. Setup

**Template:**
```html
<input checked tuiSwitch type="checkbox" />
<tui-icon icon="@tui.material.filled.favorite" [style.color]="'var(--tui-status-negative)'" />
<img alt="" [src]="'@tui.material.filled.delete' | tuiIcon" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiSwitchOptionsProvider({icon: '@tui.material.filled.check'})],
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 0.625rem;
}

img {
    inline-size: 1.5rem;
    block-size: 1.5rem;
}
```

#### FontAwesome

Taiga UI supports FontAwesome Icons (free pack). You can browse all the icons from this pack here . You can replace icons used inside components as well through DI options, see example below. Setup

**Template:**
```html
<input checked tuiSwitch type="checkbox" />
<tui-icon icon="@tui.fa.solid.heart" [style.color]="'var(--tui-status-negative)'" />
<img alt="" [src]="'@tui.fa.solid.trash' | tuiIcon" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiSwitchOptionsProvider({icon: '@tui.fa.solid.check'})],
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 0.625rem;
}

img {
    inline-size: 1.5rem;
    block-size: 1.5rem;
}
```

#### Sizes

**Template:**
```html
<tui-icon icon="@tui.settings" [style.font-size.rem]="4" />
<tui-icon icon="@tui.settings" [style.font-size.rem]="3" />
<tui-icon icon="@tui.settings" [style.font-size.rem]="2" />
<tui-icon icon="@tui.settings" [style.font-size.rem]="1.5" />
<tui-icon icon="@tui.settings" [style.font-size.rem]="1" />
<hr /> Reverse scaling, <br /> container is 24x24 and icon is 16x16 <tui-icon icon="@tui.settings" [style.border-width.rem]="0.25" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
}

hr {
    inline-size: 100%;
    margin: 0.5rem 0;
}
```

#### Inline svg

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    template: '<tui-icon [icon]="icon" />',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly icon = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
    )}`;
}
```
