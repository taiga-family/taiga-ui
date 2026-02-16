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
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {tuiTextareaOptionsProvider} from './textarea.options';

@Component({
    template: '{{ length() }} / {{ limit() }}',
    styles: `
        :host {
            z-index: 1;
            inline-size: 100%;
            order: 2;
            text-align: end;
            pointer-events: none;
            padding-block-end: 0.75rem;
            font: var(--tui-typography-ui-2xs);
            color: var(--tui-text-secondary);
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TuiTextareaCounter {
    public readonly limit = signal(0);
    public readonly length = signal(0);
}

@Component({
    template: `
        <span [textContent]="context.$implicit.slice(0, limit())"></span>
        <span [textContent]="context.$implicit.slice(limit())"></span>
    `,
    styles: `
        span:last-child {
            background: linear-gradient(
                transparent 0.25rem,
                var(--tui-status-negative-pale) 0.25rem,
                var(--tui-status-negative-pale) 100%
            );
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TuiTextareaLimit {
    protected readonly limit = inject(TuiTextareaDirective).limit;
    protected readonly context = injectContext<TuiContext<string>>();
}

const COMPONENT = new PolymorpheusComponent(TuiTextareaLimit);

@Directive({
    selector: '[tuiTextarea][limit]',
    providers: [
        tuiProvide(NG_VALIDATORS, TuiTextareaDirective, true),
        tuiTextareaOptionsProvider({content: COMPONENT}),
    ],
    host: {'[style.border-block-end-width.rem]': 'size() === "l" ? 1.875 : 1.75'},
})
export class TuiTextareaDirective implements Validator, DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly ref = inject(ViewContainerRef).createComponent(TuiTextareaCounter);

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
