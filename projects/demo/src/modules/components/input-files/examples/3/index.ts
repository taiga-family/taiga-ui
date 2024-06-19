import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiItem} from '@taiga-ui/cdk';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import type {TuiFileLike} from '@taiga-ui/kit';
import {TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFiles, NgForOf, NgIf, TuiItem, TuiLink, TuiIcon],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isE2E = inject(TUI_IS_E2E);

    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly files: readonly TuiFileLike[] = [
        {
            name: 'Loaded.txt',
        },
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
        },
    ];

    protected loadingFile: TuiFileLike | null = {
        name: 'Loading file.txt',
    };

    protected readonly rejectedFiles: readonly TuiFileLike[] = [
        {
            name: 'File with an error.txt',
            content: 'Something went wrong this time',
        },
    ];

    protected readonly fileWithLink: TuiFileLike = {
        name: 'with link.txt',
        src: 'https://tools.ietf.org/html/rfc675',
    };

    protected removedFiles: TuiFileLike[] = [this.loadingFile as unknown as TuiFileLike];
    protected restoredFiles: TuiFileLike[] = [];

    protected removeLoading(): void {
        this.loadingFile = null;
    }

    protected restore(file: TuiFileLike | null): void {
        if (!file) {
            return;
        }

        this.restoredFiles = [...this.restoredFiles, file];
        this.removedFiles = this.removedFiles.filter(
            removed => file.name !== removed?.name,
        );
    }

    protected remove(file: TuiFileLike): void {
        this.removedFiles = [...this.removedFiles, file];
        this.restoredFiles = this.restoredFiles.filter(
            restored => file.name !== restored?.name,
        );
    }
}
