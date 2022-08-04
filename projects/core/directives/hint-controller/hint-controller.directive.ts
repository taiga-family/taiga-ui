import {Directive, forwardRef, Inject, Input} from '@angular/core';
import {AbstractTuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {TUI_HINT_OPTIONS, TuiHintOptions} from '@taiga-ui/core/directives/hint';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_HINT_CONTROLLER} from './hint-controller.token';

@Directive({
    selector: `[tuiHintContent]`,
    providers: [
        {
            provide: TUI_HINT_CONTROLLER,
            useExisting: forwardRef(() => TuiHintControllerDirective),
        },
    ],
})
export class TuiHintControllerDirective
    extends AbstractTuiController
    implements TuiHintOptions
{
    @Input(`tuiHintContent`)
    @tuiDefaultProp()
    content: PolymorpheusContent<any> = ``;

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

    constructor(@Inject(TUI_HINT_OPTIONS) protected readonly options: TuiHintOptions) {
        super();
    }
}
