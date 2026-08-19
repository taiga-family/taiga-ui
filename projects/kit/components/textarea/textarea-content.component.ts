import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {
    TUI_SCROLL_REF,
    TuiScrollControls,
    TuiScrollRef,
} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiTextareaComponent} from './textarea.component';

@Component({
    selector: 'tui-textarea-content',
    imports: [PolymorpheusOutlet, TuiScrollControls],
    templateUrl: './textarea-content.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './textarea.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
        {
            provide: TUI_SCROLL_REF,
            useFactory: () => new ElementRef(inject(TuiTextareaComponent).el),
        },
    ],
    hostDirectives: [TuiScrollRef],
    host: {
        'data-tui-version': TUI_VERSION,
        '[style.max-height.em]': '1.25 * host.max()',
        '[style.min-height.em]': '1.25 * host.min()',
    },
})
export class TuiTextareaContent {
    protected readonly host = inject(TuiTextareaComponent);
    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
