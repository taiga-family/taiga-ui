# CardMedium

- **Package**: `LAYOUT`
- **Type**: components

A layout component used to create various cards for the interface. Define visual styles of the cards yourself or combine with Surface for visual presets. If you customize size, make sure to multiply by `--tui-font-scale` variable if you want to accommodate font scaling on mobile OS.

### Usage Examples

#### Avatar and text

**Template:**
```html
<div appearance="neutral" tuiCardMedium >
<div tuiAvatar="@tui.star" class="star" ></div>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div appearance="neutral" tuiCardMedium >
<h2 tuiTitle [style.margin-block-start]="'auto'" > Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div appearance="neutral" tuiCardMedium >
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppearance, TuiAvatar, TuiCardMedium, TuiTitle],
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

.star {
    background: rgb(66, 139, 250);
    color: #fff;
}
```

#### Icon

**Template:**
```html
<div appearance="floating" tuiCardMedium >
<tui-icon icon="@tui.square-plus" class="plus" />
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div appearance="floating" tuiCardMedium >
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<tui-icon icon="@tui.square-plus" class="plus" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppearance, TuiCardMedium, TuiIcon, TuiTitle],
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

.plus {
    background: #428bfa;
    color: #fff;
    border-radius: 0.25rem;
}
```

#### Badge

**Template:**
```html
<div appearance="neutral" tuiCardMedium >
<div appearance="custom" tuiBadge class="badge" >
<tui-icon icon="@tui.target" /> 10 % </div>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div appearance="neutral" tuiCardMedium >
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<div tuiBadge class="badge" >
<tui-icon icon="@tui.target" /> 10 % </div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppearance, TuiBadge, TuiCardMedium, TuiIcon, TuiTitle],
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

.badge {
    background: #aff218;
    color: #333;
}
```

#### Stacking

**Template:**
```html
<div appearance="floating" tuiCardMedium >
<tui-avatar-stack direction="start"> @for (url of urls; track url) { <div size="s" tuiAvatar="@tui.user" [style.background]="url | tuiAutoColor" >
<img alt="" [src]="url" />
</div> } </tui-avatar-stack>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div appearance="floating" tuiCardMedium >
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<tui-avatar-stack direction="start"> @for (url of urls; track url) { <div size="s" tuiAvatar="@tui.user" [style.background]="url | tuiAutoColor" >
<img alt="" [src]="url" />
</div> } </tui-avatar-stack>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiAvatarStack, TuiCardMedium, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly urls = [
        'https://avatars.githubusercontent.com/u/11832552',
        'https://avatars.githubusercontent.com/u/10106368',
        'https://avatars.githubusercontent.com/u/46284632',
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
}
```

#### Customization

**Template:**
```html
<div tuiCardMedium class="poster" >
<h2 tuiTitle> Poster <span tuiSubtitle>Cinema, concerts, theaters and sports up to 25%</span>
</h2>
<div tuiBadge class="badge" >
<tui-icon icon="@tui.target" /> 10% </div>
</div>
<div tuiCardMedium class="fly" >
<h2 tuiTitle>Flights</h2>
<div tuiBadge class="badge" >
<tui-icon icon="@tui.target" /> 10% </div>
</div>
<div tuiCardMedium class="stock" >
<h2 tuiTitle> Google <span tuiSubtitle>-2.7%</span>
</h2>
<div tuiBadge class="money" > $3,605.2 </div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardMedium, TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [TuiBadge, TuiCardMedium, TuiIcon, TuiSurface, TuiTitle],
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    inline-size: min-content;
}

.badge {
    background: #aff218;
    color: #333;
}

.money {
    background: #ffdd2d;
    color: #333;
}

.poster {
    background: rgb(88, 192, 190);
    color: #fff;
    grid-column: span 2;
    inline-size: auto;

    [tuiSubtitle] {
        color: #fff;
    }

    &::after {
        background: url('/assets/images/poster.svg') bottom right no-repeat;
    }

    &:hover::after {
        transform: scale(1.1);
    }
}

.fly {
    background: rgb(101, 174, 234);
    color: #fff;

    &::after {
        background: url('/assets/images/fly.svg') bottom right no-repeat;
    }

    &:hover::after {
        transform: scale(1.1);
    }
}

.stock {
    background: var(--tui-background-base-alt);

    &:hover::after {
        transform: scale(1.1);
    }

    [tuiSubtitle] {
        color: #f00;
    }

    &::after {
        background: url('/assets/images/google.svg') bottom right no-repeat;
    }
}
```

#### Long text

**Template:**
```html
<div appearance="neutral" tuiCardMedium tuiTitle >
<span tuiFade class="fade" > Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
<span tuiFade="vertical" tuiSubtitle class="fade-vertical" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </span>
</div>
<div appearance="neutral" tuiCardMedium tuiTitle > Text without fade out when overflow content <div #text tuiHintDirection="top" tuiSubtitle="" class="nowrap" [tuiHint]="text.innerText" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiTitle} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [TuiCardMedium, TuiFade, TuiHint, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    gap: 1rem;
}

.fade {
    inline-size: 100%;
    block-size: 2rem;
    white-space: nowrap;
    overflow: auto;
}

.fade-vertical {
    block-size: 5rem;
    overflow: auto;
}

.nowrap {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-inline-size: 100%;
}
```

#### Selectable

**Template:**
```html
<label tuiCardMedium class="card" >
<img alt="google-pay" src="assets/taiga-ui/icons/google-pay.svg" />
<div tuiFade class="cards" >
<span iconStart="@tui.lock" paymentSystem="mastercard" size="m" tuiThumbnailCard > 4572 </span>
<span iconStart="@tui.lock" paymentSystem="mir" size="m" tuiThumbnailCard class="mir" > 6733 </span>
<span paymentSystem="visa" size="m" tuiThumbnailCard class="visa" > 5212 </span>
</div>
<input tuiSurfaceLayer type="radio" class="selected" [value]="0" [(ngModel)]="value" />
<div tuiRipple tuiSurfaceLayer [style.background-color]="'#fff6c7'" ></div>
</label>
<label tuiCardMedium class="card" >
<img alt="apple-pay" src="assets/taiga-ui/icons/apple-pay.svg" />
<div tuiFade class="cards" >
<span paymentSystem="mir" size="m" tuiThumbnailCard class="mir" > 2222 </span>
</div>
<input tuiSurfaceLayer type="radio" [value]="1" [(ngModel)]="value" />
<div tuiRipple tuiSurfaceLayer [style.background-color]="'#d5f6df'" ></div>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiCardMedium, TuiFade, TuiRipple, TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    gap: 1rem;
}

.card {
    block-size: calc(6.5rem * var(--tui-font-scale));
    inline-size: calc(6.5rem * var(--tui-font-scale));
}

.mir {
    background: #2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%);
}

.visa {
    background: linear-gradient(45deg, rgba(255, 170, 0, 0.82), #fa0), url('/assets/taiga-ui/icons/star.svg');
}

img {
    inline-size: 1.5rem;
    block-size: 1.5rem;
}

.cards {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    inline-size: 100%;
    margin: 0 -0.4375rem;
    padding: 0 0.4375rem;
    overflow: auto;
}
```
