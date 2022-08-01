import {TsFileParser} from './ts-file.parser';

export class TsFileComponentParser extends TsFileParser {
    set selector(newSelector: string) {
        this.rawFileContent = this.rawFileContent.replace(
            /(selector:\s['"`])(.*)(['"`])/gi,
            `$1${newSelector}$3`,
        );
    }

    set templateUrl(newUrl: string) {
        this.rawFileContent = this.rawFileContent.replace(
            /(templateUrl:\s['"`])(.*)(['"`])/gi,
            `$1${newUrl}$3`,
        );
    }

    set styleUrls(newUrls: string[] | readonly string[]) {
        this.rawFileContent = this.rawFileContent.replace(
            /(styleUrls:\s)(\[.*\])/gi,
            `$1${JSON.stringify(newUrls)}`,
        );
    }
}
