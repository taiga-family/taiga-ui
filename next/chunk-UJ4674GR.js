import"./chunk-42JZD6NG.js";var i=`import {Component, ElementRef, input, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    TuiAutoFocus,
    TuiFilterPipe,
} from '@taiga-ui/cdk';
import {
    TuiDataList,
    tuiIsEditingKey,
    TuiTextfield,
    TuiTextfieldDirective,
} from '@taiga-ui/core';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

interface Items<T> {
    readonly items: readonly T[];
    readonly name: string;
}

@Component({
    selector: 'custom-list',
    imports: [
        FormsModule,
        TuiAutoFocus,
        TuiDataList,
        TuiFilterPipe,
        TuiMultiSelectModule,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export class CustomListComponent<T> {
    @ViewChild(TuiTextfieldDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    protected value = '';
    protected readonly all = EMPTY_ARRAY;
    protected readonly filter: (item: T, value: string) => boolean = TUI_DEFAULT_MATCHER;

    public readonly items = input<ReadonlyArray<Items<T>>>([]);

    protected onKeyDown(key: string): void {
        if (tuiIsEditingKey(key)) {
            this.input?.nativeElement.focus({preventScroll: true});
        }
    }
}
`;export{i as default};
