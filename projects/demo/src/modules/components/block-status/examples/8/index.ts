import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';
import {TuiBlockStatus} from '@taiga-ui/layout';

interface Block {
    id: number;
    image: string;
    title: string;
    descriptionText: string;
    buttonText: string;
}

@Component({
    standalone: true,
    imports: [NgForOf, NgIf, TuiBlockStatus, TuiButton, TuiSegmented],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected active = 0;

    public readonly blocks: Block[] = [
        {
            id: 1,
            image: './assets/images/camping.svg',
            title: 'Title',
            descriptionText: 'Description',
            buttonText: 'Button text',
        },
        {
            id: 2,
            image: './assets/images/cancel.svg',
            title: 'Title',
            descriptionText: '',
            buttonText: 'Button text',
        },
        {
            id: 3,
            image: '',
            title: 'Title',
            descriptionText: 'Description',
            buttonText: '',
        },
        {
            id: 4,
            image: './assets/images/going-up.svg',
            title: 'Title',
            descriptionText: '',
            buttonText: '',
        },
        {
            id: 5,
            image: './assets/images/not-found.svg',
            title: 'Title',
            descriptionText: 'Description',
            buttonText: '',
        },
        {
            id: 6,
            image: './assets/images/going-up.svg',
            title: '',
            descriptionText: 'Description',
            buttonText: '',
        },
        {
            id: 7,
            image: './assets/images/going-up.svg',
            title: '',
            descriptionText: '',
            buttonText: 'Button text',
        },
        {
            id: 8,
            image: '',
            title: '',
            descriptionText: 'Description',
            buttonText: '',
        },
    ];
}
