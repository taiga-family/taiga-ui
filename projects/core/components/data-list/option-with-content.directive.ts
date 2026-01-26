import {
    createComponent,
    Directive,
    EnvironmentInjector,
    inject,
    INJECTOR,
    ViewContainerRef,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TUI_OPTION_CONTENT} from './option-content.directive';

@Directive()
export class TuiOptionWithContent {
    private readonly vcr = inject(ViewContainerRef);
    private readonly content = inject(TUI_OPTION_CONTENT, {optional: true});
    private readonly ref =
        this.content &&
        createComponent(this.content, {
            environmentInjector: inject(EnvironmentInjector),
            elementInjector: inject(INJECTOR),
            hostElement: tuiInjectElement(),
        });

    constructor() {
        if (this.ref) {
            this.vcr.insert(this.ref.hostView);
            this.ref.changeDetectorRef.detectChanges();
        }
    }
}
