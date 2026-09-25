# Avatar

- **Package**: `KIT`
- **Type**: components

### Example

```html
<div [appearance]="appearance.appearance" [badge]="badge" [round]="round" [size]="size" [tuiAvatar]="src === '@tui.star' || src === 'MW' ? src : '@tui.user'" >
<img alt="" [src]="src" />
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiAvatar] | `string` |  |
| [badge] | `string` | color of the dot badge indicator |
| [round] | `boolean` | circle shape |
| [size] | `TuiSizeS \| TuiSizeL` | — |

### Usage Examples

#### Content types

**Template:**
```html
<p><b>Icons and initials</b></p>
<div tuiCell>
<div tuiAvatar="@tui.user"></div>
<div tuiAvatar="@img.mastercard"></div>
<div tuiAvatar="assets/icons/nx.svg"></div>
<div tuiAvatar="UI"></div>
</div>
<p><b>Image, video and content</b></p>
<div tuiCell>
<div tuiAvatar>
<picture>
<source media="(min-width: 600px)" srcset="assets/images/wisely.png" />
<img alt="Alex Inkin" src="assets/images/avatar.jpg" />
</picture>
</div>
<div tuiAvatar>
<video autoplay loop playsinline [muted]="true" >
<source src="assets/media/bbb.mp4" type="video/mp4" />
</video>
</div>
<div tuiAvatar>99+</div>
</div>
<p><b>Fallback to initials or icon</b></p>
<div tuiCell>
<div tuiAvatar="AI">
<img alt="Alex Inkin" src="https://broken.jpg" />
</div>
<div tuiAvatar="@tui.user">
<img alt="Alex Inkin" src="https://broken.jpg" />
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiCell],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Colors

**Template:**
```html
<div appearance="negative" tuiAvatar="@tui.user" ></div>
<div tuiAvatar="AI" class="text" [style.background]="'AI' | tuiAutoColor" ></div>
<div tuiAvatar class="text" >
<div tuiFade>Fading</div>
</div>
<div appearance="negative" badge="var(--tui-text-positive)" tuiAvatar="@tui.user" >
<img alt="" src="assets/images/avatar.jpg" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiAvatar, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiFade],
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

.text {
    background: var(--tui-background-accent-opposite-pressed);
    color: var(--tui-background-base);
}
```

#### Sizes

**Template:**
```html
@for (size of sizes; track size) { <section>
<div tuiAvatar [size]="size" > {{ size | uppercase }} </div>
<div tuiAvatar="@tui.user" [size]="size" ></div>
</section> }
```

**TypeScript:**
```ts
import {UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, UpperCasePipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs'] as const;
    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section {
    display: flex;
    gap: 0.5rem;
}
```

#### Stacking

**Template:**
```html
@for (size of sizes; track size; let odd = $odd) { <tui-avatar-stack class="tui-space_vertical-4" [direction]="odd ? 'start' : 'end'" > @for (name of names; track name) { <div [round]="odd" [size]="size" [style.background]="name | tuiAutoColor" [tuiAvatar]="name | tuiInitials" ></div> } <div tuiAvatar [round]="odd" [size]="size" > 99+ </div>
</tui-avatar-stack> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core';
import {
    TuiAutoColorPipe,
    TuiAvatar,
    TuiAvatarStack,
    TuiInitialsPipe,
} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiInitialsPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];

    protected readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
    ];
}
```

#### Options with DI

**Template:**
```html
<div tuiAvatar="DI"></div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiAvatarOptionsProvider({size: 'l', appearance: 'secondary', round: false}),
    ],
})
export default class Example {}
```

#### Labeled

**Template:**
```html
<tui-avatar-labeled label="Grigori Constantinopolsky">
<div tuiAvatar>
<img alt="" src="https://avatars.githubusercontent.com/u/10106368" />
</div>
</tui-avatar-labeled>
<tui-avatar-labeled label="Nikolai Rimsky-Korsakov">
<div tuiAvatar>
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div>
</tui-avatar-labeled>
<tui-avatar-labeled label="Hubert Wolfflegelstainhausenbergedorf">
<div tuiAvatar>
<img alt="" src="https://avatars.githubusercontent.com/u/46284632" />
</div>
</tui-avatar-labeled>
<tui-avatar-labeled label="Arkhangelsky Constantine">
<div tuiAvatar>
<img alt="" src="https://avatars.githubusercontent.com/u/35179038" />
</div>
</tui-avatar-labeled>
<tui-avatar-labeled label="Zoya Kosmodemyanskaya">
<div tuiAvatar>
<img alt="" src="https://avatars.githubusercontent.com/u/8158578" />
</div>
</tui-avatar-labeled>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiAvatarLabeled} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiAvatarLabeled],
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

[tuiAvatar] {
    border: 1px solid var(--tui-border-normal);
}
```

#### Outline

**Template:**
```html
<div size="m" tuiAvatar="@tui.heart" tuiAvatarOutline ></div>
<div size="l" tuiAvatar tuiAvatarOutline="var(--tui-background-accent-2)" >
<img alt="Alex Inkin" src="assets/images/avatar.jpg" />
</div>
<div size="xl" tuiAvatar="OK" tuiAvatarOutline="linear-gradient(#c86dd7, #3023ae)" [style.background]="'linear-gradient(#3023ae, #c86dd7)'" [style.color]="'#fff'" ></div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiAvatarOutline} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiAvatarOutline],
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
```
