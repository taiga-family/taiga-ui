import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-preview-dialog',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './preview-dialog.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        'data-tui-version': TUI_VERSION,
        '(document:keydown.esc.prevent)': 'context.$implicit.complete()',
    },
})
export class TuiPreviewDialog {
    protected readonly context = injectContext<TuiPortalContext<void>>();
}
