import {TsFileParser} from '../../classes';

export function processTs(fileContent: string): string {
    const tsFileContent = new TsFileParser(fileContent);

    tsFileContent.addImport('ChangeDetectionStrategy', '@angular/core');

    return tsFileContent
        .toString()
        .replace(/import {encapsulation} from '..\/.*';\n/gm, '')
        .replace(/import {changeDetection} from '..\/.*';\n/gm, '')
        .replace(/\n +encapsulation,/gm, '')
        .replace(
            /changeDetection,/gm,
            'changeDetection: ChangeDetectionStrategy.OnPush,',
        );
}
