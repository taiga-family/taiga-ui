# InputInline

- **Package**: `KIT`
- **Type**: components

Inline input field

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="form">
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
    imports: [ReactiveFormsModule, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({
        testValue1: new FormControl('Hello 1'),
        testValue2: new FormControl('Hello 2'),
        testValue3: new FormControl('Hello 3'),
        testValue4: new FormControl(''),
    });

    protected get toggleContent(): string {
        return this.form.disabled ? 'enable (allow editing)' : 'disable';
    }

    protected get input4Empty(): boolean {
        return this.form.get('testValue4')!.value === '';
    }

    protected onToggleClick(): void {
        if (this.form.disabled) {
            this.form.enable();
        } else {
            this.form.disable();
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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
<form (ngSubmit)="save()">
<h4> @if (editing()) { <tui-input-inline>
<span>Type a heading</span>
<input name="heading" tuiAutoFocus [ngModelOptions]="{updateOn: 'submit'}" [(ngModel)]="heading" (blur)="editing.set(false)" (keydown.esc.prevent)="editing.set(false)" />
</tui-input-inline>
<button appearance="action" iconStart="@tui.check" size="xs" tuiIconButton type="submit" (pointerdown.prevent)="(0)" > Save </button> } @else { {{ heading() }} <button appearance="icon" iconStart="@tui.pencil" size="xs" tuiIconButton type="button" (click)="editing.set(true)" > Edit heading </button> } </h4>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates! </p>
<p> Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem! </p>
</form>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly heading = signal('Page heading');
    protected readonly editing = signal(false);

    protected save(): void {
        this.editing.set(false);
        this.alerts.open(this.heading, {label: 'New heading'}).subscribe();
    }
}
```

**LESS:**
```less
h4 {
    display: flex;
    block-size: 2rem;
    align-items: center;
    white-space: nowrap;
    font: var(--tui-typography-heading-h5);
    line-height: 2rem;
    gap: 0.25rem;
    margin: 0;
}

span {
    color: var(--tui-text-tertiary);
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
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk';
import {TuiInputInline} from '@taiga-ui/kit';
import {timer} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    private readonly cd = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);

    protected readonly isE2E = inject(WA_IS_E2E);
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
@import '@taiga-ui/styles/utils';

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
    imports: [FormsModule, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
