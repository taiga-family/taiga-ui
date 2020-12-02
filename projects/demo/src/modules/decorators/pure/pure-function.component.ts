import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-pure-function',
    template: `
        <tui-input [(ngModel)]="text">Введите текст для запуска функции</tui-input>
        <div>Количество вызовов: {{ counter.count }}</div>
        <div *ngIf="show">Результат: {{ calculate(counter, text) | json }}</div>
        <button tuiButton type="button" (click)="show = !show">Показать/скрыть</button>
    `,
    changeDetection,
})
export class ExampleTuiPureFunctionComponent {
    text = '';

    show = false;

    counter = {
        count: 0,
    };

    @tuiPure
    calculate(counter: {count: number}, text: string): {text: string} {
        counter.count++;

        return {
            text,
        };
    }
}
