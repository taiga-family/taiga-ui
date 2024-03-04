import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiDialogService, TuiDropdownService} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-dialog-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent4 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly dropdowns = inject(TuiDropdownService);

    protected filters = false;

    protected scale = 1;

    protected get transform(): string {
        return `scale(${this.scale})`;
    }

    protected get width(): string {
        return `calc((100% + 4rem) * ${1 / this.scale})`;
    }

    protected onElastic(value: number): void {
        this.scale = tuiClamp(value, 0.5, 1);
    }

    protected onFilterClick(): void {
        this.filters = true;
        this.dialogs.open('Dialog with filters').subscribe({
            complete: () => {
                this.filters = false;
            },
        });
    }

    protected showDialog(
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
