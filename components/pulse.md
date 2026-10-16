# Pulse

- **Package**: `KIT`
- **Type**: components

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
<div appearance="positive" size="l" tuiAvatar="AI" > @if (step()) { <tui-pulse tuiHintAppearance="floating" class="step-2" [tuiHint]="step2" [tuiHintManual]="step() === 2" >
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
</tui-pulse> } </div>
<button appearance="outline" size="m" tuiButton type="button" (click)="step.set(1)" > Start tutorial @if (step()) { <tui-pulse tuiHintAppearance="accent" tuiHintDirection="end" tuiTheme="dark" class="step-1" [tuiHint]="step1" [tuiHintManual]="step() === 1" >
<ng-template #step1>
<button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" (click)="step.set(0)" > Close </button>
<h3 tuiTitle> Welcome to the tutorial! <div tuiSubtitle>This is the first step.</div>
</h3>
<footer>
<button appearance="secondary-grayscale" tuiButton type="button" (click)="step.set(0)" > Close </button>
<button tuiButton type="button" (click)="step.set(2)" > Next </button>
</footer>
</ng-template>
</tui-pulse> } </button>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiPulse} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiButton, TuiHint, TuiPulse, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
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
    inset-block-start: 20%;
    inset-inline-end: 10%;
}

.step-2 {
    position: absolute;
    inset-block-start: 25%;
    inset-inline-end: 25%;
}

.avatar {
    inline-size: 100%;
    block-size: 12rem;
    object-fit: cover;
    object-position: top;
}
```
