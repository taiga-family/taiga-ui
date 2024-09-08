import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiHintHover, TuiHintOptionsDirective} from '@taiga-ui/core/directives/hint';

/**
 * @deprecated: drop in v5.0 use {@link TuiTooltip}
 * https://taiga-ui.dev/components/tooltip
 */
@Component({
    standalone: false,
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
    host: {
        '[attr.data-appearance]': 'computedAppearance',
        '(mousedown)': 'stopOnMobile($event)',
    },
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    private readonly isMobile = inject(TUI_IS_MOBILE);

    @ViewChild(TuiHintHover)
    protected readonly driver$?: TuiHintHover;

    @Input()
    public describeId = '';

    @Input()
    public context?: C;

    protected get computedAppearance(): string {
        return this.appearance || '';
    }

    protected stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver$?.toggle();
    }
}
