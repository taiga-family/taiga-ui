import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiChip, TuiComboBox, TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TuiChevron,
        TuiChip,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected filmDatabase = {
        action: [
            'The Dark Knight',
            'Inception',
            'The Matrix',
            'The Dark Knight Rises',
            'Gladiator',
        ],
        comedy: [
            'The Wolf of Wall Street',
            'Back to the Future',
            'Guardians of the Galaxy',
            'The Truman Show',
            'Deadpool',
        ],
        drama: [
            'The Shawshank Redemption',
            'The Godfather',
            "Schindler's List",
            '12 Angry Men',
        ],
        horror: ['The Silence of the Lambs', 'Alien', 'Psycho', 'The Shining'],
        romance: [
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
