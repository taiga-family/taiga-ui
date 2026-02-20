import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiInputCardGroup, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiDataList, TuiIcon, TuiTextfield, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataList,
        TuiIcon,
        TuiInputCardGroup,
        TuiTextfield,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {card: '4321***1234', expire: '12/21', name: 'Salary', bank: 'Wachovia Bank'},
        {
            card: '8765***5678',
            expire: '03/42',
            cvc: '***',
            name: 'Tips',
            bank: 'Bank of America',
        },
        {card: '4200***9000', name: 'Dogecoins', bank: 'Crypto'},
    ];

    protected readonly card = new FormGroup({meta: new FormControl(this.items[0])});
    protected open = false;
}
`;export{t as default};
