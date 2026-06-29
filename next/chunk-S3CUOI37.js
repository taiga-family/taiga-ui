import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeled} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiAvatarLabeled, TuiCarousel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            label: 'Alex Inkin',
            avatar: 'https://avatars.githubusercontent.com/u/11832552',
        },
        {
            label: 'Vladimir Potekhin',
            avatar: 'https://avatars.githubusercontent.com/u/46284632',
        },
        {
            label: 'Nikita Barsukov',
            avatar: 'https://avatars.githubusercontent.com/u/35179038',
        },
        {
            label: 'Max Ivanov',
            avatar: 'https://avatars.githubusercontent.com/u/12021443',
        },
        {
            label: 'German Panov',
            avatar: 'https://avatars.githubusercontent.com/u/87331898',
        },
    ];
}
`;export{e as default};
