import {type TuiCountryIsoCode} from './country-iso-code';
import {type TuiLanguageName} from './language-names';

export interface TuiLanguageCore {
    close: string;
    back: string;
    clear: string;
    countries: Record<TuiCountryIsoCode, string>;
    defaultErrorMessage: string;
    months: readonly [
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
    shortWeekDays: readonly [
        Monday: string,
        Tuesday: string,
        Wednesday: string,
        Thursday: string,
        Friday: string,
        Saturday: string,
        Sunday: string,
    ];
    spinTexts: readonly [previous: string, next: string];
}

export interface TuiLanguageKit {
    cancel: string;
    copyTexts: readonly [copy: string, copied: string];
    countTexts: readonly [plus: string, minus: string];
    dateTexts: {
        ['dd/mm/yyyy']: string;
        ['mm/dd/yyyy']: string;
        ['yyyy/mm/dd']: string;
    };
    digitalInformationUnits: readonly [
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
    mobileCalendarTexts: readonly [
        choose_day: string,
        choose_range: string,
        choose_days: string,
    ];
    more: string;
    multiSelectTexts: {
        all: string;
        none: string;
    };
    otherDate: string;
    pagination: readonly [previous_page: string, next_page: string];
    passwordTexts: readonly [show_password: string, hide_password: string];
    confirm: {
        no: string;
        yes: string;
    };
    range: readonly [from: string, to: string];
    shortCalendarMonths: readonly [
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
        'MM:SS': string;
        'HH:MM': string;
        'HH:MM AA': string;
        'HH:MM:SS': string;
        'HH:MM:SS AA': string;
        'HH:MM:SS.MSS': string;
        'HH:MM:SS.MSS AA': string;
        'HH AA': string;
        HH: string;
        'MM:SS.MSS': string;
        'SS.MSS': string;
    };
    previewTexts: {
        rotate: string;
    };
    zoomTexts: {
        zoomIn: string;
        zoomOut: string;
        reset: string;
    };
    phoneSearch: string;
    dayRangePeriods: readonly [
        forAllTime: string,
        today: string,
        yesterday: string,
        currentWeek: string,
        currentMonth: string,
        previousMonth: string,
    ];
}

export interface TuiLanguageLayout {
    inputSearch: {
        popular: string;
        history: string;
        placeholder: string;
        hotkey: string;
        all: string;
        empty: string;
    };
}

export interface TuiLanguageCommerce {
    cardExpiry: readonly [expiry: string, expiry_date: string];
    cardNumber: readonly [number: string, card_number: string];
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
    extends
        TuiLanguageCore,
        TuiLanguageKit,
        TuiLanguageLayout,
        TuiLanguageCommerce,
        TuiLanguageTable,
        TuiLanguageEditor,
        TuiLanguageMeta {}
