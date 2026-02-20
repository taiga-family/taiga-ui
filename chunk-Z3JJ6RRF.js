import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler, type TuiStringMatcher, TuiTime} from '@taiga-ui/cdk';
import {tuiItemsHandlersProvider} from '@taiga-ui/core';
import {
    tuiCreateTimePeriods,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputTime,
} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiDataListWrapper, TuiFilterByInputPipe, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        /**
         * You can also use input props of \`Textfield\`
         * (they will have more priority):
         * \`\`\`html
         * <tui-textfield
         *     [identityMatcher]="..."
         *     [stringify]="..."
         * />
         * \`\`\`
         */
        tuiItemsHandlersProvider({
            stringify: signal((x: TuiTime) => x.toString('HH:MM')),
            identityMatcher: signal(
                (a: TuiTime | null, b: TuiTime | null) => a?.valueOf() === b?.valueOf(),
            ),
            // disabledItemHandler: signal((x: TuiTime) => x.hours > 18),
        }),
    ],
})
export default class Example {
    protected value: TuiTime | null = null;
    protected items: readonly TuiTime[] = [
        new TuiTime(16, 20),
        new TuiTime(16, 45),
        new TuiTime(17, 0),
        ...tuiCreateTimePeriods(18, 20, [0, 15, 30, 45]),
    ];

    protected readonly disabledItemHandler: TuiBooleanHandler<TuiTime> = (x) =>
        x?.valueOf() === this.items[0]!.valueOf();

    protected readonly matcher: TuiStringMatcher<TuiTime> = (item, query) =>
        item.toString('HH:MM').startsWith(query);
}
`;export{t as default};
