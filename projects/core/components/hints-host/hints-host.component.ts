import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {TuiHintService} from '@taiga-ui/core/services';
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-hints-host',
    templateUrl: './hints-host.template.html',
    styleUrls: ['./hints-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHintsHostComponent {
    readonly animation = {
        value: '',
        ...this.options,
    } as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) readonly hints$: TuiHintService,
    ) {}

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    onHovered(hovered: boolean, directive: AbstractTuiHint) {
        if (directive instanceof TuiHintDirective) {
            directive.componentHovered$.next(hovered);
        }
    }
}
