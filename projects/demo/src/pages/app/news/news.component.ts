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
                Taiga Figma license is out!
                <div tuiSubtitle>
                    See
                    <a
                        href="https://pineoptic.one/products"
                        rel="noreferrer noopener"
                        target="_blank"
                        tuiLink
                    >
                        our products page
                    </a>
                </div>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class News {}
