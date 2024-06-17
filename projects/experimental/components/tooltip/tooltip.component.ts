import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {TUI_PLATFORM, tuiIsString} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiHintHoverDirective,
    TuiHintOptionsDirective,
    TuiTextfieldComponent,
} from '@taiga-ui/core';

import {TUI_TOOLTIP_OPTIONS} from './tooltip.options';

// TODO: Turn into a directive with hint as hostDirective in 4.0

@Component({
    selector: 'tui-tooltip',
    templateUrl: './tooltip.template.html',
    styleUrls: ['./tooltip.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['content', 'direction', 'appearance', 'showDelay', 'hideDelay'],
})
export class TuiTooltipComponent<C = any> extends TuiHintOptionsDirective {
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly platform = inject(TUI_PLATFORM);

    @ViewChild(TuiHintHoverDirective)
    protected readonly driver$?: TuiHintHoverDirective;

    protected readonly tooltipOptions = inject(TUI_TOOLTIP_OPTIONS);
    protected readonly iconAppearance = inject(TuiAppearance, {optional: true});

    @Input()
    public describeId = '';

    @Input()
    public context?: C;

    protected get id(): string {
        return this.describeId || this.textfield?.input.id || '';
    }

    protected get computedAppearance(): string {
        return this.appearance;
    }

    protected get tooltipIcon(): string {
        const {icons} = this.tooltipOptions;

        return tuiIsString(icons) ? icons : icons[this.platform];
    }

    @HostListener('mousedown', ['$event'])
    protected stopOnMobile(event: MouseEvent): void {
        if (this.platform !== 'web') {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver$?.toggle();
    }
}
