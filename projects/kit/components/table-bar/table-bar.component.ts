import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TuiButtonDirective,
    TuiDataListComponent,
    tuiFadeIn,
    tuiHeightCollapse,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-table-bar',
    imports: [
        PolymorpheusModule,
        TuiButtonDirective,
        AsyncPipe,
        NgIf,
        TuiDataListComponent,
    ],
    templateUrl: './table-bar.template.html',
    styleUrls: ['./table-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiHeightCollapse],
    host: {
        tuiTheme: 'dark',
    },
})
export class TuiTableBarComponent {
    @Input()
    public expanded = false;

    protected readonly context = inject<TuiPopover<void, void>>(POLYMORPHEUS_CONTEXT);
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected close(): void {
        this.context.$implicit.complete();
    }
}
