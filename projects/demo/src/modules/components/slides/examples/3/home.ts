import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCard, TuiCell, TuiTitle],
    template: `
        <div
            appearance="floating"
            tuiCardLarge
            tuiCell
        >
            <div tuiAvatar="@tui.user">
                <img
                    alt=""
                    src="./assets/images/avatar.jpg"
                />
            </div>
            <div tuiTitle>
                <div tuiSubtitle>Welcome home</div>
                Alex Inkin
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
})
export class Home {}
