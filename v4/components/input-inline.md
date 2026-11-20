# InputInline

- **Package**: `KIT`
- **Type**: components

Inline input field

### How to Use (Import)

```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputInline} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputInline,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-input-inline>
  Placeholder
  <input [formControl]="control" />
</tui-input-inline>
```

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<tui-input-inline class="input1">
<input formControlName="testValue1" />
</tui-input-inline>
<tui-input-inline class="input2">
<input formControlName="testValue2" />
</tui-input-inline>
<tui-input-inline class="input3">
<input formControlName="testValue3" />
</tui-input-inline>
<tui-input-inline class="input4" [class.input4_empty]="input4Empty" > (Show placeholder if control is empty) <input formControlName="testValue4" />
</tui-input-inline>
</form>
<button size="m" tuiButton type="button" (click)="onToggleClick()" > {{ toggleContent }} </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl('Hello 1', {updateOn: 'blur'}),
        testValue2: new FormControl('Hello 2'),
        testValue3: new FormControl('Hello 3'),
        testValue4: new FormControl(''),
    });

    protected get toggleContent(): string {
        return this.testForm.disabled ? 'enable (allow editing)' : 'disable';
    }

    protected get input4Empty(): boolean {
        return this.testForm.get('testValue4')!.value === '';
    }

    protected onToggleClick(): void {
        if (this.testForm.disabled) {
            this.testForm.enable();
        } else {
            this.testForm.disable();
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.input1,
.input2,
.input3 {
    margin-inline-end: 0.625rem;
}

.input1 {
    border: 2px solid var(--tui-status-negative);
}

.input2 {
    background: var(--tui-background-accent-opposite);
    padding: 0.625rem;
    color: var(--tui-background-base);
    letter-spacing: 0.625rem;
    font-size: 1.25rem;
}

.input3 {
    font-family: monospace;
    font-weight: bold;
    background: var(--tui-border-normal);
}

.input4 {
    &_empty {
        opacity: 0.3;
    }
}
```

#### Heading

**Template:**
```html
<h2 class="header" [class.header_empty]="!heading" >
<tui-input-inline *ngIf="editing; else text"> Type a heading <input tuiAutoFocus [(ngModel)]="heading" (blur)="onBlur()" (keydown.enter.prevent)="toggle()" />
</tui-input-inline>
<ng-template #text>
<span>{{ heading }}</span>
<button appearance="icon" iconStart="@tui.pencil" size="xs" tuiIconButton type="button" class="tui-space_left-1" (click)="toggle()" > Edit heading </button>
</ng-template>
</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates! </p>
<p> Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem! </p>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgIf, TuiAutoFocus, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected heading = 'Page heading';
    protected editing = false;

    protected toggle(): void {
        this.editing = !this.editing;
    }

    protected onBlur(): void {
        this.editing = false;
        this.saveHeading(this.heading);
    }

    private saveHeading(newHeading: string): void {
        this.alerts.open(newHeading, {label: 'New heading'}).subscribe();
    }
}
```

**LESS:**
```less
.header {
    display: flex;
    block-size: 1.5rem;
    align-items: center;
    white-space: nowrap;
    line-height: 1.5rem;

    &_empty {
        opacity: 0.3;
    }
}
```

#### External update

**Template:**
```html
<tui-input-inline class="input1">
<input [(ngModel)]="count" />
</tui-input-inline>
```

**TypeScript:**
```ts
import {
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    NgZone,
    type OnInit,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';
import {TuiInputInline} from '@taiga-ui/kit';
import {timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputInline],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    private readonly cd = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    protected readonly isE2E = inject(TUI_IS_E2E);

    protected count = '0';

    public ngOnInit(): void {
        if (this.isE2E) {
            return;
        }

        timer(0, 3000)
            .pipe(
                tuiZoneOptimized(this.zone),
                tuiWatch(this.cd),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((value) => {
                this.count = String(value);
            });
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.input1 {
    border: 2px solid var(--tui-status-negative);
    padding: 0.625rem;
    font-size: 1.25rem;
    text-align: center;
}
```

#### Inside text

**Template:**
```html
<ul class="task">
<li> I <tui-input-inline>
<input ngModel="am" />
</tui-input-inline> funny. </li>
<li> He <tui-input-inline [class._empty]="!answer">
<!-- Any text inside tui-input-inline is placeholder-->
<!-- It will be shown fully even for unset width of InputInline --> ___ <input [(ngModel)]="answer" />
</tui-input-inline> funny. </li>
<li> You <tui-input-inline [style.max-width.ch]="15">
<input ngModel="" placeholder="___" spellcheck="false" />
</tui-input-inline> funny. </li>
</ul>
<section class="task">
<p>
<strong>Writing practice</strong>
<br /> Learning to <s>write</s> type underscore and hyphen </p>
<!-- prettier-ignore -->
<div> ___<tui-input-inline>
<input ngModel="" placeholder="___" />
</tui-input-inline>------<tui-input-inline>
<input ngModel="" placeholder="------" />
</tui-input-inline>
</div>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputInline],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected answer = '';
}
```

**LESS:**
```less
.task:first-child input:not(:placeholder-shown) {
    text-decoration: underline;
    text-align: center;
}

tui-input-inline._empty,
tui-input-inline:has(input:placeholder-shown) {
    color: var(--tui-text-tertiary);
}

tui-input-inline:has(input[placeholder]) {
    min-inline-size: 3ch;
}
```
