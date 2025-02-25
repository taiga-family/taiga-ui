import {KeyValuePipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [KeyValuePipe, NgForOf, TuiAccordion, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected data: Record<string, string> = {
        'Taiga UI cdk':
            'Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities',
        'Taiga UI core':
            'Basic elements needed to develop components, directives and more using Taiga UI design system',
        'Taiga UI kit':
            'The main set of components used to build Taiga UI based Angular applications',
    };

    protected changeData(): void {
        this.data = {
            [`Title #${uniqueId()}`]: randomSentence(10),
            [`Title #${uniqueId()}`]: randomSentence(50),
        };
    }
}

function uniqueId(): string {
    return (Math.random() + 1).toString(36).slice(7);
}

function randomSentence(n: number): string {
    const words = [
        'The sky',
        'above',
        'the port',
        'was',
        'the color of television',
        'tuned',
        'to',
        'a dead channel',
        '.',
        'All',
        'this happened',
        'more or less',
        '.',
        'I',
        'had',
        'the story',
        'bit by bit',
        'from various people',
        'and',
        'as generally',
        'happens',
        'in such cases',
        'each time',
        'it',
        'was',
        'a different story',
        '.',
        'It',
        'was',
        'a pleasure',
        'to',
        'burn',
    ];

    let sentence = '';

    while (n--) {
        sentence += `${words[Math.floor(Math.random() * words.length)]} `;
    }

    return sentence;
}
