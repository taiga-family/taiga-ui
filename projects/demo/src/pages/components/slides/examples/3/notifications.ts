import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiBlockDetails, TuiTitle],
    template: `
        <div tuiBlockDetails>
            <div tuiAvatar="@tui.bell-off"></div>
            <h2
                tuiTitle
                [style.align-items]="'center'"
            >
                No new notifications
                <div tuiSubtitle>Come back later</div>
            </h2>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
})
export class Notifications {}
