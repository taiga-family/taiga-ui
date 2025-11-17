import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCard, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiAvatar, TuiCard, TuiCell, TuiTitle],
    template: `
        <div
            tuiAppearance="floating"
            tuiCardLarge
            tuiCell
        >
            <tui-avatar src="assets/images/avatar.jpg" />
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
