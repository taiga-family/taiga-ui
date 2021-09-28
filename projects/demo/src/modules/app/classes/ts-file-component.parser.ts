import {TsFileParser} from './ts-file.parser';

const CLASS_NAME_REGEXP = /(?<=export class\s)(\w*)/gi;
const SELECTOR_REGEXP = /(?<=selector:\s['"])(.*)(?=['"])/gi;
const TEMPLATE_URL_REGEXP = /(?<=templateUrl:\s['"])(.*)(?=['"])/gi;
const STYLE_URLS_REGEXP = /(?<=styleUrls:\s)(\[.*\])/gi;

export class TsFileComponentParser extends TsFileParser {
    get className(): string {
        const [className] = this.rawFileContent.match(CLASS_NAME_REGEXP) || [''];

        return className;
    }

    set className(newClassName: string) {
        this.rawFileContent = this.rawFileContent.replace(
            CLASS_NAME_REGEXP,
            newClassName,
        );
    }

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
