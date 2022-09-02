import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
    Inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {TuiContextWithImplicit, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `label[tuiLabel]`,
    templateUrl: `./label.template.html`,
    styleUrls: [`./label.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': `mode$`,
    },
})
export class TuiLabelComponent<T> {
    @Input()
    @tuiDefaultProp()
    tuiLabel: PolymorpheusContent<TuiContextWithImplicit<T | null>> = ``;

    @Input()
    @tuiDefaultProp()
    context: TuiContextWithImplicit<T | null> = {
        $implicit: null,
    };

    @ContentChild(NgControl)
    @HostBinding(`class._control`)
    readonly control?: NgControl;

    constructor(
        @Inject(TUI_MODE) readonly mode$: TuiInjectionTokenType<typeof TUI_MODE>,
    ) {}
}
