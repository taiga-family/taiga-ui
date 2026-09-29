import {computed, Directive, inject, input, type OnDestroy} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiOption} from '@taiga-ui/core/components/data-list';

import {TuiListbox} from './listbox.directive';

@Directive({
    selector: 'button[tuiListboxOption]',
    hostDirectives: [{directive: TuiOption, inputs: ['disabled']}],
    host: {
        tabindex: '-1',
        tuiOption: '',
        '[attr.aria-disabled]': 'disabled() || listbox.disabled()',
        '[attr.aria-selected]': 'selected()',
        '(click)': 'listbox.select(this)',
        '(focus)': 'listbox.onOptionFocus(this)',
    },
})
export class TuiListboxOption<T> implements OnDestroy {
    private readonly option = inject(TuiOption);

    protected readonly listbox = inject<TuiListbox<T>>(TuiListbox);
    protected readonly selected = computed(() => this.listbox.isSelected(this));

    public readonly value = input.required<T>();
    public readonly disabled = this.option.disabled;
    public readonly element = tuiInjectElement();

    public focus(): void {
        this.element.focus();
    }

    public ngOnDestroy(): void {
        this.listbox.onOptionDestroy(this);
    }
}
