import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk';
import {TuiHint} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiHintBoxComponent} from './hint-box/hint-box.component';

@Component({
    selector: `tui-hints-host`,
    templateUrl: `./hints-host.template.html`,
    styleUrls: [`./hints-host.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
    host: {
        'aria-live': `polite`,
    },
})
export class TuiHintsHostComponent {
    readonly component = new PolymorpheusComponent(TuiHintBoxComponent);

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) readonly hints$: Observable<readonly TuiHint[]>,
    ) {}

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
}
