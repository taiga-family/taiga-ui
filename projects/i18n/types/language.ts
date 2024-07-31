import type {TuiCountryIsoCode} from './country-iso-code';
import type {TuiLanguageName} from './language-names';

export interface TuiLanguageCore {
    close: string;
    countries: Record<TuiCountryIsoCode, string>;
    defaultErrorMessage: string;
    months: [
        January: string,
        February: string,
        March: string,
        April: string,
        May: string,
        June: string,
        July: string,
        August: string,
        September: string,
        October: string,
        November: string,
        December: string,
    ];
    nothingFoundMessage: string;
    shortWeekDays: [
        Monday: string,
        Tuesday: string,
        Wednesday: string,
        Thursday: string,
        Friday: string,
        Saturday: string,
        Sunday: string,
    ];
    spinTexts: [previous: string, next: string];
}

export interface TuiLanguageKit {
    cancel: string;
    copyTexts: [copy: string, copied: string];
    countTexts: [plus: string, minus: string];
    dateTexts: {
        DMY: string;
        MDY: string;
        YMD: string;
    };
    digitalInformationUnits: [
        short_byte: string,
        short_kilobyte: string,
        short_megabyte: string,
    ];
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
    mobileCalendarTexts: [choose_day: string, choose_range: string, choose_days: string];
    more: string;
    multiSelectTexts: {
        all: string;
        none: string;
    };
    otherDate: string;
    pagination: [previous_page: string, next_page: string];
    passwordTexts: [show_password: string, hide_password: string];
    confirm: {
        no: string;
        yes: string;
    };
    range: [from: string, to: string];
    shortCalendarMonths: [
        January: string,
        February: string,
        March: string,
        April: string,
        May: string,
        June: string,
        July: string,
        August: string,
        September: string,
        October: string,
        November: string,
        December: string,
    ];
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
    cardExpiry: [expiry: string, expiry_date: string];
    cardNumber: [number: string, card_number: string];
}

export interface TuiLanguageTable {
    paginationTexts: {
        linesPerPage: string;
        of: string;
        pages: string;
    };
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
