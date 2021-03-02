import {Directive, forwardRef, Input} from '@angular/core';
import {TuiController, tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiHintMode} from '@taiga-ui/core/enums';
import {TuiDirection} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TUI_HINT_CONTROLLER} from './hint-controller.token';

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
    @Input('tuiHintContent')
    @tuiDefaultProp()
    content: PolymorpheusContent | null = null;

    @Input('tuiHintDirection')
    @tuiDefaultProp()
    direction: TuiDirection = 'bottom-left';

    @Input('tuiHintMode')
    @tuiDefaultProp()
    mode: TuiHintMode | null = null;
}
