# CardMedium

- **Package**: `LAYOUT`
- **Type**: components

A layout component used to create various cards for the interface. Define visual styles of the cards yourself or combine with Surface for visual presets.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiCardMedium} from '@taiga-ui/layout';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiCardMedium,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiCardMedium>
  <tui-avatar
    class="star"
    src="@tui.star"
  ></tui-avatar>

  <h2 tuiTitle>
    Title
    <span tuiSubtitle>Subtitle</span>
  </h2>
</div>
```

### Usage Examples

#### Avatar and text

**Template:**
```html
<div tuiAppearance="neutral" tuiCardMedium >
<tui-avatar src="@tui.star" class="star" />
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div tuiAppearance="neutral" tuiCardMedium >
<h2 tuiTitle [style.margin-top]="'auto'" > Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div tuiAppearance="neutral" tuiCardMedium >
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
    standalone: true,
    imports: [TuiAppearance, TuiAvatar, TuiCardMedium, TuiTitle],
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

.star {
    background: rgb(66, 139, 250);
    color: #fff;
}
```

#### Icon

**Template:**
```html
<div tuiCardMedium tuiSurface="floating" >
<tui-icon icon="@tui.square-plus" class="plus" />
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div tuiCardMedium tuiSurface="floating" >
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
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiCardMedium, TuiIcon, TuiSurface, TuiTitle],
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

.plus {
    background: #428bfa;
    color: #fff;
    border-radius: 0.25rem;
}
```

#### Badge

**Template:**
```html
<div tuiAppearance="neutral" tuiCardMedium >
<tui-badge appearance="custom" class="badge" >
<tui-icon icon="@tui.target" /> 10 % </tui-badge>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div tuiAppearance="neutral" tuiCardMedium >
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<tui-badge class="badge">
<tui-icon icon="@tui.target" /> 10 % </tui-badge>
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
    standalone: true,
    imports: [TuiAppearance, TuiBadge, TuiCardMedium, TuiIcon, TuiTitle],
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

.badge {
    background: #aff218;
    color: #333;
}
```

#### Stacking

**Template:**
```html
<div tuiCardMedium tuiSurface="floating" >
<tui-avatar-stack direction="left">
<tui-avatar *ngFor="let url of urls" size="s" [src]="url | tuiFallbackSrc: '@tui.user' | async" [style.background]="url | tuiAutoColor" />
</tui-avatar-stack>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
<div tuiCardMedium tuiSurface="floating" >
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<tui-avatar-stack direction="left">
<tui-avatar *ngFor="let url of urls" size="s" [src]="url | tuiFallbackSrc: '@tui.user' | async" [style.background]="url | tuiAutoColor" />
</tui-avatar-stack>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiFallbackSrcPipe, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiAvatarStack,
        TuiCardMedium,
        TuiFallbackSrcPipe,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<div tuiCardMedium tuiSurface class="poster" >
<h2 tuiTitle> Poster <span tuiSubtitle>Cinema, concerts, theaters and sports up to 25%</span>
</h2>
<tui-badge class="badge">
<tui-icon icon="@tui.target" /> 10% </tui-badge>
</div>
<div tuiCardMedium tuiSurface class="fly" >
<h2 tuiTitle>Flights</h2>
<tui-badge class="badge">
<tui-icon icon="@tui.target" /> 10% </tui-badge>
</div>
<div tuiCardMedium tuiSurface class="google" >
<h2 tuiTitle> Google <span tuiSubtitle>-2.7%</span>
</h2>
<tui-badge class="money">$3,605.2</tui-badge>
</div>
<div tuiCardMedium tuiSurface class="microsoft" >
<h2 tuiTitle> Microsoft <span tuiSubtitle>-12.44%</span>
</h2>
<tui-badge class="money">$1,095.3</tui-badge>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiCardMedium, TuiIcon, TuiSurface, TuiTitle],
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
    gap: 1.2rem;
    min-inline-size: 40.625rem;
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
    padding: 0.75rem;
    color: #fff;
    inline-size: 13.9375rem;
    block-size: 8rem;

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
    padding: 0.75rem;
    color: #fff;
    inline-size: 8rem;
    block-size: 8rem;

    &::after {
        background: url('/assets/images/fly.svg') bottom right no-repeat;
    }

    &:hover::after {
        transform: scale(1.1);
    }
}

.google,
.microsoft {
    padding: 0.75rem;
    background: var(--tui-background-base-alt);
    block-size: 8rem;
    inline-size: 8rem;

    &:hover::after {
        transform: scale(1.1);
    }
}

.google {
    [tuiSubtitle] {
        color: #f00;
    }

    &::after {
        background: url('/assets/images/google.svg') bottom right no-repeat;
    }
}

.microsoft {
    [tuiSubtitle] {
        color: #00b92d;
    }

    &::after {
        background: url('/assets/images/microsoft.svg') bottom right no-repeat;
    }
}
```

#### Long text

**Template:**
```html
<div tuiAppearance="neutral" tuiCardMedium tuiTitle >
<span tuiFade class="fade" > Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
<span tuiFade="vertical" tuiSubtitle class="fade-vertical" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </span>
</div>
<div tuiAppearance="neutral" tuiCardMedium tuiTitle > Text without fade out when overflow content <div #text tuiHintDirection="top" tuiSubtitle="" class="nowrap" [tuiHint]="text.innerText" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiHint, TuiTitle} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiCardMedium, TuiFade, TuiHint, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
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
<label tuiCardMedium tuiSurface class="card" >
<img alt="google-pay" src="assets/taiga-ui/icons/google-pay.svg" />
<div tuiFade class="cards" >
<tui-thumbnail-card iconStart="@tui.lock" paymentSystem="mastercard" size="m" > 4572 </tui-thumbnail-card>
<tui-thumbnail-card iconStart="@tui.lock" paymentSystem="mir" size="m" class="mir" > 6733 </tui-thumbnail-card>
<tui-thumbnail-card paymentSystem="visa" size="m" class="visa" > 5212 </tui-thumbnail-card>
</div>
<input tuiSurfaceLayer type="radio" class="selected" [value]="0" [(ngModel)]="value" />
<div tuiRipple tuiSurfaceLayer [style.background-color]="'#fff6c7'" ></div>
</label>
<label tuiCardMedium tuiSurface class="card" >
<img alt="apple-pay" src="assets/taiga-ui/icons/apple-pay.svg" />
<div tuiFade class="cards" >
<tui-thumbnail-card paymentSystem="mir" size="m" class="mir" > 2222 </tui-thumbnail-card>
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
import {TuiSurface} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiCardMedium,
        TuiFade,
        TuiRipple,
        TuiSurface,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    gap: 1rem;
}

.card {
    block-size: 6.5rem;
    inline-size: 6.5rem;
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
    inline-size: stretch;
    margin: 0 -0.4375rem;
    padding: 0 0.4375rem;
    overflow: auto;
}
```
