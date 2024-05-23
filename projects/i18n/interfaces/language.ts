import type {TuiCountryIsoCode} from '@taiga-ui/i18n/enums';

import type {TuiLanguageName} from './language-names';

// prettier-ignore
type MONTHS_ARRAY = [string, string, string, string, string, string, string, string, string, string, string, string];

export interface TuiLanguageCore {
    close: string;
    countries: Record<TuiCountryIsoCode, string>;
    defaultErrorMessage: string;
    months: MONTHS_ARRAY;
    nothingFoundMessage: string;
    /**
     * Tuple with short days of week
     * starts with Mon (Monday)
     */
    shortWeekDays: [string, string, string, string, string, string, string];
    /**
     * [@string word 'previous', @string word 'next']
     */
    spinTexts: [string, string];
}

export interface TuiLanguageKit {
    cancel: string;
    /**
     * [@string 'Copy', @param 'Copied']
     */
    copyTexts: [string, string];
    /**
     * [@string 'plus', @param 'minus']
     */
    countTexts: [string, string];
    dateTexts: {
        DMY: string;
        MDY: string;
        YMD: string;
    };
    /**
     * short bytes, kilobytes and megabytes
     * [@string 'B', @param 'KB', @param 'MB']
     */
    digitalInformationUnits: [string, string, string];
    done: string;
    fileTexts: {
        loadingError: string;
        preview: string;
        remove: string;
    };
    hide: string;
    inputFileTexts: {
        defaultLabelMultiple: string;
        defaultLabelSingle: string;
        defaultLinkMultiple: string;
        defaultLinkSingle: string;
        drop: string;
        dropMultiple: string;
        formatRejectionReason: string;
        maxSizeRejectionReason: string;
    };
    /**
     * [@string 'choose day', @param 'choose range', @param 'choose days']
     */
    mobileCalendarTexts: [string, string, string];
    more: string;
    multiSelectTexts: {
        all: string;
        none: string;
    };
    otherDate: string;
    /**
     * [@string 'Previous page', @param 'Next page']
     */
    pagination: [string, string];
    /**
     * [@string 'Show password', @param 'Hide password']
     */
    passwordTexts: [string, string];
    confirm: {
        no: string;
        yes: string;
    };
    /**
     * [@string 'from', @param 'to']
     */
    range: [string, string];
    shortCalendarMonths: MONTHS_ARRAY;
    showAll: string;
    time: {
        'HH:MM': string;
        'HH:MM:SS': string;
        'HH:MM:SS.MSS': string;
    };
    previewTexts: {
        rotate: string;
    };
    zoomTexts: {
        zoomIn: string;
        zoomOut: string;
        reset: string;
    };
}

export interface TuiLanguageCommerce {
    /**
     * Short and full expiry text
     * [@string 'Expiry', @string 'Expiry date']
     */
    cardExpiry: [string, string];
    /**
     * Short and full card number text
     * [@string 'Number', @string 'Card number']
     */
    cardNumber: [string, string];
}

export interface TuiLanguageTable {
    paginationTexts: {
        linesPerPage: string;
        of: string;
        pages: string;
    };
    /**
     * 'Show/hide' button title
     */
    showHideText: string;
}

export interface TuiLanguageEditor {
    colorSelectorModeNames: [string, string];
    editorCodeOptions: [string, string];
    editorEditLink: {
        anchorExample: string;
        urlExample: string;
    };
    editorFontOptions: {
        large: string;
        normal: string;
        small: string;
        subtitle: string;
        title: string;
    };
    editorTableCommands: [[string, string], [string, string], [string, string]];
    toolbarTools: {
        attach: string;
        backColor: string;
        bold: string;
        cellColor: string;
        clear: string;
        code: string;
        font: string;
        fontSize: string;
        fontStyle: string;
        foreColor: string;
        hiliteColor: string;
        hiliteGroup: string;
        image: string;
        indent: string;
        insertAnchor: string;
        insertGroup: string;
        insertHorizontalRule: string;
        insertTable: string;
        italic: string;
        justify: string;
        justifyCenter: string;
        justifyFull: string;
        justifyLeft: string;
        justifyRight: string;
        link: string;
        list: string;
        mergeCells: string;
        orderedList: string;
        outdent: string;
        quote: string;
        redo: string;
        removeDetails: string;
        removeGroup: string;
        rowsColumnsManaging: string;
        setDetails: string;
        splitCells: string;
        strikeThrough: string;
        subscript: string;
        superscript: string;
        tex: string;
        underline: string;
        undo: string;
        unorderedList: string;
    };
}

export interface TuiLanguageMeta {
    name: TuiLanguageName;
}

export interface TuiLanguage
    extends TuiLanguageCore,
        TuiLanguageKit,
        TuiLanguageCommerce,
        TuiLanguageTable,
        TuiLanguageEditor,
        TuiLanguageMeta {}
