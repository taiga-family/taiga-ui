import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_IS_MOBILE, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiHintHoverDirective, TuiHintOptionsDirective} from '@taiga-ui/core/directives';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import type {TuiBrightness} from '@taiga-ui/core/types';
import {takeUntil} from 'rxjs';

@Component({
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private mode: TuiBrightness | null = null;

    @Input()
    public describeId = '';

    @Input()
    public context?: C;

    @ViewChild(TuiHintHoverDirective)
    protected readonly driver$?: TuiHintHoverDirective;

    constructor() {
        super();

        inject(TUI_MODE)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(mode => {
                this.mode = mode;
            });
    }

    @HostBinding('attr.data-appearance')
    protected get computedAppearance(): string {
        return this.appearance || this.mode || '';
    }

    @HostListener('mousedown', ['$event'])
    protected stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver$?.toggle();
    }
}
