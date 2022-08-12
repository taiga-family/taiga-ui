import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk';
import {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {TuiHintService} from '@taiga-ui/core/services';
import {Observable} from 'rxjs';

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
    constructor(
        @Inject(TuiHintService) readonly hints$: Observable<readonly TuiPortalItem[]>,
    ) {}
}
