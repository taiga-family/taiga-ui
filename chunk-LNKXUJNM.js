import"./chunk-HU6DUUP4.js";var t=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    selector: 'child',
    imports: [TuiFade, TuiScrollbar],
    template: \`
        <tui-scrollbar>
            <div tuiFade="vertical">
                @for (
                    item of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                    track $index
                ) {
                    <div [style.padding]="'1rem'">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium tempore sapiente nostrum, nulla autem, iste amet
                        ratione incidunt, quam obcaecati ipsa reiciendis modi quibusdam
                        at. Neque culpa excepturi repellat natus!
                    </div>
                }
            </div>
        </tui-scrollbar>
    \`,
    styles: \`
        :host {
            display: block;
            margin: 1.125rem;
        }

        tui-scrollbar {
            inline-size: 30rem;
            block-size: 30rem;
            outline: 1px solid;
        }
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiScrollbarOptionsProvider({mode: 'hover'})],
})
export class Child {}

@Component({
    imports: [Child, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiScrollbarOptionsProvider({mode: 'always'})],
})
export default class Parent {}
`;export{t as default};
