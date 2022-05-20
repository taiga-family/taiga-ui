import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiHintBoxComponent} from './hint-box/hint-box.component';

@Component({
    selector: 'tui-hints-host',
    templateUrl: './hints-host.template.html',
    styleUrls: ['./hints-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHintsHostComponent {
    readonly component = new PolymorpheusComponent(TuiHintBoxComponent);

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) readonly hints$: TuiHintService,
    ) {}

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    onHovered(hovered: boolean, directive: AbstractTuiHint): void {
        if (directive instanceof TuiHintDirective) {
            directive.componentHovered$.next(hovered);
        }
    }
}
