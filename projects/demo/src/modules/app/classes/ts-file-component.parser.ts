import {TsFileParser} from './ts-file.parser';

export class TsFileComponentParser extends TsFileParser {
    public set selector(newSelector: string) {
        this.rawFileContent = this.rawFileContent.includes('selector')
            ? this.rawFileContent.replaceAll(
                  /(selector:\s['"`])(.*)(['"`])/gi,
                  `$1${newSelector}$3`,
              )
            : this.rawFileContent.replace(
                  /(@Component\(\{)/,
                  `$1\n\tselector: '${newSelector}',`,
              );
    }

    public set templateUrl(newUrl: string) {
        this.rawFileContent = this.rawFileContent.replaceAll(
            /(templateUrl:\s['"`])(.*)(['"`])/gi,
            `$1${newUrl}$3`,
        );
    }

    public set styleUrls(newUrls: string[] | readonly string[]) {
        this.rawFileContent = this.rawFileContent.replaceAll(
            /(styleUrls:\s)(\[.*\])/gi,
            `$1${JSON.stringify(newUrls)}`,
        );
    }

    public set defaultExport(enabled: boolean) {
        this.rawFileContent = enabled
            ? this.rawFileContent.replaceAll('export class', 'export default class')
            : this.rawFileContent.replaceAll('export default class', 'export class');
    }
}
