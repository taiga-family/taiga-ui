# Skeleton

- **Package**: `KIT`
- **Type**: directives

## Text

You can pass
`boolean`
to toggle skeleton for elements. For multi line text you can use
`string`
to serve as a placeholder underneath the text skeleton or a
`number`
to generate this many random sized words, while your actual text is loading

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiSkeleton} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSkeleton,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<span [tuiSkeleton]="true">Loading..</span>
```

### Usage Examples

#### Components

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="skeleton" /> Show skeleton </label>
<p>
<tui-avatar src="AI" [tuiSkeleton]="skeleton" />
<tui-avatar src="https://avatars.githubusercontent.com/u/11832552" [tuiSkeleton]="skeleton" />
<tui-avatar src="❤️" [tuiSkeleton]="skeleton" />
<tui-avatar appearance="primary" src="$" [tuiSkeleton]="skeleton" />
</p>
<section tuiAppearance="neutral" tuiCardLarge [tuiSkeleton]="skeleton" >
<h2 tuiHeader>
<span tuiTitle> Card <span tuiSubtitle>Subtitle</span>
</span>
</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </section>
<p>
<tui-progress-circle [tuiSkeleton]="skeleton" [value]="0.33" />
<tui-avatar-stack>
<tui-avatar src="AI" [tuiSkeleton]="skeleton" />
<tui-avatar src="https://avatars.githubusercontent.com/u/11832552" [tuiSkeleton]="skeleton" />
<tui-avatar src="❤️" [tuiSkeleton]="skeleton" />
<tui-avatar appearance="primary" src="$" [tuiSkeleton]="skeleton" />
</tui-avatar-stack>
</p>
<p>
<button tuiButton type="button" [tuiSkeleton]="skeleton" > Awesome </button>
<button appearance="secondary" tuiButton type="button" [tuiSkeleton]="skeleton" > Cool </button>
</p>
<p>
<tui-chip [tuiSkeleton]="skeleton">Chip</tui-chip>
<tui-badge [tuiSkeleton]="skeleton">Dale</tui-badge>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiBadge,
    TuiChip,
    TuiProgressCircle,
    TuiSkeleton,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAppearance,
        TuiAvatar,
        TuiAvatarStack,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiChip,
        TuiHeader,
        TuiLabel,
        TuiProgressCircle,
        TuiSkeleton,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
```

**LESS:**
```less
p {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}
```

#### Text

You can pass `boolean` to toggle skeleton for elements. For multi line text you can use `string` to serve as a placeholder underneath the text skeleton or a `number` to generate this many random sized words, while your actual text is loading

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="skeleton" /> Show skeleton </label>
<p>
<span [tuiSkeleton]=" skeleton ? 'This text serves as the content behind the skeleton and depending on its length, the skeleton will adjust to fit it.' : '' " > {{ skeleton ? '' : 'This text will be replaced by a placeholder.' }} </span>
</p>
<span [tuiSkeleton]="skeleton && 20"> {{ skeleton ? '' : 'This text will be replaced by a skeleton made of 20 random length non-breaking spaces.' }} </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSkeleton, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiLabel, TuiSkeleton, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
```
