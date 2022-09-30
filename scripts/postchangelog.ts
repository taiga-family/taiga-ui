import {checkPrettierChanges} from './shared/check-prettier-changes';

(function main(): void {
    /**
     * We need to automatically format changes by prettier
     * after the CHANGELOG is generated before commit and push
     *
     * postbump lifecycle script is executed just
     * before information is written to CHANGELOG.md
     */
    checkPrettierChanges();
})();
