import type {DoCheck, Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    HostListener,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_IS_MOBILE, tuiDirectiveBinding, tuiWatch, tuiWithStyles} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TUI_APPEARANCE_OPTIONS,
    TuiAppearance,
} from '@taiga-ui/core/directives/appearance';
import {
    TUI_HINT_OPTIONS,
    TuiHintDescribeDirective,
    TuiHintDirective,
    TuiHintHoverDirective,
} from '@taiga-ui/core/directives/hint';
import type {TuiInteractiveState} from '@taiga-ui/core/types';
import {map} from 'rxjs';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./tooltip.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-tooltip',
    },
})
class TuiTooltipStyles {}

@Directive({
    standalone: true,
    selector: 'tui-icon[tuiTooltip]',
    providers: [
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'icon'},
        },
    ],
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearance: appearance'],
        },
        {
            directive: TuiHintDescribeDirective,
            inputs: ['tuiHintDescribe'],
        },
        {
            directive: TuiHintDirective,
            inputs: ['tuiHint: tuiTooltip', 'tuiHintAppearance', 'tuiHintContext'],
        },
    ],
    host: {tuiTooltip: ''},
})
export class TuiTooltip implements DoCheck {
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly describe = inject(TuiHintDescribeDirective);
    private readonly driver = inject(TuiHintHoverDirective);

    protected readonly nothing = tuiWithStyles(TuiTooltipStyles);
    protected readonly state = bindAppearanceState();

    constructor() {
        inject(TuiIcon).icon = inject(TuiIcon).icon || inject(TUI_HINT_OPTIONS).icon;
    }

    public ngDoCheck(): void {
        if (this.textfield?.id) {
            this.describe.tuiHintDescribe = this.textfield.id;
        }
    }

    @HostListener('mousedown', ['$event'])
    protected stopOnMobile(event: MouseEvent): void {
        if (this.isMobile) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.driver.toggle();
    }
}

function bindAppearanceState(): Signal<TuiInteractiveState | null> {
    return tuiDirectiveBinding(
        TuiAppearance,
        'tuiAppearanceState',
        toSignal(
            inject(TuiHintHoverDirective).pipe(
                map(hover => (hover ? 'hover' : null)),
                tuiWatch(inject(ChangeDetectorRef)),
            ),
            {initialValue: null},
        ),
    );
}
