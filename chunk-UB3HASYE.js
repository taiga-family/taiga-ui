import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_NOTIFICATION_OPTIONS,
    TuiButton,
    TuiNotificationService,
    TuiTitle,
} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDemo, TuiDocAppearance, TuiTitle],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly notifications = inject(TuiNotificationService);
    protected readonly options = inject(TUI_NOTIFICATION_OPTIONS);
    protected readonly sizes = ['s', 'm', 'l'] as const;
    protected readonly icons = [this.options.icon, '@tui.clock', ''];
    protected readonly autoCloseVariants = [0, 3000, 5000, 1000, 500];
    protected readonly inlineVariants = ['start', 'center', 'end'] as const;
    protected readonly blockVariants = ['start', 'end'] as const;
    protected readonly examples = [
        'Basic',
        'Options',
        'Interactive',
        'Directive',
        'Service',
    ];

    public size = this.options.size;
    public icon = this.options.icon;
    public closable = true;
    public label = '';
    public autoClose = 0;
    public block = this.blockVariants[0];
    public inline = this.inlineVariants[2];
}
`;export{i as default};
