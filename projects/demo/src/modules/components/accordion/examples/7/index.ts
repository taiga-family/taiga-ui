import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/experimental';

interface Item {
    readonly title: string;
    readonly content: string;
    readonly details: string;
}

@Component({
    standalone: true,
    imports: [NgForOf, TuiAccordion, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly items: readonly Item[] = [
        {
            title: 'Taiga UI cdk',
            content:
                'Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities',
            details:
                'Framework-agnostic utilities: directives, pipes, observables and DI tokens shared across all Taiga UI packages.',
        },
        {
            title: 'Taiga UI core',
            content:
                'Basic elements needed to develop components, directives and more using Taiga UI design system',
            details:
                'Design tokens, theming and the foundational building blocks every other Taiga UI package relies on.',
        },
        {
            title: 'Taiga UI kit',
            content:
                'The main set of components used to build Taiga UI based Angular applications',
            details:
                'Ready-to-use high level components: accordion, calendar, input masks and much more.',
        },
    ];

    protected showDetails(item: Item): void {
        this.dialogs.open(item.details, {label: item.title, size: 's'}).subscribe();
    }
}
