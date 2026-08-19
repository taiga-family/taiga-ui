import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiCell, tuiCellOptionsProvider} from '@taiga-ui/core/components/cell';
import {tuiLoaderOptionsProvider} from '@taiga-ui/core/components/loader';
import {tuiButtonXOptionsProvider} from '@taiga-ui/core/directives/button-x';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {TuiAvatar, tuiAvatarOptionsProvider} from '@taiga-ui/kit/components/avatar';
import {TuiSlides} from '@taiga-ui/layout/components/slides';

import {TUI_FILE_OPTIONS_OPTIONS} from './file.options';

@Component({
    selector: '[tuiFile]',
    imports: [TuiAvatar, TuiSlides],
    template: `
        <label>
            <span
                tuiSlides
                tuiAvatar
            >
                <ng-content />
            </span>
            <ng-content select="[tuiTitle]" />
        </label>
        <ng-content select="[tuiButtonX]" />
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './file.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiCellOptionsProvider(() => ({size: inject(TUI_FILE_OPTIONS_OPTIONS).size})),
        tuiAvatarOptionsProvider({round: false, appearance: 'secondary-grayscale'}),
        tuiButtonOptionsProvider({size: 's', appearance: 'action'}),
        tuiButtonXOptionsProvider({size: 'xs', appearance: 'icon'}),
        tuiLoaderOptionsProvider({size: 'm', inheritColor: true}),
        tuiHintOptionsProvider({appearance: 'floating', direction: 'top'}),
    ],
    hostDirectives: [{directive: TuiCell, inputs: ['tuiCell: size']}],
    host: {
        tuiFile: '',
        '[attr.data-orientation]': 'orientation()',
    },
})
export class TuiFile {
    public readonly orientation = input(inject(TUI_FILE_OPTIONS_OPTIONS).orientation);
}
