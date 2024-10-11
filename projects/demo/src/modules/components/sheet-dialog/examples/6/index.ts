import {AsyncPipe, NgForOf, SlicePipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, TuiFilterPipe, type TuiMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiFallbackSrcPipe, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeled, TuiFade} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        SlicePipe,
        NgForOf,
        FormsModule,
        TuiButton,
        TuiSheetDialog,
        TuiAppBar,
        TuiAvatarLabeled,
        TuiAvatar,
        TuiFallbackSrcPipe,
        TuiCell,
        TuiTitle,
        TuiFilterPipe,
        TuiFade,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected search = '';

    protected readonly items = [
        {
            name: 'Grigori Constantinopolsky',
            avatar: 'https://avatars.githubusercontent.com/u/10106368',
            email: 'grigori@gmail.com',
        },
        {
            name: 'Nikolai Rimsky-Korsakov',
            avatar: 'https://avatars.githubusercontent.com/u/11832552',
            email: 'nikolai@gmail.com',
        },
        {
            name: 'Hubert Wolfflegelstainhausenbergedorf',
            avatar: 'https://avatars.githubusercontent.com/u/46284632',
            email: 'hubert@gmail.com',
        },
        {
            name: 'Arkhangelsky Constantine',
            avatar: 'https://avatars.githubusercontent.com/u/35179038',
            email: 'contantine@gmail.com',
        },
        {
            name: 'Zoya Kosmodemyanskaya',
            avatar: 'https://avatars.githubusercontent.com/u/8158578',
            email: 'zoya@gmail.com',
        },
        {
            name: 'Johann Gambolputty',
            avatar: '',
            email: 'johann@gmail.com',
        },
        ...inject<readonly string[]>('Pythons' as any).map((name) => ({
            name,
            avatar: '',
            email: `${name.split(' ')[0]}@gmail.com`,
        })),
    ];

    protected readonly filter: TuiMatcher<[(typeof this.items)[0], string]> = (
        item,
        search,
    ) => TUI_DEFAULT_MATCHER(item.name, search);
}
