import {TypeToRename} from './types';

export const DEPRECATED_FUNCTIONS: readonly TypeToRename[] = [
    {
        from: 'controlPoint',
        to: 'tuiControlPoint',
        moduleSpecifier: ['@taiga-ui/addon-charts'],
    },
    {
        from: 'describeSector',
        to: 'tuiDescribeSector',
        moduleSpecifier: ['@taiga-ui/addon-charts'],
    },
    {
        from: 'drawCurve',
        to: 'tuiDrawCurve',
        moduleSpecifier: ['@taiga-ui/addon-charts'],
    },
    {
        from: 'drawLine',
        to: 'tuiDrawLine',
        moduleSpecifier: ['@taiga-ui/addon-charts'],
    },
    {
        from: 'draw',
        to: 'tuiDraw',
        moduleSpecifier: ['@taiga-ui/addon-charts'],
    },
    {
        from: 'lineAngle',
        to: 'tuiLineAngle',
        moduleSpecifier: ['@taiga-ui/addon-charts'],
    },
    {
        from: 'formatCurrency',
        to: 'tuiFormatCurrency',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'getCurrencySymbol',
        to: 'tuiGetCurrencySymbol',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'getPaymentSystem',
        to: 'tuiGetPaymentSystem',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isMaestro',
        to: 'tuiIsMaestro',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isMastercard',
        to: 'tuiIsMastercard',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isMir',
        to: 'tuiIsMir',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isElectron',
        to: 'tuiIsElectron',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isVisa',
        to: 'tuiIsVisa',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isCardLengthValid',
        to: 'tuiIsCardLengthValid',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isCardNumberValid',
        to: 'tuiIsCardNumberValid',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'isExpireValid',
        to: 'tuiIsExpireValid',
        moduleSpecifier: ['@taiga-ui/addon-commerce'],
    },
    {
        from: 'tryParseMarkdownCodeBlock',
        to: 'tuiTryParseMarkdownCodeBlock',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'coerceValue',
        to: 'tuiCoerceValue',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'generateRoutes',
        to: 'tuiGenerateRoutes',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'inspectAny',
        to: 'tuiInspectAny',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'rawLoadRecord',
        to: 'tuiRawLoadRecord',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'transliterateKeyboardLayout',
        to: 'tuiTransliterateKeyboardLayout',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'isEmptyParagraph',
        to: 'tuiIsEmptyParagraph',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'getElementPoint',
        to: 'tuiGetElementPoint',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'getGradientData',
        to: 'tuiGetGradientData',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'getMarkRange',
        to: 'tuiGetMarkRange',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'isSelectionIn',
        to: 'tuiIsSelectionIn',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'parseGradient',
        to: 'tuiParseGradient',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'toGradient',
        to: 'tuiToGradient',
        moduleSpecifier: ['@taiga-ui/addon-editor'],
    },
    {
        from: 'defaultSort',
        to: 'tuiDefaultSort',
        moduleSpecifier: ['@taiga-ui/addon-table'],
    },
    {
        from: 'mockCurrentDate',
        to: 'tuiMockCurrentDate',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'restoreRealDate',
        to: 'tuiRestoreRealDate',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'mockDateInside',
        to: 'tuiMockDateInside',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'pendingIfNotMoscowTimeZone',
        to: 'tuiPendingIfNotMoscowTimeZone',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'dragAndDropFrom',
        to: 'tuiDragAndDropFrom',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'focusVisibleObservable',
        to: 'tuiFocusVisibleObservable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'itemsQueryListObservable',
        to: 'tuiItemsQueryListObservable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'mouseDragFinishFrom',
        to: 'tuiMouseDragFinishFrom',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'mustBePresent',
        to: 'tuiMustBePresent',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'pressedObservable',
        to: 'tuiPressedObservable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'preventDefault',
        to: 'tuiPreventDefault',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'stopPropagation',
        to: 'tuiStopPropagation',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'typedFromEvent',
        to: 'tuiTypedFromEvent',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'watch',
        to: 'tuiWatch',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isEdgeOlderThan',
        to: 'tuiIsEdgeOlderThan',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isEdge',
        to: 'tuiIsEdge',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isFirefox',
        to: 'tuiIsFirefox',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isIE',
        to: 'tuiIsIE',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isSafari',
        to: 'tuiIsSafari',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'canScroll',
        to: 'tuiCanScroll',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'containsOrAfter',
        to: 'tuiContainsOrAfter',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getActualTarget',
        to: 'tuiGetActualTarget',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getClipboardDataText',
        to: 'tuiGetClipboardDataText',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getDocumentOrShadowRoot',
        to: 'tuiGetDocumentOrShadowRoot',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getElementObscurers',
        to: 'tuiGetElementObscures',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getElementOffset',
        to: 'tuiGetElementOffset',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getScrollParent',
        to: 'tuiGetScrollParent',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isCurrentTarget',
        to: 'tuiIsCurrentTarget',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isInsideIframe',
        to: 'tuiIsInsideIframe',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isNodeIn',
        to: 'tuiIsNodeIn',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'blurNativeFocused',
        to: 'tuiBlurNativeFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getClosestFocusable',
        to: 'tuiGetClosestFocusable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getClosestKeyboardFocusable',
        to: 'tuiGetClosestKeyboardFocusable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getNativeFocused',
        to: 'tuiGetNativeFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isNativeFocusedIn',
        to: 'tuiIsNativeFocusedIn',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isNativeFocused',
        to: 'tuiIsNativeFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isNativeKeyboardFocusable',
        to: 'tuiIsNativeKeyboardFocusable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isNativeMouseFocusable',
        to: 'tuiIsNativeMouseFocusable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'moveFocus',
        to: 'tuiMoveFocus',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'setNativeFocused',
        to: 'tuiSetNativeFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'setNativeMouseFocused',
        to: 'tuiSetNativeMouseFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'px',
        to: 'tuiPx',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'clamp',
        to: 'tuiClamp',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'inRange',
        to: 'tuiInRange',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'normalizeToIntNumber',
        to: 'tuiNormalizeToIntNumber',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'quantize',
        to: 'tuiQuantize',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'round',
        to: 'tuiRound',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'ceil',
        to: 'tuiCeil',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'floor',
        to: 'tuiFloor',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'sum',
        to: 'tuiSum',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'toInt',
        to: 'tuiToInt',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'toRadians',
        to: 'tuiToRadians',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'distanceBetweenTouches',
        to: 'tuiDistanceBetweenTouches',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'easeInOutQuad',
        to: 'tuiEaseInOutQuad',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'flatLength',
        to: 'tuiFlatLength',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getOriginalArrayFromQueryList',
        to: 'tuiGetOriginalArrayFromQueryList',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'getSwipeDirection',
        to: 'tuiGetSwipeDirection',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isElementEditable',
        to: 'tuiIsElementEditable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isNumber',
        to: 'tuiIsNumber',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isPresent',
        to: 'tuiIsPresent',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'markControlAsTouchedAndValidate',
        to: 'tuiMarkControlAsTouchedAndValidate',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'nullableSame',
        to: 'tuiNullableSame',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'uniqBy',
        to: 'tuiUniqBy',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isApplePlatform',
        to: 'tuiIsApplePlatform',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isApple',
        to: 'tuiIsApple',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'isIos',
        to: 'tuiIsIos',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'svgLinearGradientProcessor',
        to: 'tuiSvgLinearGradientProcessor',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'textfieldWatchedControllerFactory',
        to: 'tuiTextfieldWatchedControllerFactory',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'smartSearch',
        to: 'tuiSmartSearch',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'isMobileResFactory',
        to: 'tuiIsMobileResFactory',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'modeFactory',
        to: 'tuiModeFactory',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'watchedControllerFactory',
        to: 'tuiWatchedControllerFactory',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'areCssVarsSupported',
        to: 'tuiAreCssVarsSupported',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'areCssVarsSupported',
        to: 'tuiAreCssVarsSupported',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'checkFixedPosition',
        to: 'tuiCheckFixedPosition',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'getSafeAreaSize',
        to: 'tuiGetSafeAreaSize',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'getScreenWidth',
        to: 'tuiGetScreenWidth',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'processIcon',
        to: 'tuiProcessIcon',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'capitalizeFirstLetter',
        to: 'tuiCapitalizeFirstLetter',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'capitalize',
        to: 'tuiCapitalize',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'formatNumber',
        to: 'tuiFormatNumber',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'formatPhone',
        to: 'tuiFormatPhone',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'getFractionPartPadded',
        to: 'tuiGetFractionPartPadded',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'numberToStringWithoutExp',
        to: 'tuiNumberToStringWithoutExp',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'otherDecimalSymbol',
        to: 'tuiOtherDecimalSymbol',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'pluralize',
        to: 'tuiPluralize',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'maskedMoneyValueIsEmpty',
        to: 'tuiMaskedMoneyValueIsEmpty',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'maskedNumberStringToNumber',
        to: 'tuiMaskedNumberStringToNumber',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'getBorder',
        to: 'tuiGetBorder',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'iconsPathFactory',
        to: 'tuiIconsPathFactory',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'isEditingKey',
        to: 'tuiIsEditingKey',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'isPresumedHTMLString',
        to: 'tuiIsPresumedHTMLString',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'sizeBigger',
        to: 'tuiSizeBigger',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'extractI18n',
        to: 'tuiExtractI18n',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'extractValueFromEvent',
        to: 'tuiExtractValueFromEvent',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'getWordRange',
        to: 'tuiGetWordRange',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'scrollToElement',
        to: 'tuiScrollToElement',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'setRangeOffset',
        to: 'tuiSetRangeOffset',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'formatSize',
        to: 'tuiFormatSize',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'getAcceptArray',
        to: 'tuiGetAcceptArray',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'stringHashToHsl',
        to: 'tuiStringHashToHsl',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'normalizeDateValue',
        to: 'tuiNormalizeDateValue',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'getPrecision',
        to: 'tuiGetPrecision',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'isFlat',
        to: 'tuiIsFlat',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
];
