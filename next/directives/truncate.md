# Truncate

- **Package**: `CDK`
- **Type**: directives

Truncates text with an ellipsis in the middle. Useful when both start and end of the string are relevant, such as long file names with extension.

### Example

```html
<div class="demo" [style.font-size.px]="fontSize" [style.padding.px]="padding" [style.word-break]="wordBreak" [tuiTruncate]="lines" > {{ content }} </div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| <ng-content /> | `string` | content |
| [tuiTruncate] | `number` | visible lines |
| [style.padding.px] | `number` | — |
| [style.font-size.px] | `number` | — |
| [style.word-break] | `string` | — |

### Usage Examples

#### Basic

**Template:**
```html
<div tuiCardMedium class="poster" >
<h2 tuiTitle> Poster @let text = `Look deep into nature, and then you will understand everything better: cinema, concerts, theaters and sports up to 25%`; <span tuiSubtitle tuiTruncate="2" [attr.title]="text" [textContent]="text" ></span>
</h2>
<div tuiBadge class="badge" >
<tui-icon icon="@tui.rss" /> 10% </div>
</div>
<div tuiCardMedium class="fly" >
<div tuiBadge class="badge" >
<tui-icon icon="@tui.timer" /> 50 min </div>
<h2 tuiTitle> Order #31 <span tuiSubtitle tuiTruncate > 8375 Brook Avenue Brooklyn, NY 11206 </span>
</h2>
</div>
<div tuiCardLarge="compact" class="one-line" >
<div tuiCell>
<tui-icon icon="@tui.file" />
<div tuiTruncate>filename_long_long_long_long_long_long_long_long_long_longname.doc</div>
</div>
</div> @let filename = `filename_long_long_long_long_long_long_long_long_long_longname.doc`; <div tuiCardLarge="compact" tuiHintDirection="top-end" class="two-line" [tuiHint]="filename" >
<div tuiCell>
<tui-icon icon="@tui.file" />
<div tuiTruncate="2"> {{ filename }} </div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTruncate} from '@taiga-ui/cdk';
import {TuiCell, TuiHint, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiBadge,
        TuiCard,
        TuiCell,
        TuiHint,
        TuiIcon,
        TuiTitle,
        TuiTruncate,
    ],
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
    gap: 1.2rem;
    flex-wrap: wrap;
    inline-size: 23.25rem;
}

.badge {
    background: #aff218;
    color: #333;
}

[tuiTruncate] {
    inline-size: 100%;
}

[tuiSubtitle][tuiSubtitle] {
    color: #fff;
}

h2 {
    inline-size: 100%;
}

.poster {
    background: #4158d0 linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    padding: 0.75rem;
    color: #fff;
    inline-size: 13.9375rem;
    block-size: 8rem;
}

.fly {
    background: #0093e9 linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    padding: 0.75rem;
    color: #fff;
    inline-size: 8rem;
    block-size: 8rem;
}

.one-line {
    background: #00dbde linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
    inline-size: 100%;
}

.two-line {
    background: #fbab7e linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
    inline-size: 15.9375rem;
}

[tuiCardLarge] [tuiCell],
[tuiCardLarge] tui-icon {
    color: #fff;
}
```
