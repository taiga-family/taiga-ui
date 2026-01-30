import {TsFileParser} from '../../classes';

export function processTs(fileContent: string): string {
    const tsFileContent = new TsFileParser(fileContent);

    if (tsFileContent.hasNgComponent) {
        tsFileContent.addImport('ChangeDetectionStrategy', '@angular/core');
    }

    return tsFileContent
        .toString()
        .replaceAll(/import {DemoRoute} from '.*';\n/gm, '')
        .replaceAll(
            /protected readonly routes = DemoRoute;/gm,
            'protected readonly routes: any = {};',
        )
        .replaceAll(/import {encapsulation} from '.*';\n/gm, '')
        .replaceAll(/import {changeDetection} from '.*';\n/gm, '')
        .replaceAll(/\n +encapsulation,/gm, '')
        .replaceAll(
            /changeDetection,/gm,
            'changeDetection: ChangeDetectionStrategy.OnPush,',
        );
}
