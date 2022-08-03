import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_IS_MOBILE, tuiDefaultProp, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDriver} from '@taiga-ui/core/abstract';
import {
    TUI_HINT_OPTIONS,
    TuiHintControllerDirective,
    TuiHintOptions,
} from '@taiga-ui/core/directives';
import {MODE_PROVIDER} from '@taiga-ui/core/providers';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {TuiBrightness} from '@taiga-ui/core/types';
import {EMPTY, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-tooltip`,
    templateUrl: `./tooltip.template.html`,
    styleUrls: [`./tooltip.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    inputs: [`content`, `direction`, `appearance`, `showDelay`, `hideDelay`],
})
export class TuiTooltipComponent extends TuiHintControllerDirective {
    private mode: TuiBrightness | null = null;

    @ViewChild(TuiDriver)
    readonly driver$: Observable<boolean> = EMPTY;

    @Input()
    @tuiDefaultProp()
    describeId = ``;

    constructor(
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_HINT_OPTIONS) options: TuiHintOptions,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
    ) {
        super(options);

        mode$.pipe(takeUntil(destroy$)).subscribe(mode => {
            this.mode = mode;
        });
    }

    @HostBinding(`attr.data-appearance`)
    get computedAppearance(): string {
        return this.appearance || this.mode || ``;
    }

    @HostListener(`mousedown`, [`$event`])
    @HostListener(`click`, [`$event`])
    stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
