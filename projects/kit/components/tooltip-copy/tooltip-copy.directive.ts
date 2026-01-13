import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiDirectiveBinding, tuiWithStyles} from '@taiga-ui/cdk/utils';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core/portals';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Directive({
    selector: '[tuiSlot]',
})
export class TuiTooltipCopyContentDirective {
    public readonly tuiSlot = input<string | 'first' | 'second'>('first');
}

@Component({
    template: '',
    styleUrl: './tooltip-copy.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-tooltip-copy'},
})
class Styles {}

@Directive({
    selector: '[tuiTooltipCopy]',
    providers: [
        tuiHintOptionsProvider({direction: 'top'}),
        tuiButtonOptionsProvider(() => {
            const parentAppearance = inject(TuiHintDirective, {self: true}).appearance();

            return {
                size: 's',
                appearance:
                    parentAppearance === 'floating' ? 'flat-grayscale' : undefined,
            };
        }),
    ],
    hostDirectives: [
        {
            directive: TuiHintDirective,
            inputs: ['tuiHintAppearance'],
        },
    ],
})
export class TuiTooltipCopyDirective {
    protected readonly nothing = tuiWithStyles(Styles);
    public readonly tuiTooltipCopy = input<PolymorpheusContent>(null);

    protected readonly content = tuiDirectiveBinding(
        TuiHintDirective,
        'content',
        computed(() => this.tuiTooltipCopy()),
    );

    protected readonly mode = tuiDirectiveBinding(
        TuiHintDirective,
        'mode',
        'tooltip-copy',
    );
}
