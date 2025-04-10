import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    INJECTOR,
    Injector,
    Input,
    signal,
    ViewContainerRef,
} from '@angular/core';
import type {AbstractControl, ValidationErrors, Validator} from '@angular/forms';
import {NG_VALIDATORS, Validators} from '@angular/forms';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldComponent,
} from '@taiga-ui/core/components/textfield';
import {TuiTextarea} from '@taiga-ui/kit/components/textarea';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

const LIMIT = tuiCreateToken(signal(0));

@Component({
    standalone: true,
    template: `
        <span [textContent]="context.$implicit.slice(0, limit())"></span>
        <span
            [style.background]="background"
            [textContent]="context.$implicit.slice(limit())"
        ></span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextareaLimitComponent {
    protected readonly limit = inject(TuiTextareaLimit).limit;
    protected readonly context = injectContext<TuiContext<string>>();
    protected readonly background =
        'linear-gradient(transparent 0.125rem, var(--tui-status-negative-pale) 0.125rem, var(--tui-status-negative-pale) calc(100% - 0.125rem), transparent calc(100% - 0.125rem))';
}

@Component({
    standalone: true,
    template: '{{ length() }} / {{ limit() }}',
    styleUrls: ['./textarea-limit.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextareaCounterComponent implements DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent);

    protected readonly limit = inject(LIMIT);
    protected readonly length = signal(0);

    public ngDoCheck(): void {
        this.length.set(this.textfield.input?.nativeElement.value.length || 0);
    }
}

const COMPONENT = new PolymorpheusComponent(TuiTextareaLimitComponent);

@Directive({
    standalone: true,
    selector: '[tuiTextarea][limit]',
    providers: [tuiProvide(NG_VALIDATORS, TuiTextareaLimit, true)],
    host: {
        '[style.border-block-end-width.rem]': 'size() === "l" ? 1.875 : 1.75',
    },
})
export class TuiTextareaLimit implements Validator {
    public readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    public readonly limit = signal(0);

    constructor() {
        const injector = Injector.create({
            parent: inject(INJECTOR),
            providers: [{provide: LIMIT, useValue: this.limit}],
        });

        inject(TuiTextarea).content = COMPONENT;
        inject(ViewContainerRef)
            .createComponent(TuiTextareaCounterComponent, {injector})
            .changeDetectorRef.detectChanges();
    }

    // TODO: Use signal inputs in v5
    @Input('limit')
    public set limitSetter(limit: number) {
        this.limit.set(limit);
    }

    public validate(control: AbstractControl): ValidationErrors | null {
        return Validators.maxLength(this.limit())(control);
    }
}
