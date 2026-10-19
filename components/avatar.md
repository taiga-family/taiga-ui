# Avatar

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiAvatar} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiAvatar,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-avatar>Batman</tui-avatar>
```

### Example

```html
<tui-avatar [round]="round" [size]="size" [src]="src" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| round | `boolean` | Use round shape |
| size | `TuiSizeS | TuiSizeL` | Size |
| src | `SafeResourceUrl | string | null` | which would be styled differently from initials and fade if overflown |

### Usage Examples

#### Content types

**Template:**
```html
<h3 tuiTitle> Icon <span tuiSubtitle> Starts with <code>&#64;tui.</code>
</span>
</h3>
<tui-avatar src="@tui.user" />
<h3 tuiTitle> Colored icon <span tuiSubtitle> Use <code>tuiIcon</code> pipe to resolve name </span>
</h3>
<tui-avatar [src]="'@tui.mastercard' | tuiIcon" />
<tui-avatar [src]="'assets/icons/nx.svg'" />
<h3 tuiTitle>Image</h3>
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async" />
<h3 tuiTitle>Initials</h3>
<tui-avatar src="AI" />
<h3 tuiTitle>Content</h3>
<div>
<tui-avatar>99+</tui-avatar>
<tui-avatar class="tui-space_horizontal-4">
<picture>
<source media="(min-width: 600px)" srcset="assets/images/angular.svg" />
<img alt="Alex Inkin" src="assets/images/avatar.jpg" />
</picture>
</tui-avatar>
<tui-avatar>
<video autoplay loop playsinline [muted]="true" >
<source src="assets/media/bbb.mp4" type="video/mp4" />
</video>
</tui-avatar>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcPipe, TuiIconPipe, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAvatar, TuiFallbackSrcPipe, TuiIconPipe, TuiTitle],
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
    flex-direction: column;
    gap: 1rem;
}
```

#### Colors

**Template:**
```html
<tui-avatar appearance="negative" src="@tui.user" />
<tui-avatar src="AI" class="text" [style.background]="'AI' | tuiAutoColor" />
<tui-avatar class="text">
<div tuiFade>Fading</div>
</tui-avatar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAutoColorPipe, TuiAvatar, TuiFade],
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
<section *ngFor="let size of sizes">
<tui-avatar [size]="size">{{ size | uppercase }}</tui-avatar>
<tui-avatar src="@tui.user" [size]="size" />
</section>
```

**TypeScript:**
```ts
import {NgForOf, UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAvatar, UpperCasePipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<tui-avatar-stack *ngFor="let size of sizes; let odd = odd" class="tui-space_vertical-4" [direction]="odd ? 'left' : 'right'" >
<tui-avatar *ngFor="let name of names" [round]="odd" [size]="size" [src]="name | tuiInitials" [style.background]="name | tuiAutoColor" />
<tui-avatar [round]="odd" [size]="size" > 99+ </tui-avatar>
</tui-avatar-stack>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAutoColorPipe,
    TuiInitialsPipe,
    type TuiSizeXS,
    type TuiSizeXXL,
} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiInitialsPipe],
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
<tui-avatar src="DI" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAvatarOptionsProvider({size: 'l'})],
})
export default class Example {}
```

#### Labeled

**Template:**
```html
<tui-avatar-labeled label="Grigori Constantinopolsky">
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/10106368' | tuiFallbackSrc: '@tui.user' | async" />
</tui-avatar-labeled>
<tui-avatar-labeled label="Nikolai Rimsky-Korsakov">
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async" />
</tui-avatar-labeled>
<tui-avatar-labeled label="Hubert Wolfflegelstainhausenbergedorf">
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/46284632' | tuiFallbackSrc: '@tui.user' | async" />
</tui-avatar-labeled>
<tui-avatar-labeled label="Arkhangelsky Constantine">
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/35179038' | tuiFallbackSrc: '@tui.user' | async" />
</tui-avatar-labeled>
<tui-avatar-labeled label="Zoya Kosmodemyanskaya">
<tui-avatar [src]="'https://avatars.githubusercontent.com/u/8158578' | tuiFallbackSrc: '@tui.user' | async" />
</tui-avatar-labeled>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeled} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAvatar, TuiAvatarLabeled, TuiFallbackSrcPipe],
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
    gap: 1rem;
}

tui-avatar {
    border: 1px solid var(--tui-border-normal);
}
```

#### Outline

**Template:**
```html
<tui-avatar size="m" src="@tui.heart" tuiAvatarOutline />
<tui-avatar size="l" tuiAvatarOutline="var(--tui-background-accent-2)" >
<img alt="Alex Inkin" src="assets/images/avatar.jpg" />
</tui-avatar>
<tui-avatar size="xl" src="OK" tuiAvatarOutline="linear-gradient(#c86dd7, #3023ae)" [style.background]="'linear-gradient(#3023ae, #c86dd7)'" [style.color]="'#fff'" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiAvatarOutline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiAvatarOutline],
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
    gap: 1rem;
}
```
