import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'news',
    imports: [TuiNotification, TuiTitle],
    template: `
        <tui-notification
            appearance="warning"
            size="s"
        >
            <div tuiTitle>
                Taiga UI v4 is nearing EOL
                <div tuiSubtitle>LTS ends on January 1, 2027</div>
            </div>
        </tui-notification>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class News {}
