import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    type DoCheck,
    inject,
    input,
    signal,
    ViewContainerRef,
} from '@angular/core';
import {
    type AbstractControl,
    NG_VALIDATORS,
    type ValidationErrors,
    type Validator,
    Validators,
} from '@angular/forms';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {tuiTextareaOptionsProvider} from './textarea.options';

@Component({
    template: `
        <span [textContent]="context.$implicit.slice(0, limit())"></span>
        <span
            style="background: linear-gradient(transparent 0.25rem, var(--tui-status-negative-pale) 0.25rem, var(--tui-status-negative-pale) 100%)"
            [textContent]="context.$implicit.slice(limit())"
        ></span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextareaLimitComponent {
    protected readonly limit = inject(TuiTextareaLimit).limit;
    protected readonly context = injectContext<TuiContext<string>>();
}

@Component({
    template: '{{ length() }} / {{ limit() }}',
    styleUrl: './textarea-limit.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextareaCounterComponent {
    public readonly limit = signal(0);
    public readonly length = signal(0);
}

const COMPONENT = new PolymorpheusComponent(TuiTextareaLimitComponent);

@Directive({
    selector: '[tuiTextarea][limit]',
    providers: [
        tuiProvide(NG_VALIDATORS, TuiTextareaLimit, true),
        tuiTextareaOptionsProvider({content: COMPONENT}),
    ],
    host: {
        '[style.border-block-end-width.rem]': 'size() === "l" ? 1.875 : 1.75',
    },
})
export class TuiTextareaLimit implements Validator, DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly ref = inject(ViewContainerRef).createComponent(
        TuiTextareaCounterComponent,
    );

    public readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    public readonly limit = input(0);

    public ngDoCheck(): void {
        this.ref.instance.length.set(this.textfield.value().length);
        this.ref.instance.limit.set(this.limit());
    }

    public validate(control: AbstractControl): ValidationErrors | null {
        return Validators.maxLength(this.limit())(control);
    }
}
