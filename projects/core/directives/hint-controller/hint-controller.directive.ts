import {Directive, forwardRef, Inject, Input} from '@angular/core';
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';
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
export class TuiHintControllerDirective extends AbstractTuiController {
    @Input(`tuiHintContent`)
    @tuiDefaultProp()
    content: PolymorpheusContent = ``;

    @Input(`tuiHintDirection`)
    @tuiDefaultProp()
    direction: TuiHintOptions['direction'] = this.options.direction;

    @Input(`tuiHintAppearance`)
    @tuiDefaultProp()
    appearance = ``;

    @Input(`tuiHintShowDelay`)
    @tuiDefaultProp()
    showDelay: TuiHintOptions['showDelay'] = this.options.showDelay;

    @Input(`tuiHintHideDelay`)
    @tuiDefaultProp()
    hideDelay: TuiHintOptions['hideDelay'] = this.options.hideDelay;

    constructor(@Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions) {
        super();
    }
}
