import {TuiCountryIsoCode} from '@taiga-ui/i18n/enums';

// prettier-ignore
type MONTHS_ARRAY = [string, string, string, string, string, string, string, string, string, string, string, string];

/**
 * @deprecated use {@link TuiLanguageCore}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LanguageCore {
    months: MONTHS_ARRAY;
    close: string;
    nothingFoundMessage: string;
    defaultErrorMessage: string;
    /**
     * [@string word 'previous', @string word 'next']
     */
    spinTexts: [string, string];
    /**
     * Tuple with short days of week
     * starts with Mon (Monday)
     */
    shortWeekDays: [string, string, string, string, string, string, string];
    countries: Record<TuiCountryIsoCode, string>;
}

export interface TuiLanguageCore extends LanguageCore {}

/**
 * @deprecated use {@link TuiLanguageKit}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LanguageKit {
    cancel: string;
    done: string;
    more: string;
    showAll: string;
    hide: string;
    otherDate: string;
    /**
     * [@string 'choose day', @param 'choose range']
     */
    mobileCalendarTexts: [string, string];
    /**
     * [@string 'from', @param 'to']
     */
    range: [string, string];
    /**
     * [@string 'plus', @param 'minus']
     */
    countTexts: [string, string];
    time: {
        'HH:MM': string;
        'HH:MM:SS': string;
        'HH:MM:SS.MSS': string;
    };
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
    /**
     * [@string 'Show password', @param 'Hide password']
     */
    passwordTexts: [string, string];
    /**
     * [@string 'Copy', @param 'Copied']
     */
    copyTexts: [string, string];
    shortCalendarMonths: MONTHS_ARRAY;
    /**
     * [@string 'Previous page', @param 'Next page']
     */
    pagination: [string, string];
    fileTexts: {
        loadingError: string;
        preview: string;
        remove: string;
    };
    inputFileTexts: {
        defaultLabelSingle: string;
        defaultLabelMultiple: string;
        defaultLinkSingle: string;
        defaultLinkMultiple: string;
        maxSizeRejectionReason: string;
        formatRejectionReason: string;
        drop: string;
        dropMultiple: string;
    };
}

export interface TuiLanguageKit extends LanguageKit {}

/**
 * @deprecated use {@link TuiLanguageCommerce}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LanguageCommerce {
    /**
     * Short and full card number text
     * [@string 'Number', @string 'Card number']
     */
    cardNumber: [string, string];
    /**
     * Short and full expiry text
     * [@string 'Expiry', @string 'Expiry date']
     */
    cardExpiry: [string, string];
}

export interface TuiLanguageCommerce extends LanguageCommerce {}

/**
 * @deprecated use {@link TuiLanguageTable}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LanguageTable {
    /**
     * 'Show/hide' button title
     */
    showHideText: string;
    paginationTexts: {
        pages: string;
        linesPerPage: string;
        of: string;
    };
}

export interface TuiLanguageTable extends LanguageTable {}

/**
 * @deprecated use {@link TuiLanguageEditor}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface LanguageEditor {
    colorSelectorModeNames: [string, string];
    toolbarTools: {
        undo: string;
        redo: string;
        font: string;
        fontStyle: string;
        fontSize: string;
        bold: string;
        italic: string;
        underline: string;
        strikeThrough: string;
        justify: string;
        justifyLeft: string;
        justifyCenter: string;
        justifyRight: string;
        justifyFull: string;
        list: string;
        indent: string;
        outdent: string;
        unorderedList: string;
        orderedList: string;
        quote: string;
        foreColor: string;
        hiliteColor: string;
        backColor: string;
        clear: string;
        link: string;
        attach: string;
        tex: string;
        code: string;
        image: string;
        insertHorizontalRule: string;
        superscript: string;
        subscript: string;
        insertTable: string;
        mergeCells: string;
        splitCells: string;
        rowsColumnsManaging: string;
        cellColor: string;
        setDetails: string;
        removeDetails: string;
    };
    editorTableCommands: [[string, string], [string, string], [string, string]];
    editorCodeOptions: [string, string];
    editorFontOptions: {
        normal: string;
        title: string;
        subtitle: string;
    };
}

export interface TuiLanguageEditor extends LanguageEditor {}

/**
 * @deprecated use {@link TuiLanguagePreview}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export type LanguagePreview = {
    previewTexts: {
        rotate: string;
    };
    zoomTexts: {
        zoomOut: string;
        zoomIn: string;
        reset: string;
    };
};

export interface TuiLanguagePreview extends LanguagePreview {}

/**
 * @deprecated use {@link TuiLanguage}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Language
    extends LanguageCore,
        LanguageKit,
        LanguageCommerce,
        LanguageTable,
        LanguageEditor,
        LanguagePreview {}

export interface TuiLanguage extends Language {}
