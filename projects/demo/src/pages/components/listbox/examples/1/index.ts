import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiListbox, TuiListboxOption} from '@taiga-ui/kit';

@Component({
    imports: [TuiListbox, TuiListboxOption],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly single = signal<string | readonly string[] | null>('Angular');
    protected readonly multiple = signal<string | readonly string[] | null>([
        'Angular',
        'React',
    ]);

    protected readonly person = signal<{id: number; name: string} | null>(null);
    protected readonly people = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Sam'},
    ];

    protected readonly samePerson = (
        a: {id: number; name: string},
        b: {id: number; name: string},
    ): boolean => a.id === b.id;
}
