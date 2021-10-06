import {TsFileParser} from './ts-file.parser';

const SELECTOR_REGEXP = /(?<=selector:\s['"])(.*)(?=['"])/gi;
const TEMPLATE_URL_REGEXP = /(?<=templateUrl:\s['"])(.*)(?=['"])/gi;
const STYLE_URLS_REGEXP = /(?<=styleUrls:\s)(\[.*\])/gi;

export class TsFileComponentParser extends TsFileParser {
    set selector(newSelector: string) {
        this.rawFileContent = this.rawFileContent.replace(SELECTOR_REGEXP, newSelector);
    }

    set templateUrl(newUrl: string) {
        this.rawFileContent = this.rawFileContent.replace(TEMPLATE_URL_REGEXP, newUrl);
    }

    set styleUrls(newUrls: string[] | readonly string[]) {
        this.rawFileContent = this.rawFileContent.replace(
            STYLE_URLS_REGEXP,
            JSON.stringify(newUrls),
        );
    }
}
