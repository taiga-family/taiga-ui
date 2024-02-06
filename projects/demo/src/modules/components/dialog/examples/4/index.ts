import {Component, Inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiDialogService, TuiDropdownService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-dialog-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent4 {
    filters = false;

    scale = 1;

    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(TuiDropdownService) private readonly dropdowns: TuiDropdownService,
    ) {}

    get transform(): string {
        return `scale(${this.scale})`;
    }

    get width(): string {
        return `calc((100% + 4rem) * ${1 / this.scale})`;
    }

    onElastic(value: number): void {
        this.scale = tuiClamp(value, 0.5, 1);
    }

    onFilterClick(): void {
        this.filters = true;
        this.dialogs.open('Dialog with filters').subscribe({
            complete: () => {
                this.filters = false;
            },
        });
    }

    showDialog(
        content: PolymorpheusContent,
        button: TemplateRef<Record<string, unknown>>,
    ): void {
        const templateRef = this.dropdowns.addTemplate(button);

        this.dialogs.open(content).subscribe({
            complete: () => {
                this.dropdowns.removeTemplate(templateRef);
            },
        });
    }
}
