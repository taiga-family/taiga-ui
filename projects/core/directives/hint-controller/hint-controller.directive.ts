import {Directive, forwardRef, Inject, Input} from '@angular/core';
import {TuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_HINT_OPTIONS, TuiHintOptions} from '@taiga-ui/core/directives/hint';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_CONTROLLER} from './hint-controller.token';

// TODO: v2.0 use in Charts
@Directive({
    selector: `[tuiHintContent]`,
    providers: [
        {
            provide: TUI_HINT_CONTROLLER,
            useExisting: forwardRef(() => TuiHintControllerDirective),
        },
    ],
})
export class TuiHintControllerDirective extends TuiController {
    // TODO: 3.0 Remove null
    @Input(`tuiHintContent`)
    @tuiDefaultProp()
    content: PolymorpheusContent | null = null;

    @Input(`tuiHintDirection`)
    @tuiDefaultProp()
    direction: TuiHintOptions['direction'] = this.options.direction;

    @Input(`tuiHintMode`)
    @tuiDefaultProp()
    mode: TuiHintOptions['mode'] = this.options.mode;

    @Input(`tuiHintShowDelay`)
    @tuiDefaultProp()
    showDelay: TuiHintOptions['tuiHintShowDelay'] = this.options.tuiHintShowDelay;

    @Input(`tuiHintHideDelay`)
    @tuiDefaultProp()
    hideDelay: TuiHintOptions['tuiHintHideDelay'] = this.options.tuiHintHideDelay;

    constructor(@Inject(TUI_HINT_OPTIONS) private readonly options: TuiHintOptions) {
        super();
    }
}
