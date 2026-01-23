import {
    createComponent,
    Directive,
    EnvironmentInjector,
    inject,
    INJECTOR,
    input,
    ViewContainerRef,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

import {TUI_DATA_LIST_HOST} from './data-list.tokens';
import {TUI_OPTION_CONTENT} from './option-content.directive';

@Directive({
    selector: 'button[tuiOption][value], a[tuiOption][value], label[tuiOption][value]',
    host: {'(click)': 'onClick()'},
})
export class TuiOptionWithValue<T = unknown> {
    private readonly vcr = inject(ViewContainerRef);
    private readonly host = inject(TUI_DATA_LIST_HOST, {optional: true});
    private readonly content = inject(TUI_OPTION_CONTENT, {optional: true});
    private readonly ref =
        this.content &&
        createComponent(this.content, {
            environmentInjector: inject(EnvironmentInjector),
            elementInjector: inject(INJECTOR),
            hostElement: tuiInjectElement(),
        });

    public readonly disabled = input(false);
    public readonly value = input<T>();

    constructor() {
        if (this.ref) {
            this.vcr.insert(this.ref.hostView);
            this.ref.changeDetectorRef.detectChanges();
        }
    }

    protected onClick(value = this.value()): void {
        if (value !== undefined) {
            this.host?.handleOption?.(value);
        }
    }
}
