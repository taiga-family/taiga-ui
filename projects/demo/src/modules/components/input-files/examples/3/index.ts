import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-files-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample3 {
    readonly isE2E = inject(TUI_IS_E2E);

    readonly control = new FormControl<TuiFileLike | null>(null);

    readonly files: readonly TuiFileLike[] = [
        {
            name: 'Loaded.txt',
        },
        {
            name: 'A file with a very very long title to check that it can be cut correctly.txt',
        },
    ];

    loadingFile: TuiFileLike | null = {
        name: 'Loading file.txt',
    };

    readonly rejectedFiles: readonly TuiFileLike[] = [
        {
            name: 'File with an error.txt',
            content: 'Something went wrong this time',
        },
    ];

    readonly fileWithLink: TuiFileLike = {
        name: 'with link.txt',
        src: 'https://tools.ietf.org/html/rfc675',
    };

    removedFiles: TuiFileLike[] = [this.loadingFile as unknown as TuiFileLike];
    restoredFiles: TuiFileLike[] = [];

    removeLoading(): void {
        this.loadingFile = null;
    }

    restore(file: TuiFileLike | null): void {
        if (!file) {
            return;
        }

        this.restoredFiles = [...this.restoredFiles, file];
        this.removedFiles = this.removedFiles.filter(
            removed => file.name !== removed?.name,
        );
    }

    remove(file: TuiFileLike): void {
        this.removedFiles = [...this.removedFiles, file];
        this.restoredFiles = this.restoredFiles.filter(
            restored => file.name !== restored?.name,
        );
    }
}
