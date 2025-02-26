import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiFade} from '@taiga-ui/kit/directives/fade';

@Component({
    standalone: true,
    selector: 'tui-avatar-labeled',
    imports: [NgForOf, NgIf, TuiFade],
    template: `
        <ng-content />
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
    styleUrls: ['./avatar-labeled.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarLabeled {
    @Input()
    public label = '';

    @tuiPure
    protected split(label: string): readonly string[] {
        return label.split(' ');
    }
}
