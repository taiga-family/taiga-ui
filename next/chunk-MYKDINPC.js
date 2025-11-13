import"./chunk-42JZD6NG.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAutoFocus, tuiAutoFocusOptionsProvider} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {type TuiDialogContext} from '@taiga-ui/legacy';
import {injectContext} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiAutoFocus, TuiTextfield],
    templateUrl: './search-dialog-example.template.html',
    styleUrl: './search-dialog-example.component.less',
    changeDetection,
    providers: [tuiAutoFocusOptionsProvider({preventScroll: true})],
})
export class SearchDialogExample {
    private readonly context = injectContext<TuiDialogContext<boolean>>();

    protected close(): void {
        this.context.completeWith(false);
    }
}
`;export{o as default};
