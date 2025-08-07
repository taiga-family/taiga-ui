import {Component} from '@angular/core';
import {TuiDocIcons} from '@demo/components/icons';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiFallbackSrcPipe, TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiToast} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiDemo,
        TuiDocIcons,
        TuiFallbackSrcPipe,
        TuiIcon,
        TuiToast,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = ['Basic', 'Customization'];

    protected content = 'Notification';
}
