# Pulse

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {TuiPulse} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPulse,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pulse [playing]="value"></tui-pulse>
```

### Usage Examples

#### Basic

**Template:**
```html
<button appearance="outline" tuiButton type="button" (click)="playing = !playing" > Pulse <tui-pulse [playing]="playing" />
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiPulse} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiPulse],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected playing = true;
}
```

#### Popover

**Template:**
```html
<tui-avatar appearance="positive" src="AI" >
<tui-pulse *ngIf="step()" tuiHintAppearance="floating" class="step-2" [tuiHint]="step2" [tuiHintManual]="step() === 2" >
<ng-template #step2>
<button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" (click)="step.set(0)" > Close </button>
<h3 tuiTitle> You can have images! <div tuiSubtitle>Or any content really</div>
</h3>
<img alt="Alex Inkin" src="https://avatars.githubusercontent.com/u/11832552" class="avatar" />
<footer>
<button appearance="secondary-grayscale" tuiButton type="button" (click)="step.set(1)" > Back </button>
<button tuiButton type="button" (click)="step.set(0)" > Got it! </button>
</footer>
</ng-template>
</tui-pulse>
</tui-avatar>
<button appearance="outline" size="m" tuiButton type="button" (click)="step.set(1)" > Start tutorial <tui-pulse *ngIf="step()" tuiHintAppearance="accent" tuiHintDirection="right" tuiTheme="dark" class="step-1" [tuiHint]="step1" [tuiHintManual]="step() === 1" >
<ng-template #step1>
<button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" (click)="step.set(0)" > Close </button>
<h3 tuiTitle> Welcome to the tutorial! <div tuiSubtitle>This is the first step.</div>
</h3>
<footer>
<button appearance="secondary-grayscale" tuiButton type="button" (click)="step.set(0)" > Close </button>
<button tuiButton type="button" (click)="step.set(2)" > Next </button>
</footer>
</ng-template>
</tui-pulse>
</button>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';
import {tuiProvideExperimentalHint} from '@taiga-ui/experimental';
import {TuiAvatar, TuiPulse} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, TuiAvatar, TuiButton, TuiHint, TuiPulse, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiProvideExperimentalHint()],
})
export default class Example {
    protected readonly step = signal(0);
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

tui-pulse {
    color: var(--tui-background-accent-2);
}

.step-1 {
    position: absolute;
    top: 20%;
    right: 10%;
}

.step-2 {
    position: absolute;
    top: 25%;
    right: 25%;
}

.avatar {
    inline-size: 100%;
    block-size: 12rem;
    object-fit: cover;
    object-position: top;
}
```
