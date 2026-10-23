# Skeleton

- **Package**: `KIT`
- **Type**: directives

You can pass
`boolean`
to toggle skeleton for elements. For multi line text you can use
`string`
to serve as a placeholder underneath the text skeleton or a
`number`
to generate this many random sized words, while your actual text is loading

### Usage Examples

#### Components

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="skeleton" /> Show skeleton </label>
<p>
<span size="l" tuiAvatar="AI" [tuiSkeleton]="skeleton" ></span>
<span size="l" tuiAvatar="@tui.user" [tuiSkeleton]="skeleton" >
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</span>
<span size="l" tuiAvatar="❤️" [tuiSkeleton]="skeleton" ></span>
<span appearance="primary" size="l" tuiAvatar="$" [tuiSkeleton]="skeleton" ></span>
</p>
<p>
<tui-textfield [tuiSkeleton]="skeleton">
<label tuiLabel>Input</label>
<input tuiInput value="Some value" [readonly]="skeleton" />
</tui-textfield>
</p>
<section appearance="neutral" tuiCardLarge [tuiSkeleton]="skeleton" >
<h2 tuiHeader>
<span tuiTitle> Card <span tuiSubtitle>Subtitle</span>
</span>
</h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </section>
<p>
<tui-progress-circle [tuiSkeleton]="skeleton" [value]="0.33" />
<tui-avatar-stack>
<span size="l" tuiAvatar="AI" [tuiSkeleton]="skeleton" ></span>
<span size="l" tuiAvatar="@tui.user" [tuiSkeleton]="skeleton" >
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</span>
<span size="l" tuiAvatar="❤️" [tuiSkeleton]="skeleton" ></span>
<span appearance="primary" size="l" tuiAvatar="$" [tuiSkeleton]="skeleton" ></span>
</tui-avatar-stack>
</p>
<p>
<button tuiButton type="button" [tuiSkeleton]="skeleton" > Awesome </button>
<button appearance="secondary" tuiButton type="button" [tuiSkeleton]="skeleton" > Cool </button>
</p>
<p>
<span tuiChip [tuiSkeleton]="skeleton" > Chip </span>
<span tuiBadge [tuiSkeleton]="skeleton" > Dale </span>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiInput, TuiTitle} from '@taiga-ui/core';
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
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiChip,
        TuiHeader,
        TuiInput,
        TuiProgressCircle,
        TuiSkeleton,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

tui-textfield {
    inline-size: 100%;
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
    imports: [FormsModule, TuiLabel, TuiSkeleton, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
```
