import {TsFileParser} from '../../classes';

export function processTs(fileContent: string): string {
    const tsFileContent = new TsFileParser(fileContent);

    if (tsFileContent.hasNgComponent) {
        tsFileContent.addImport('ChangeDetectionStrategy', '@angular/core');
    }

    return tsFileContent
        .toString()
        .replaceAll(/import \{DemoRoute\} from '.*';\n/g, '')
        .replaceAll(
            'protected readonly routes = DemoRoute;',
            'protected readonly routes: any = {};',
        )
        .replaceAll(/import \{encapsulation\} from '.*';\n/g, '')
        .replaceAll(/import \{changeDetection\} from '.*';\n/g, '')
        .replaceAll(/\n +encapsulation,/g, '')
        .replaceAll(
            'changeDetection,',
            'changeDetection: ChangeDetectionStrategy.OnPush,',
        );
}
