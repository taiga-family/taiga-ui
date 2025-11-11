import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
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
    styleUrl: './preview-dialog.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        '(document:keydown.esc.prevent)': 'context.$implicit.complete()',
    },
})
export class TuiPreviewDialog {
    protected readonly context = injectContext<TuiPortalContext<void>>();
}
