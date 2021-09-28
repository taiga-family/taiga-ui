import {addImport} from '../../stackblitz/utils';

export function processTs(fileContent: string): string {
    const withChangeDetectionImport = addImport(
        fileContent,
        'ChangeDetectionStrategy',
        '@angular/core',
    );

    return withChangeDetectionImport
        .replace(/import {encapsulation} from '..\/.*';\n/gm, '')
        .replace(/import {changeDetection} from '..\/.*';\n/gm, '')
        .replace(/\n +encapsulation,/gm, '')
        .replace(
            /changeDetection,/gm,
            'changeDetection: ChangeDetectionStrategy.OnPush,',
        );
}
