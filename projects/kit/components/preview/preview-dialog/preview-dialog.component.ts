import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-preview-dialog',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `,
    styleUrls: ['./preview-dialog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        '(document:keydown.esc)': 'context.$implicit.complete()',
    },
})
export class TuiPreviewDialog {
    protected readonly context = injectContext<TuiPopover<void, void>>();
}
