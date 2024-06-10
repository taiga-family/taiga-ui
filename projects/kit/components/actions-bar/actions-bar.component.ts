import {AsyncPipe, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {
    TUI_ANIMATIONS_SPEED,
    TuiButtonDirective,
    TuiDataListComponent,
    tuiFadeIn,
    tuiHeightCollapse,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-actions-bar',
    imports: [
        PolymorpheusModule,
        TuiButtonDirective,
        AsyncPipe,
        NgIf,
        TuiDataListComponent,
    ],
    templateUrl: './actions-bar.template.html',
    styleUrls: ['./actions-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiFadeIn, tuiHeightCollapse],
    host: {
        tuiTheme: 'dark',
    },
})
export class TuiActionsBarComponent {
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public expanded = false;
}
