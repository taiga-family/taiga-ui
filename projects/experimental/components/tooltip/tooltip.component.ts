import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_PLATFORM, TuiDestroyService, tuiIsString} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiAppearanceDirective,
    TuiBrightness,
    TuiHintHoverDirective,
    TuiHintOptionsDirective,
} from '@taiga-ui/core';
import {TuiTextfieldComponent} from '@taiga-ui/experimental/components/textfield';
import {takeUntil} from 'rxjs';

import {TUI_TOOLTIP_OPTIONS} from './tooltip.options';

// TODO: Turn into a directive with hint as hostDirective in 4.0

@Component({
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly platform = inject(TUI_PLATFORM);
    private mode: TuiBrightness | null = null;

    @ViewChild(TuiHintHoverDirective)
    readonly driver$?: TuiHintHoverDirective;

    @Input()
    describeId = '';

    @Input()
    context?: C;

    readonly tooltipOptions = inject(TUI_TOOLTIP_OPTIONS);
    readonly iconAppearance = inject(TuiAppearanceDirective, {optional: true});

    constructor() {
        super();

        inject(TUI_MODE)
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(mode => {
                this.mode = mode;
            });
    }

    get id(): string {
        return this.describeId || this.textfield?.id || '';
    }

    get computedAppearance(): string {
        return this.appearance || this.mode || '';
    }

    get tooltipIcon(): string {
        const {icons} = this.tooltipOptions;

        return tuiIsString(icons) ? icons : icons[this.platform];
    }

    @HostListener('mousedown', ['$event'])
    stopOnMobile(event: MouseEvent): void {
        if (this.platform !== 'web') {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver$?.toggle();
    }
}
