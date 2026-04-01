import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected data: Array<Record<string, number | string>> = [{id: 1, name: 'name'}];

    protected get columns(): string[] {
        return Object.keys(this.data[0] ?? {});
    }

    protected addColumn(): void {
        this.data = this.data.map((item) => ({
            ...item,
            [\`extra-\${this.columns.length + 1}\`]: \`extra column \${
                this.columns.length + 1
            }\`,
        }));
    }

    protected addRows(): void {
        this.data = [...this.data, {...this.data[0], id: this.data.length + 1}];
    }
}
`;export{a as default};
