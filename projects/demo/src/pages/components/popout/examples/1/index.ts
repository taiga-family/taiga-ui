import {Component, inject, signal, type TemplateRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiPopoutService} from '@taiga-ui/experimental';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiCard, TuiInput],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    private readonly popout = inject(TuiPopoutService);
    protected readonly value = signal('Value');

    protected open(content: TemplateRef<any>): void {
        this.popout
            .open(content, {
                title: 'Page',
                features: {
                    width: 320,
                    height: 100,
                    left: 600,
                    top: 300,
                },
            })
            .subscribe();
    }
}
