import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiLink, TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    selector: 'news',
    imports: [TuiLink, TuiNotification, TuiTitle],
    template: `
        <div
            size="s"
            tuiNotification
        >
            <div tuiTitle>
                Taiga UI 5.0 is out!
                <div tuiSubtitle>
                    See
                    <a
                        href="https://dev.to/angular/whats-new-in-taiga-ui-v5-a-modern-angular-ui-kit-7lm"
                        rel="noreferrer noopener"
                        target="_blank"
                        tuiLink
                    >
                        what's new
                    </a>
                </div>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class News {}
