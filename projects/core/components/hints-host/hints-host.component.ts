import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk';
import type {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import type {Observable} from 'rxjs';

@Component({
    selector: 'tui-hints-host',
    templateUrl: './hints-host.template.html',
    styleUrls: ['./hints-host.style.less'],
    // So that we do not force OnPush on custom hints
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [TUI_PARENT_ANIMATION],
    host: {
        'aria-live': 'polite',
    },
})
export class TuiHintsHostComponent {
    constructor(
        @Inject(TuiHintService) readonly hints$: Observable<readonly TuiPortalItem[]>,
    ) {}
}
