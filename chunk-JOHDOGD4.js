import"./chunk-HU6DUUP4.js";var o=`import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiChevron, TuiChip, TuiComboBox, TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        KeyValuePipe,
        TuiChevron,
        TuiChip,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected filmDatabase = {
        Action: [
            'The Dark Knight',
            'Inception',
            'The Matrix',
            'The Dark Knight Rises',
            'Gladiator',
        ],
        Comedy: [
            'The Wolf of Wall Street',
            'Back to the Future',
            'Guardians of the Galaxy',
            'The Truman Show',
            'Deadpool',
        ],
        Drama: [
            'The Shawshank Redemption',
            'The Godfather',
            "Schindler's List",
            '12 Angry Men',
        ],
        Horror: ['The Silence of the Lambs', 'Alien', 'Psycho', 'The Shining'],
        Romance: [
            'Forrest Gump',
            'Titanic',
            'Good Will Hunting',
            'Eternal Sunshine of the Spotless Mind',
            'Slumdog Millionaire',
        ],
    };

    protected categories: string[] = Object.keys(this.filmDatabase);
    protected filters: Record<string, boolean> = this.categories.reduce(
        (acc, category, i) => ({...acc, [category]: i % 2 === 0}),
        {},
    );

    protected selectedCategory = true;

    protected value: string | null = null;
}
`;export{o as default};
