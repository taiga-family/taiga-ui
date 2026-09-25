# Push

- **Package**: `KIT`
- **Type**: components

Notifications in style of native browser push

### Example

```html
<tui-push [heading]="heading" [lines]="lines" [timestamp]="timestamp" [type]="type" (close)="close.emitEvent($event)" >
<img alt="" src="assets/images/roy.jpg" />
<tui-icon icon="@tui.settings" /> I've seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. <button tuiButton type="button" > I want more life </button>
<button tuiLink type="button" > Time to die </button>
</tui-push>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [heading] | `string` | heading of the push |
| [type] | `string` | small text near icon, typically, category of the message |
| [lines] | `number` | a number of visible lines |
| [timestamp] | `number | string` | if the number is passed. |
| img | `Image` | image at the top (360×170px) |
| tui-icon | `Icon` | icon in the corner |
| tuiLink | `Link/Button` | single button |
| tuiButton | `Link/Button` | additional button when it requires two |
| ng-content | `Arbitrary` | the rest of the content is that push body. |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (close) | `void` | output for close button clicks. If you do not listen to this output, close button is hidden. |

### Usage Examples

#### Basic

**Template:**
```html
<div class="wrapper">
<tui-push heading="Rachael" type="Replicant" class="push" [timestamp]="1661358075379" (close)="onClose()" >
<tui-icon icon="@tui.settings" /> Do you like our owl? <button tuiButton type="button" > It's artificial? </button>
<button tuiLink type="button" > Nice hooters! </button>
</tui-push>
<tui-push heading="Deckard" type="Human?" class="push" [timestamp]="1661357000000" >
<tui-icon icon="@tui.eye" class="human" /> I've had people walk out on me before, but not when I was being so charming. </tui-push>
</div>
<tui-push heading="Roy" type="Replicant" (close)="onClose()" >
<img alt="" src="assets/images/roy.jpg" />
<tui-icon icon="@tui.settings" /> I’ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. <button tuiLink type="button" > Time to die </button>
</tui-push>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiLink, TuiNotificationService} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiIcon, TuiLink, TuiPush],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alert = inject(TuiNotificationService);

    protected onClose(): void {
        this.alert
            .open('Close button is visible when you subscribe to (close) output')
            .subscribe();
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: block;
}

.wrapper {
    box-shadow: var(--tui-shadow-small);
    inline-size: 22.5rem;
    max-inline-size: 100%;
    border-radius: var(--tui-radius-l);
    margin-block-end: 1rem;
    background: var(--tui-background-elevation-2);
}

.push {
    box-shadow: none;
}

.human {
    color: var(--tui-text-positive);
}
```

#### Service

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show push </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {TuiPushService} from '@taiga-ui/kit';
import {switchMap, take} from 'rxjs';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiNotificationService);

    protected onClick(): void {
        this.push
            .open('This is <strong>heavy</strong>!', {
                heading: 'Great Scott!',
                type: 'Quote',
                icon: '@tui.video',
                buttons: ['Roads?', '1.21 Gigawatts!?!'],
            })
            .pipe(
                take(1),
                switchMap((button) => this.alert.open(button)),
            )
            .subscribe();
    }
}
```

#### Directive

**Template:**
```html
<button tuiButton type="button" (click)="toggle(true)" > Show push </button>
<tui-push *tuiPush="open" heading="Indiana Jones" type="Dr. Henry Walton Jones, Jr." (close)="toggle(false)" >
<tui-icon icon="@tui.message-square" /> I have a bad feeling about this... <button tuiButton type="button" (click)="toggle(false)" > Fortune </button>
<button tuiLink type="button" (click)="toggle(false)" > Glory </button>
</tui-push>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiIcon, TuiLink, TuiPush],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
```
