import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-table-bar-dialog',
    imports: [PolymorpheusModule],
    template: `
        <ng-container *polymorpheusOutlet="context.content; context: context" />
    `,
    styles: [
        `
            :host {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableBarDialogComponent {
    protected readonly context = inject<TuiPopover<void, void>>(POLYMORPHEUS_CONTEXT);
}
