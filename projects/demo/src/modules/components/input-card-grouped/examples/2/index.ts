import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiInputCardGroupedComponent,
    TuiThumbnailCardComponent,
} from '@taiga-ui/addon-commerce';
import {TuiDataList, TuiSvgComponent, TuiTitleDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiInputCardGroupedComponent,
        TuiDataList,
        TuiSvgComponent,
        NgForOf,
        TuiThumbnailCardComponent,
        TuiTitleDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    protected readonly items = [
        {card: '4321***1234', expire: '12/21', name: 'Salary', bank: 'Tinkoff'},
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

    protected onClick(component: TuiInputCardGroupedComponent): void {
        this.card.get('meta')?.setValue(null);
        this.onEsc(component);
    }

    protected onEsc(component: TuiInputCardGroupedComponent): void {
        component.nativeFocusableElement?.focus();
        component.open = false;
    }
}
