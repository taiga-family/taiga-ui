import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {type TuiSizeS} from '@taiga-ui/core/types';

@Component({
    selector: 'tui-action-bar',
    imports: [TuiExpand],
    templateUrl: './action-bar.template.html',
    styleUrls: ['./action-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiLinkOptionsProvider({appearance: 'action-grayscale', pseudo: true}),
        tuiButtonOptionsProvider(() => ({
            appearance: 'secondary-grayscale',
            size: inject(TuiActionBar).size(),
        })),
    ],
    hostDirectives: [TuiAnimated],
    host: {
        tuiTheme: 'dark',
        '[attr.data-size]': 'size()',
    },
})
export class TuiActionBar {
    public readonly expanded = input(false);
    public readonly size = input<TuiSizeS>('m');
}
