import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiButtonOptionsProvider, tuiTextfieldOptionsProvider} from '@taiga-ui/core';
import {tuiSwitchOptionsProvider} from '@taiga-ui/kit';
import {tuiBlockOptionsProvider} from '@taiga-ui/kit/components/block';

@Component({
    standalone: true,
    selector: 'search[tuiSearch]',
    template: '<ng-content/>',
    styleUrls: ['./search.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'm'}),
        tuiBlockOptionsProvider({size: 's'}),
        tuiSwitchOptionsProvider({size: 's'}),
        tuiTextfieldOptionsProvider({size: signal('m')}),
    ],
})
export class TuiSearchComponent {}
