import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDemo, TuiDocDropdown, TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class PageComponent {
    protected positionVariants = ['selection', 'word', 'tag'] as const;

    protected position: 'selection' | 'tag' | 'word' = this.positionVariants[0];
}
`;export{e as default};
