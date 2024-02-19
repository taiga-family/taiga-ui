import {TsFileParser} from './ts-file.parser';

export class TsFileComponentParser extends TsFileParser {
    set selector(newSelector: string) {
        this.rawFileContent = this.rawFileContent.replaceAll(
            /(selector:\s['"`])(.*)(['"`])/gi,
            `$1${newSelector}$3`,
        );
    }

    set templateUrl(newUrl: string) {
        this.rawFileContent = this.rawFileContent.replaceAll(
            /(templateUrl:\s['"`])(.*)(['"`])/gi,
            `$1${newUrl}$3`,
        );
    }

    set styleUrls(newUrls: string[] | readonly string[]) {
        this.rawFileContent = this.rawFileContent.replaceAll(
            /(styleUrls:\s)(\[.*\])/gi,
            `$1${JSON.stringify(newUrls)}`,
        );
    }
}
