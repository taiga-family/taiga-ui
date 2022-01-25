import {Directive, forwardRef, Inject, Input} from '@angular/core';
import {TuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_CONTROLLER} from './hint-controller.token';
import {
    TUI_HINT_CONTROLLER_OPTIONS,
    TuiHintControllerOptions,
} from './hint-controller-options';

// TODO: v2.0 use in Charts
@Directive({
    selector: '[tuiHintContent]',
    providers: [
        {
            provide: TUI_HINT_CONTROLLER,
            useExisting: forwardRef(() => TuiHintControllerDirective),
        },
    ],
})
export class TuiHintControllerDirective extends TuiController {
    // TODO: Remove null in 3.0
    @Input('tuiHintContent')
    @tuiDefaultProp()
    content: PolymorpheusContent | null = null;

    @Input('tuiHintDirection')
    @tuiDefaultProp()
    direction: TuiHintControllerOptions['direction'] = this.options.direction;

    @Input('tuiHintMode')
    @tuiDefaultProp()
    mode: TuiHintControllerOptions['mode'] = this.options.mode;

    @Input('tuiHintShowDelay')
    @tuiDefaultProp()
    showDelay: TuiHintControllerOptions['tuiHintShowDelay'] =
        this.options.tuiHintShowDelay;

    @Input('tuiHintHideDelay')
    @tuiDefaultProp()
    hideDelay: TuiHintControllerOptions['tuiHintHideDelay'] =
        this.options.tuiHintHideDelay;

    constructor(
        @Inject(TUI_HINT_CONTROLLER_OPTIONS)
        private readonly options: TuiHintControllerOptions,
    ) {
        super();
    }
}
