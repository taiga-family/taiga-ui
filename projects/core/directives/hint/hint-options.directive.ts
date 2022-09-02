import {Directive, forwardRef, Inject, Input, SkipSelf} from '@angular/core';
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_OPTIONS, TuiHintOptions} from './hint-options';

@Directive({
    selector: `[tuiHintContent]`,
    providers: [
        {
            provide: TUI_HINT_OPTIONS,
            useExisting: forwardRef(() => TuiHintOptionsDirective),
        },
    ],
})
export class TuiHintOptionsDirective
    extends AbstractTuiController
    implements TuiHintOptions
{
    @Input(`tuiHintContent`)
    @tuiDefaultProp()
    content: PolymorpheusContent = ``;

    @Input(`tuiHintDirection`)
    @tuiDefaultProp()
    direction = this.options.direction;

    @Input(`tuiHintAppearance`)
    @tuiDefaultProp()
    appearance = this.options.appearance;

    @Input(`tuiHintShowDelay`)
    @tuiDefaultProp()
    showDelay = this.options.showDelay;

    @Input(`tuiHintHideDelay`)
    @tuiDefaultProp()
    hideDelay = this.options.hideDelay;

    icon = this.options.icon;

    constructor(
        @SkipSelf() @Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions,
    ) {
        super();
    }
}
