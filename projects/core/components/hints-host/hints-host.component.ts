import {AnimationOptions} from '@angular/animations';
import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {TuiHintService} from '@taiga-ui/core/services';
import {TUI_ANIMATION_OPTIONS} from '@taiga-ui/core/tokens';
import {debounceTime} from 'rxjs/operators';

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

    // Debounce is needed because hints get removed in ngOnDestroy
    // which causes ExpressionChanged because it's a lifecycle hook
    readonly hints$ = this.service.pipe(debounceTime(0));

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) private readonly service: TuiHintService,
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
