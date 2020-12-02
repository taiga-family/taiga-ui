import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {TuiHintService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';
import {skip, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-hints-host',
    templateUrl: './hints-host.template.html',
    styleUrls: ['./hints-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn],
    providers: [TuiDestroyService],
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHintsHostComponent {
    /**
     * @awful TODO: remove hints variable
     * and use hints$ after resolving issue with Change Detection
     */
    hints: ReadonlyArray<AbstractTuiHint> = [];

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) hints$: TuiHintService,
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        hints$.pipe(skip(1), takeUntil(destroy$)).subscribe(hints => {
            this.hints = hints;
            this.changeDetectorRef.detectChanges();
        });
    }

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    onHovered(hovered: boolean, directive: AbstractTuiHint) {
        if (directive instanceof TuiHintDirective) {
            directive.componentHovered$.next(hovered);
        }
    }
}
