/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as chars from '../chars';
export var CssTokenType;
(function (CssTokenType) {
    CssTokenType[CssTokenType["EOF"] = 0] = "EOF";
    CssTokenType[CssTokenType["String"] = 1] = "String";
    CssTokenType[CssTokenType["Comment"] = 2] = "Comment";
    CssTokenType[CssTokenType["Identifier"] = 3] = "Identifier";
    CssTokenType[CssTokenType["Number"] = 4] = "Number";
    CssTokenType[CssTokenType["IdentifierOrNumber"] = 5] = "IdentifierOrNumber";
    CssTokenType[CssTokenType["AtKeyword"] = 6] = "AtKeyword";
    CssTokenType[CssTokenType["Character"] = 7] = "Character";
    CssTokenType[CssTokenType["Whitespace"] = 8] = "Whitespace";
    CssTokenType[CssTokenType["Invalid"] = 9] = "Invalid";
})(CssTokenType || (CssTokenType = {}));
export var CssLexerMode;
(function (CssLexerMode) {
    CssLexerMode[CssLexerMode["ALL"] = 0] = "ALL";
    CssLexerMode[CssLexerMode["ALL_TRACK_WS"] = 1] = "ALL_TRACK_WS";
    CssLexerMode[CssLexerMode["SELECTOR"] = 2] = "SELECTOR";
    CssLexerMode[CssLexerMode["PSEUDO_SELECTOR"] = 3] = "PSEUDO_SELECTOR";
    CssLexerMode[CssLexerMode["PSEUDO_SELECTOR_WITH_ARGUMENTS"] = 4] = "PSEUDO_SELECTOR_WITH_ARGUMENTS";
    CssLexerMode[CssLexerMode["ATTRIBUTE_SELECTOR"] = 5] = "ATTRIBUTE_SELECTOR";
    CssLexerMode[CssLexerMode["AT_RULE_QUERY"] = 6] = "AT_RULE_QUERY";
    CssLexerMode[CssLexerMode["MEDIA_QUERY"] = 7] = "MEDIA_QUERY";
    CssLexerMode[CssLexerMode["BLOCK"] = 8] = "BLOCK";
    CssLexerMode[CssLexerMode["KEYFRAME_BLOCK"] = 9] = "KEYFRAME_BLOCK";
    CssLexerMode[CssLexerMode["STYLE_BLOCK"] = 10] = "STYLE_BLOCK";
    CssLexerMode[CssLexerMode["STYLE_VALUE"] = 11] = "STYLE_VALUE";
    CssLexerMode[CssLexerMode["STYLE_VALUE_FUNCTION"] = 12] = "STYLE_VALUE_FUNCTION";
    CssLexerMode[CssLexerMode["STYLE_CALC_FUNCTION"] = 13] = "STYLE_CALC_FUNCTION";
})(CssLexerMode || (CssLexerMode = {}));
var LexedCssResult = /** @class */ (function () {
    function LexedCssResult(error, token) {
        this.error = error;
        this.token = token;
    }
    return LexedCssResult;
}());
export { LexedCssResult };
export function generateErrorMessage(input, message, errorValue, index, row, column) {
    return message + " at column " + row + ":" + column + " in expression [" +
        findProblemCode(input, errorValue, index, column) + ']';
}
export function findProblemCode(input, errorValue, index, column) {
    var endOfProblemLine = index;
    var current = charCode(input, index);
    while (current > 0 && !isNewline(current)) {
        current = charCode(input, ++endOfProblemLine);
    }
    var choppedString = input.substring(0, endOfProblemLine);
    var pointerPadding = '';
    for (var i = 0; i < column; i++) {
        pointerPadding += ' ';
    }
    var pointerString = '';
    for (var i = 0; i < errorValue.length; i++) {
        pointerString += '^';
    }
    return choppedString + '\n' + pointerPadding + pointerString + '\n';
}
var CssToken = /** @class */ (function () {
    function CssToken(index, column, line, type, strValue) {
        this.index = index;
        this.column = column;
        this.line = line;
        this.type = type;
        this.strValue = strValue;
        this.numValue = charCode(strValue, 0);
    }
    return CssToken;
}());
export { CssToken };
var CssLexer = /** @class */ (function () {
    function CssLexer() {
    }
    CssLexer.prototype.scan = function (text, trackComments) {
        if (trackComments === void 0) { trackComments = false; }
        return new CssScanner(text, trackComments);
    };
    return CssLexer;
}());
export { CssLexer };
export function cssScannerError(token, message) {
    var error = Error('CssParseError: ' + message);
    error[ERROR_RAW_MESSAGE] = message;
    error[ERROR_TOKEN] = token;
    return error;
}
var ERROR_TOKEN = 'ngToken';
var ERROR_RAW_MESSAGE = 'ngRawMessage';
export function getRawMessage(error) {
    return error[ERROR_RAW_MESSAGE];
}
export function getToken(error) {
    return error[ERROR_TOKEN];
}
function _trackWhitespace(mode) {
    switch (mode) {
        case CssLexerMode.SELECTOR:
        case CssLexerMode.PSEUDO_SELECTOR:
        case CssLexerMode.ALL_TRACK_WS:
        case CssLexerMode.STYLE_VALUE:
            return true;
        default:
            return false;
    }
}
var CssScanner = /** @class */ (function () {
    function CssScanner(input, _trackComments) {
        if (_trackComments === void 0) { _trackComments = false; }
        this.input = input;
        this._trackComments = _trackComments;
        this.length = 0;
        this.index = -1;
        this.column = -1;
        this.line = 0;
        /** @internal */
        this._currentMode = CssLexerMode.BLOCK;
        /** @internal */
        this._currentError = null;
        this.length = this.input.length;
        this.peekPeek = this.peekAt(0);
        this.advance();
    }
    CssScanner.prototype.getMode = function () {
        return this._currentMode;
    };
    CssScanner.prototype.setMode = function (mode) {
        if (this._currentMode != mode) {
            if (_trackWhitespace(this._currentMode) && !_trackWhitespace(mode)) {
                this.consumeWhitespace();
            }
            this._currentMode = mode;
        }
    };
    CssScanner.prototype.advance = function () {
        if (isNewline(this.peek)) {
            this.column = 0;
            this.line++;
        }
        else {
            this.column++;
        }
        this.index++;
        this.peek = this.peekPeek;
        this.peekPeek = this.peekAt(this.index + 1);
    };
    CssScanner.prototype.peekAt = function (index) {
        return index >= this.length ? chars.$EOF : this.input.charCodeAt(index);
    };
    CssScanner.prototype.consumeEmptyStatements = function () {
        this.consumeWhitespace();
        while (this.peek == chars.$SEMICOLON) {
            this.advance();
            this.consumeWhitespace();
        }
    };
    CssScanner.prototype.consumeWhitespace = function () {
        while (chars.isWhitespace(this.peek) || isNewline(this.peek)) {
            this.advance();
            if (!this._trackComments && isCommentStart(this.peek, this.peekPeek)) {
                this.advance(); // /
                this.advance(); // *
                while (!isCommentEnd(this.peek, this.peekPeek)) {
                    if (this.peek == chars.$EOF) {
                        this.error('Unterminated comment');
                    }
                    this.advance();
                }
                this.advance(); // *
                this.advance(); // /
            }
        }
    };
    CssScanner.prototype.consume = function (type, value) {
        if (value === void 0) { value = null; }
        var mode = this._currentMode;
        this.setMode(_trackWhitespace(mode) ? CssLexerMode.ALL_TRACK_WS : CssLexerMode.ALL);
        var previousIndex = this.index;
        var previousLine = this.line;
        var previousColumn = this.column;
        var next = undefined;
        var output = this.scan();
        if (output != null) {
            // just incase the inner scan method returned an error
            if (output.error != null) {
                this.setMode(mode);
                return output;
            }
            next = output.token;
        }
        if (next == null) {
            next = new CssToken(this.index, this.column, this.line, CssTokenType.EOF, 'end of file');
        }
        var isMatchingType = false;
        if (type == CssTokenType.IdentifierOrNumber) {
            // TODO (matsko): implement array traversal for lookup here
            isMatchingType = next.type == CssTokenType.Number || next.type == CssTokenType.Identifier;
        }
        else {
            isMatchingType = next.type == type;
        }
        // before throwing the error we need to bring back the former
        // mode so that the parser can recover...
        this.setMode(mode);
        var error = null;
        if (!isMatchingType || (value != null && value != next.strValue)) {
            var errorMessage = CssTokenType[next.type] + ' does not match expected ' + CssTokenType[type] + ' value';
            if (value != null) {
                errorMessage += ' ("' + next.strValue + '" should match "' + value + '")';
            }
            error = cssScannerError(next, generateErrorMessage(this.input, errorMessage, next.strValue, previousIndex, previousLine, previousColumn));
        }
        return new LexedCssResult(error, next);
    };
    CssScanner.prototype.scan = function () {
        var trackWS = _trackWhitespace(this._currentMode);
        if (this.index == 0 && !trackWS) { // first scan
            this.consumeWhitespace();
        }
        var token = this._scan();
        if (token == null)
            return null;
        var error = this._currentError;
        this._currentError = null;
        if (!trackWS) {
            this.consumeWhitespace();
        }
        return new LexedCssResult(error, token);
    };
    /** @internal */
    CssScanner.prototype._scan = function () {
        var peek = this.peek;
        var peekPeek = this.peekPeek;
        if (peek == chars.$EOF)
            return null;
        if (isCommentStart(peek, peekPeek)) {
            // even if comments are not tracked we still lex the
            // comment so we can move the pointer forward
            var commentToken = this.scanComment();
            if (this._trackComments) {
                return commentToken;
            }
        }
        if (_trackWhitespace(this._currentMode) && (chars.isWhitespace(peek) || isNewline(peek))) {
            return this.scanWhitespace();
        }
        peek = this.peek;
        peekPeek = this.peekPeek;
        if (peek == chars.$EOF)
            return null;
        if (isStringStart(peek, peekPeek)) {
            return this.scanString();
        }
        // something like url(cool)
        if (this._currentMode == CssLexerMode.STYLE_VALUE_FUNCTION) {
            return this.scanCssValueFunction();
        }
        var isModifier = peek == chars.$PLUS || peek == chars.$MINUS;
        var digitA = isModifier ? false : chars.isDigit(peek);
        var digitB = chars.isDigit(peekPeek);
        if (digitA || (isModifier && (peekPeek == chars.$PERIOD || digitB)) ||
            (peek == chars.$PERIOD && digitB)) {
            return this.scanNumber();
        }
        if (peek == chars.$AT) {
            return this.scanAtExpression();
        }
        if (isIdentifierStart(peek, peekPeek)) {
            return this.scanIdentifier();
        }
        if (isValidCssCharacter(peek, this._currentMode)) {
            return this.scanCharacter();
        }
        return this.error("Unexpected character [" + String.fromCharCode(peek) + "]");
    };
    CssScanner.prototype.scanComment = function () {
        if (this.assertCondition(isCommentStart(this.peek, this.peekPeek), 'Expected comment start value')) {
            return null;
        }
        var start = this.index;
        var startingColumn = this.column;
        var startingLine = this.line;
        this.advance(); // /
        this.advance(); // *
        while (!isCommentEnd(this.peek, this.peekPeek)) {
            if (this.peek == chars.$EOF) {
                this.error('Unterminated comment');
            }
            this.advance();
        }
        this.advance(); // *
        this.advance(); // /
        var str = this.input.substring(start, this.index);
        return new CssToken(start, startingColumn, startingLine, CssTokenType.Comment, str);
    };
    CssScanner.prototype.scanWhitespace = function () {
        var start = this.index;
        var startingColumn = this.column;
        var startingLine = this.line;
        while (chars.isWhitespace(this.peek) && this.peek != chars.$EOF) {
            this.advance();
        }
        var str = this.input.substring(start, this.index);
        return new CssToken(start, startingColumn, startingLine, CssTokenType.Whitespace, str);
    };
    CssScanner.prototype.scanString = function () {
        if (this.assertCondition(isStringStart(this.peek, this.peekPeek), 'Unexpected non-string starting value')) {
            return null;
        }
        var target = this.peek;
        var start = this.index;
        var startingColumn = this.column;
        var startingLine = this.line;
        var previous = target;
        this.advance();
        while (!isCharMatch(target, previous, this.peek)) {
            if (this.peek == chars.$EOF || isNewline(this.peek)) {
                this.error('Unterminated quote');
            }
            previous = this.peek;
            this.advance();
        }
        if (this.assertCondition(this.peek == target, 'Unterminated quote')) {
            return null;
        }
        this.advance();
        var str = this.input.substring(start, this.index);
        return new CssToken(start, startingColumn, startingLine, CssTokenType.String, str);
    };
    CssScanner.prototype.scanNumber = function () {
        var start = this.index;
        var startingColumn = this.column;
        if (this.peek == chars.$PLUS || this.peek == chars.$MINUS) {
            this.advance();
        }
        var periodUsed = false;
        while (chars.isDigit(this.peek) || this.peek == chars.$PERIOD) {
            if (this.peek == chars.$PERIOD) {
                if (periodUsed) {
                    this.error('Unexpected use of a second period value');
                }
                periodUsed = true;
            }
            this.advance();
        }
        var strValue = this.input.substring(start, this.index);
        return new CssToken(start, startingColumn, this.line, CssTokenType.Number, strValue);
    };
    CssScanner.prototype.scanIdentifier = function () {
        if (this.assertCondition(isIdentifierStart(this.peek, this.peekPeek), 'Expected identifier starting value')) {
            return null;
        }
        var start = this.index;
        var startingColumn = this.column;
        while (isIdentifierPart(this.peek)) {
            this.advance();
        }
        var strValue = this.input.substring(start, this.index);
        return new CssToken(start, startingColumn, this.line, CssTokenType.Identifier, strValue);
    };
    CssScanner.prototype.scanCssValueFunction = function () {
        var start = this.index;
        var startingColumn = this.column;
        var parenBalance = 1;
        while (this.peek != chars.$EOF && parenBalance > 0) {
            this.advance();
            if (this.peek == chars.$LPAREN) {
                parenBalance++;
            }
            else if (this.peek == chars.$RPAREN) {
                parenBalance--;
            }
        }
        var strValue = this.input.substring(start, this.index);
        return new CssToken(start, startingColumn, this.line, CssTokenType.Identifier, strValue);
    };
    CssScanner.prototype.scanCharacter = function () {
        var start = this.index;
        var startingColumn = this.column;
        if (this.assertCondition(isValidCssCharacter(this.peek, this._currentMode), charStr(this.peek) + ' is not a valid CSS character')) {
            return null;
        }
        var c = this.input.substring(start, start + 1);
        this.advance();
        return new CssToken(start, startingColumn, this.line, CssTokenType.Character, c);
    };
    CssScanner.prototype.scanAtExpression = function () {
        if (this.assertCondition(this.peek == chars.$AT, 'Expected @ value')) {
            return null;
        }
        var start = this.index;
        var startingColumn = this.column;
        this.advance();
        if (isIdentifierStart(this.peek, this.peekPeek)) {
            var ident = this.scanIdentifier();
            var strValue = '@' + ident.strValue;
            return new CssToken(start, startingColumn, this.line, CssTokenType.AtKeyword, strValue);
        }
        else {
            return this.scanCharacter();
        }
    };
    CssScanner.prototype.assertCondition = function (status, errorMessage) {
        if (!status) {
            this.error(errorMessage);
            return true;
        }
        return false;
    };
    CssScanner.prototype.error = function (message, errorTokenValue, doNotAdvance) {
        if (errorTokenValue === void 0) { errorTokenValue = null; }
        if (doNotAdvance === void 0) { doNotAdvance = false; }
        var index = this.index;
        var column = this.column;
        var line = this.line;
        errorTokenValue = errorTokenValue || String.fromCharCode(this.peek);
        var invalidToken = new CssToken(index, column, line, CssTokenType.Invalid, errorTokenValue);
        var errorMessage = generateErrorMessage(this.input, message, errorTokenValue, index, line, column);
        if (!doNotAdvance) {
            this.advance();
        }
        this._currentError = cssScannerError(invalidToken, errorMessage);
        return invalidToken;
    };
    return CssScanner;
}());
export { CssScanner };
function isCharMatch(target, previous, code) {
    return code == target && previous != chars.$BACKSLASH;
}
function isCommentStart(code, next) {
    return code == chars.$SLASH && next == chars.$STAR;
}
function isCommentEnd(code, next) {
    return code == chars.$STAR && next == chars.$SLASH;
}
function isStringStart(code, next) {
    var target = code;
    if (target == chars.$BACKSLASH) {
        target = next;
    }
    return target == chars.$DQ || target == chars.$SQ;
}
function isIdentifierStart(code, next) {
    var target = code;
    if (target == chars.$MINUS) {
        target = next;
    }
    return chars.isAsciiLetter(target) || target == chars.$BACKSLASH || target == chars.$MINUS ||
        target == chars.$_;
}
function isIdentifierPart(target) {
    return chars.isAsciiLetter(target) || target == chars.$BACKSLASH || target == chars.$MINUS ||
        target == chars.$_ || chars.isDigit(target);
}
function isValidPseudoSelectorCharacter(code) {
    switch (code) {
        case chars.$LPAREN:
        case chars.$RPAREN:
            return true;
        default:
            return false;
    }
}
function isValidKeyframeBlockCharacter(code) {
    return code == chars.$PERCENT;
}
function isValidAttributeSelectorCharacter(code) {
    // value^*|$~=something
    switch (code) {
        case chars.$$:
        case chars.$PIPE:
        case chars.$CARET:
        case chars.$TILDA:
        case chars.$STAR:
        case chars.$EQ:
            return true;
        default:
            return false;
    }
}
function isValidSelectorCharacter(code) {
    // selector [ key   = value ]
    // IDENT    C IDENT C IDENT C
    // #id, .class, *+~>
    // tag:PSEUDO
    switch (code) {
        case chars.$HASH:
        case chars.$PERIOD:
        case chars.$TILDA:
        case chars.$STAR:
        case chars.$PLUS:
        case chars.$GT:
        case chars.$COLON:
        case chars.$PIPE:
        case chars.$COMMA:
        case chars.$LBRACKET:
        case chars.$RBRACKET:
            return true;
        default:
            return false;
    }
}
function isValidStyleBlockCharacter(code) {
    // key:value;
    // key:calc(something ... )
    switch (code) {
        case chars.$HASH:
        case chars.$SEMICOLON:
        case chars.$COLON:
        case chars.$PERCENT:
        case chars.$SLASH:
        case chars.$BACKSLASH:
        case chars.$BANG:
        case chars.$PERIOD:
        case chars.$LPAREN:
        case chars.$RPAREN:
            return true;
        default:
            return false;
    }
}
function isValidMediaQueryRuleCharacter(code) {
    // (min-width: 7.5em) and (orientation: landscape)
    switch (code) {
        case chars.$LPAREN:
        case chars.$RPAREN:
        case chars.$COLON:
        case chars.$PERCENT:
        case chars.$PERIOD:
            return true;
        default:
            return false;
    }
}
function isValidAtRuleCharacter(code) {
    // @document url(http://www.w3.org/page?something=on#hash),
    switch (code) {
        case chars.$LPAREN:
        case chars.$RPAREN:
        case chars.$COLON:
        case chars.$PERCENT:
        case chars.$PERIOD:
        case chars.$SLASH:
        case chars.$BACKSLASH:
        case chars.$HASH:
        case chars.$EQ:
        case chars.$QUESTION:
        case chars.$AMPERSAND:
        case chars.$STAR:
        case chars.$COMMA:
        case chars.$MINUS:
        case chars.$PLUS:
            return true;
        default:
            return false;
    }
}
function isValidStyleFunctionCharacter(code) {
    switch (code) {
        case chars.$PERIOD:
        case chars.$MINUS:
        case chars.$PLUS:
        case chars.$STAR:
        case chars.$SLASH:
        case chars.$LPAREN:
        case chars.$RPAREN:
        case chars.$COMMA:
            return true;
        default:
            return false;
    }
}
function isValidBlockCharacter(code) {
    // @something { }
    // IDENT
    return code == chars.$AT;
}
function isValidCssCharacter(code, mode) {
    switch (mode) {
        case CssLexerMode.ALL:
        case CssLexerMode.ALL_TRACK_WS:
            return true;
        case CssLexerMode.SELECTOR:
            return isValidSelectorCharacter(code);
        case CssLexerMode.PSEUDO_SELECTOR_WITH_ARGUMENTS:
            return isValidPseudoSelectorCharacter(code);
        case CssLexerMode.ATTRIBUTE_SELECTOR:
            return isValidAttributeSelectorCharacter(code);
        case CssLexerMode.MEDIA_QUERY:
            return isValidMediaQueryRuleCharacter(code);
        case CssLexerMode.AT_RULE_QUERY:
            return isValidAtRuleCharacter(code);
        case CssLexerMode.KEYFRAME_BLOCK:
            return isValidKeyframeBlockCharacter(code);
        case CssLexerMode.STYLE_BLOCK:
        case CssLexerMode.STYLE_VALUE:
            return isValidStyleBlockCharacter(code);
        case CssLexerMode.STYLE_CALC_FUNCTION:
            return isValidStyleFunctionCharacter(code);
        case CssLexerMode.BLOCK:
            return isValidBlockCharacter(code);
        default:
            return false;
    }
}
function charCode(input, index) {
    return index >= input.length ? chars.$EOF : input.charCodeAt(index);
}
function charStr(code) {
    return String.fromCharCode(code);
}
export function isNewline(code) {
    switch (code) {
        case chars.$FF:
        case chars.$CR:
        case chars.$LF:
        case chars.$VTAB:
            return true;
        default:
            return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2xleGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2Nzc19wYXJzZXIvY3NzX2xleGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBRWxDLE1BQU0sQ0FBTixJQUFZLFlBV1g7QUFYRCxXQUFZLFlBQVk7SUFDdEIsNkNBQUcsQ0FBQTtJQUNILG1EQUFNLENBQUE7SUFDTixxREFBTyxDQUFBO0lBQ1AsMkRBQVUsQ0FBQTtJQUNWLG1EQUFNLENBQUE7SUFDTiwyRUFBa0IsQ0FBQTtJQUNsQix5REFBUyxDQUFBO0lBQ1QseURBQVMsQ0FBQTtJQUNULDJEQUFVLENBQUE7SUFDVixxREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQVhXLFlBQVksS0FBWixZQUFZLFFBV3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksWUFlWDtBQWZELFdBQVksWUFBWTtJQUN0Qiw2Q0FBRyxDQUFBO0lBQ0gsK0RBQVksQ0FBQTtJQUNaLHVEQUFRLENBQUE7SUFDUixxRUFBZSxDQUFBO0lBQ2YsbUdBQThCLENBQUE7SUFDOUIsMkVBQWtCLENBQUE7SUFDbEIsaUVBQWEsQ0FBQTtJQUNiLDZEQUFXLENBQUE7SUFDWCxpREFBSyxDQUFBO0lBQ0wsbUVBQWMsQ0FBQTtJQUNkLDhEQUFXLENBQUE7SUFDWCw4REFBVyxDQUFBO0lBQ1gsZ0ZBQW9CLENBQUE7SUFDcEIsOEVBQW1CLENBQUE7QUFDckIsQ0FBQyxFQWZXLFlBQVksS0FBWixZQUFZLFFBZXZCO0FBRUQ7SUFDRSx3QkFBbUIsS0FBaUIsRUFBUyxLQUFlO1FBQXpDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFVO0lBQUcsQ0FBQztJQUNsRSxxQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVELE1BQU0s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QU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBjaGFycyBmcm9tICcuLi9jaGFycyc7XG5cbmV4cG9ydCBlbnVtIENzc1Rva2VuVHlwZSB7XG4gIEVPRixcbiAgU3RyaW5nLFxuICBDb21tZW50LFxuICBJZGVudGlmaWVyLFxuICBOdW1iZXIsXG4gIElkZW50aWZpZXJPck51bWJlcixcbiAgQXRLZXl3b3JkLFxuICBDaGFyYWN0ZXIsXG4gIFdoaXRlc3BhY2UsXG4gIEludmFsaWRcbn1cblxuZXhwb3J0IGVudW0gQ3NzTGV4ZXJNb2RlIHtcbiAgQUxMLFxuICBBTExfVFJBQ0tfV1MsXG4gIFNFTEVDVE9SLFxuICBQU0VVRE9fU0VMRUNUT1IsXG4gIFBTRVVET19TRUxFQ1RPUl9XSVRIX0FSR1VNRU5UUyxcbiAgQVRUUklCVVRFX1NFTEVDVE9SLFxuICBBVF9SVUxFX1FVRVJZLFxuICBNRURJQV9RVUVSWSxcbiAgQkxPQ0ssXG4gIEtFWUZSQU1FX0JMT0NLLFxuICBTVFlMRV9CTE9DSyxcbiAgU1RZTEVfVkFMVUUsXG4gIFNUWUxFX1ZBTFVFX0ZVTkNUSU9OLFxuICBTVFlMRV9DQUxDX0ZVTkNUSU9OXG59XG5cbmV4cG9ydCBjbGFzcyBMZXhlZENzc1Jlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvcjogRXJyb3J8bnVsbCwgcHVibGljIHRva2VuOiBDc3NUb2tlbikge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRXJyb3JNZXNzYWdlKFxuICAgIGlucHV0OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZXJyb3JWYWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCByb3c6IG51bWJlcixcbiAgICBjb2x1bW46IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiBgJHttZXNzYWdlfSBhdCBjb2x1bW4gJHtyb3d9OiR7Y29sdW1ufSBpbiBleHByZXNzaW9uIFtgICtcbiAgICAgIGZpbmRQcm9ibGVtQ29kZShpbnB1dCwgZXJyb3JWYWx1ZSwgaW5kZXgsIGNvbHVtbikgKyAnXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUHJvYmxlbUNvZGUoXG4gICAgaW5wdXQ6IHN0cmluZywgZXJyb3JWYWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBjb2x1bW46IG51bWJlcik6IHN0cmluZyB7XG4gIGxldCBlbmRPZlByb2JsZW1MaW5lID0gaW5kZXg7XG4gIGxldCBjdXJyZW50ID0gY2hhckNvZGUoaW5wdXQsIGluZGV4KTtcbiAgd2hpbGUgKGN1cnJlbnQgPiAwICYmICFpc05ld2xpbmUoY3VycmVudCkpIHtcbiAgICBjdXJyZW50ID0gY2hhckNvZGUoaW5wdXQsICsrZW5kT2ZQcm9ibGVtTGluZSk7XG4gIH1cbiAgY29uc3QgY2hvcHBlZFN0cmluZyA9IGlucHV0LnN1YnN0cmluZygwLCBlbmRPZlByb2JsZW1MaW5lKTtcbiAgbGV0IHBvaW50ZXJQYWRkaW5nID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uOyBpKyspIHtcbiAgICBwb2ludGVyUGFkZGluZyArPSAnICc7XG4gIH1cbiAgbGV0IHBvaW50ZXJTdHJpbmcgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvclZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcG9pbnRlclN0cmluZyArPSAnXic7XG4gIH1cbiAgcmV0dXJuIGNob3BwZWRTdHJpbmcgKyAnXFxuJyArIHBvaW50ZXJQYWRkaW5nICsgcG9pbnRlclN0cmluZyArICdcXG4nO1xufVxuXG5leHBvcnQgY2xhc3MgQ3NzVG9rZW4ge1xuICBudW1WYWx1ZTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpbmRleDogbnVtYmVyLCBwdWJsaWMgY29sdW1uOiBudW1iZXIsIHB1YmxpYyBsaW5lOiBudW1iZXIsIHB1YmxpYyB0eXBlOiBDc3NUb2tlblR5cGUsXG4gICAgICBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMubnVtVmFsdWUgPSBjaGFyQ29kZShzdHJWYWx1ZSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENzc0xleGVyIHtcbiAgc2Nhbih0ZXh0OiBzdHJpbmcsIHRyYWNrQ29tbWVudHM6IGJvb2xlYW4gPSBmYWxzZSk6IENzc1NjYW5uZXIge1xuICAgIHJldHVybiBuZXcgQ3NzU2Nhbm5lcih0ZXh0LCB0cmFja0NvbW1lbnRzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3NzU2Nhbm5lckVycm9yKHRva2VuOiBDc3NUb2tlbiwgbWVzc2FnZTogc3RyaW5nKTogRXJyb3Ige1xuICBjb25zdCBlcnJvciA9IEVycm9yKCdDc3NQYXJzZUVycm9yOiAnICsgbWVzc2FnZSk7XG4gIChlcnJvciBhcyBhbnkpW0VSUk9SX1JBV19NRVNTQUdFXSA9IG1lc3NhZ2U7XG4gIChlcnJvciBhcyBhbnkpW0VSUk9SX1RPS0VOXSA9IHRva2VuO1xuICByZXR1cm4gZXJyb3I7XG59XG5cbmNvbnN0IEVSUk9SX1RPS0VOID0gJ25nVG9rZW4nO1xuY29uc3QgRVJST1JfUkFXX01FU1NBR0UgPSAnbmdSYXdNZXNzYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhd01lc3NhZ2UoZXJyb3I6IEVycm9yKTogc3RyaW5nIHtcbiAgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX1JBV19NRVNTQUdFXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRva2VuKGVycm9yOiBFcnJvcik6IENzc1Rva2VuIHtcbiAgcmV0dXJuIChlcnJvciBhcyBhbnkpW0VSUk9SX1RPS0VOXTtcbn1cblxuZnVuY3Rpb24gX3RyYWNrV2hpdGVzcGFjZShtb2RlOiBDc3NMZXhlck1vZGUpIHtcbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBDc3NMZXhlck1vZGUuU0VMRUNUT1I6XG4gICAgY2FzZSBDc3NMZXhlck1vZGUuUFNFVURPX1NFTEVDVE9SOlxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLkFMTF9UUkFDS19XUzpcbiAgICBjYXNlIENzc0xleGVyTW9kZS5TVFlMRV9WQUxVRTpcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzU2Nhbm5lciB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwZWVrITogbnVtYmVyO1xuICBwZWVrUGVlazogbnVtYmVyO1xuICBsZW5ndGg6IG51bWJlciA9IDA7XG4gIGluZGV4OiBudW1iZXIgPSAtMTtcbiAgY29sdW1uOiBudW1iZXIgPSAtMTtcbiAgbGluZTogbnVtYmVyID0gMDtcblxuICAvKiogQGludGVybmFsICovXG4gIF9jdXJyZW50TW9kZTogQ3NzTGV4ZXJNb2RlID0gQ3NzTGV4ZXJNb2RlLkJMT0NLO1xuICAvKiogQGludGVybmFsICovXG4gIF9jdXJyZW50RXJyb3I6IEVycm9yfG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dDogc3RyaW5nLCBwcml2YXRlIF90cmFja0NvbW1lbnRzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuaW5wdXQubGVuZ3RoO1xuICAgIHRoaXMucGVla1BlZWsgPSB0aGlzLnBlZWtBdCgwKTtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgfVxuXG4gIGdldE1vZGUoKTogQ3NzTGV4ZXJNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE1vZGU7XG4gIH1cblxuICBzZXRNb2RlKG1vZGU6IENzc0xleGVyTW9kZSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50TW9kZSAhPSBtb2RlKSB7XG4gICAgICBpZiAoX3RyYWNrV2hpdGVzcGFjZSh0aGlzLl9jdXJyZW50TW9kZSkgJiYgIV90cmFja1doaXRlc3BhY2UobW9kZSkpIHtcbiAgICAgICAgdGhpcy5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY3VycmVudE1vZGUgPSBtb2RlO1xuICAgIH1cbiAgfVxuXG4gIGFkdmFuY2UoKTogdm9pZCB7XG4gICAgaWYgKGlzTmV3bGluZSh0aGlzLnBlZWspKSB7XG4gICAgICB0aGlzLmNvbHVtbiA9IDA7XG4gICAgICB0aGlzLmxpbmUrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb2x1bW4rKztcbiAgICB9XG5cbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdGhpcy5wZWVrID0gdGhpcy5wZWVrUGVlaztcbiAgICB0aGlzLnBlZWtQZWVrID0gdGhpcy5wZWVrQXQodGhpcy5pbmRleCArIDEpO1xuICB9XG5cbiAgcGVla0F0KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBpbmRleCA+PSB0aGlzLmxlbmd0aCA/IGNoYXJzLiRFT0YgOiB0aGlzLmlucHV0LmNoYXJDb2RlQXQoaW5kZXgpO1xuICB9XG5cbiAgY29uc3VtZUVtcHR5U3RhdGVtZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnN1bWVXaGl0ZXNwYWNlKCk7XG4gICAgd2hpbGUgKHRoaXMucGVlayA9PSBjaGFycy4kU0VNSUNPTE9OKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHRoaXMuY29uc3VtZVdoaXRlc3BhY2UoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdW1lV2hpdGVzcGFjZSgpOiB2b2lkIHtcbiAgICB3aGlsZSAoY2hhcnMuaXNXaGl0ZXNwYWNlKHRoaXMucGVlaykgfHwgaXNOZXdsaW5lKHRoaXMucGVlaykpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgaWYgKCF0aGlzLl90cmFja0NvbW1lbnRzICYmIGlzQ29tbWVudFN0YXJ0KHRoaXMucGVlaywgdGhpcy5wZWVrUGVlaykpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAvXG4gICAgICAgIHRoaXMuYWR2YW5jZSgpOyAgLy8gKlxuICAgICAgICB3aGlsZSAoIWlzQ29tbWVudEVuZCh0aGlzLnBlZWssIHRoaXMucGVla1BlZWspKSB7XG4gICAgICAgICAgaWYgKHRoaXMucGVlayA9PSBjaGFycy4kRU9GKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkdmFuY2UoKTsgIC8vICpcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAvXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3VtZSh0eXBlOiBDc3NUb2tlblR5cGUsIHZhbHVlOiBzdHJpbmd8bnVsbCA9IG51bGwpOiBMZXhlZENzc1Jlc3VsdCB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMuX2N1cnJlbnRNb2RlO1xuXG4gICAgdGhpcy5zZXRNb2RlKF90cmFja1doaXRlc3BhY2UobW9kZSkgPyBDc3NMZXhlck1vZGUuQUxMX1RSQUNLX1dTIDogQ3NzTGV4ZXJNb2RlLkFMTCk7XG5cbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBwcmV2aW91c0xpbmUgPSB0aGlzLmxpbmU7XG4gICAgY29uc3QgcHJldmlvdXNDb2x1bW4gPSB0aGlzLmNvbHVtbjtcblxuICAgIGxldCBuZXh0OiBDc3NUb2tlbiA9IHVuZGVmaW5lZCE7XG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5zY2FuKCk7XG4gICAgaWYgKG91dHB1dCAhPSBudWxsKSB7XG4gICAgICAvLyBqdXN0IGluY2FzZSB0aGUgaW5uZXIgc2NhbiBtZXRob2QgcmV0dXJuZWQgYW4gZXJyb3JcbiAgICAgIGlmIChvdXRwdXQuZXJyb3IgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldE1vZGUobW9kZSk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBvdXRwdXQudG9rZW47XG4gICAgfVxuXG4gICAgaWYgKG5leHQgPT0gbnVsbCkge1xuICAgICAgbmV4dCA9IG5ldyBDc3NUb2tlbih0aGlzLmluZGV4LCB0aGlzLmNvbHVtbiwgdGhpcy5saW5lLCBDc3NUb2tlblR5cGUuRU9GLCAnZW5kIG9mIGZpbGUnKTtcbiAgICB9XG5cbiAgICBsZXQgaXNNYXRjaGluZ1R5cGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpZiAodHlwZSA9PSBDc3NUb2tlblR5cGUuSWRlbnRpZmllck9yTnVtYmVyKSB7XG4gICAgICAvLyBUT0RPIChtYXRza28pOiBpbXBsZW1lbnQgYXJyYXkgdHJhdmVyc2FsIGZvciBsb29rdXAgaGVyZVxuICAgICAgaXNNYXRjaGluZ1R5cGUgPSBuZXh0LnR5cGUgPT0gQ3NzVG9rZW5UeXBlLk51bWJlciB8fCBuZXh0LnR5cGUgPT0gQ3NzVG9rZW5UeXBlLklkZW50aWZpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzTWF0Y2hpbmdUeXBlID0gbmV4dC50eXBlID09IHR5cGU7XG4gICAgfVxuXG4gICAgLy8gYmVmb3JlIHRocm93aW5nIHRoZSBlcnJvciB3ZSBuZWVkIHRvIGJyaW5nIGJhY2sgdGhlIGZvcm1lclxuICAgIC8vIG1vZGUgc28gdGhhdCB0aGUgcGFyc2VyIGNhbiByZWNvdmVyLi4uXG4gICAgdGhpcy5zZXRNb2RlKG1vZGUpO1xuXG4gICAgbGV0IGVycm9yOiBFcnJvcnxudWxsID0gbnVsbDtcbiAgICBpZiAoIWlzTWF0Y2hpbmdUeXBlIHx8ICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9IG5leHQuc3RyVmFsdWUpKSB7XG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgICBDc3NUb2tlblR5cGVbbmV4dC50eXBlXSArICcgZG9lcyBub3QgbWF0Y2ggZXhwZWN0ZWQgJyArIENzc1Rva2VuVHlwZVt0eXBlXSArICcgdmFsdWUnO1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJyAoXCInICsgbmV4dC5zdHJWYWx1ZSArICdcIiBzaG91bGQgbWF0Y2ggXCInICsgdmFsdWUgKyAnXCIpJztcbiAgICAgIH1cblxuICAgICAgZXJyb3IgPSBjc3NTY2FubmVyRXJyb3IoXG4gICAgICAgICAgbmV4dCxcbiAgICAgICAgICBnZW5lcmF0ZUVycm9yTWVzc2FnZShcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCwgZXJyb3JNZXNzYWdlLCBuZXh0LnN0clZhbHVlLCBwcmV2aW91c0luZGV4LCBwcmV2aW91c0xpbmUsXG4gICAgICAgICAgICAgIHByZXZpb3VzQ29sdW1uKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBMZXhlZENzc1Jlc3VsdChlcnJvciwgbmV4dCk7XG4gIH1cblxuXG4gIHNjYW4oKTogTGV4ZWRDc3NSZXN1bHR8bnVsbCB7XG4gICAgY29uc3QgdHJhY2tXUyA9IF90cmFja1doaXRlc3BhY2UodGhpcy5fY3VycmVudE1vZGUpO1xuICAgIGlmICh0aGlzLmluZGV4ID09IDAgJiYgIXRyYWNrV1MpIHsgIC8vIGZpcnN0IHNjYW5cbiAgICAgIHRoaXMuY29uc3VtZVdoaXRlc3BhY2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuX3NjYW4oKTtcbiAgICBpZiAodG9rZW4gPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBlcnJvciA9IHRoaXMuX2N1cnJlbnRFcnJvciE7XG4gICAgdGhpcy5fY3VycmVudEVycm9yID0gbnVsbDtcblxuICAgIGlmICghdHJhY2tXUykge1xuICAgICAgdGhpcy5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IExleGVkQ3NzUmVzdWx0KGVycm9yLCB0b2tlbik7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zY2FuKCk6IENzc1Rva2VufG51bGwge1xuICAgIGxldCBwZWVrID0gdGhpcy5wZWVrO1xuICAgIGxldCBwZWVrUGVlayA9IHRoaXMucGVla1BlZWs7XG4gICAgaWYgKHBlZWsgPT0gY2hhcnMuJEVPRikgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoaXNDb21tZW50U3RhcnQocGVlaywgcGVla1BlZWspKSB7XG4gICAgICAvLyBldmVuIGlmIGNvbW1lbnRzIGFyZSBub3QgdHJhY2tlZCB3ZSBzdGlsbCBsZXggdGhlXG4gICAgICAvLyBjb21tZW50IHNvIHdlIGNhbiBtb3ZlIHRoZSBwb2ludGVyIGZvcndhcmRcbiAgICAgIGNvbnN0IGNvbW1lbnRUb2tlbiA9IHRoaXMuc2NhbkNvbW1lbnQoKTtcbiAgICAgIGlmICh0aGlzLl90cmFja0NvbW1lbnRzKSB7XG4gICAgICAgIHJldHVybiBjb21tZW50VG9rZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF90cmFja1doaXRlc3BhY2UodGhpcy5fY3VycmVudE1vZGUpICYmIChjaGFycy5pc1doaXRlc3BhY2UocGVlaykgfHwgaXNOZXdsaW5lKHBlZWspKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbldoaXRlc3BhY2UoKTtcbiAgICB9XG5cbiAgICBwZWVrID0gdGhpcy5wZWVrO1xuICAgIHBlZWtQZWVrID0gdGhpcy5wZWVrUGVlaztcbiAgICBpZiAocGVlayA9PSBjaGFycy4kRU9GKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChpc1N0cmluZ1N0YXJ0KHBlZWssIHBlZWtQZWVrKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NhblN0cmluZygpO1xuICAgIH1cblxuICAgIC8vIHNvbWV0aGluZyBsaWtlIHVybChjb29sKVxuICAgIGlmICh0aGlzLl9jdXJyZW50TW9kZSA9PSBDc3NMZXhlck1vZGUuU1RZTEVfVkFMVUVfRlVOQ1RJT04pIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5Dc3NWYWx1ZUZ1bmN0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNNb2RpZmllciA9IHBlZWsgPT0gY2hhcnMuJFBMVVMgfHwgcGVlayA9PSBjaGFycy4kTUlOVVM7XG4gICAgY29uc3QgZGlnaXRBID0gaXNNb2RpZmllciA/IGZhbHNlIDogY2hhcnMuaXNEaWdpdChwZWVrKTtcbiAgICBjb25zdCBkaWdpdEIgPSBjaGFycy5pc0RpZ2l0KHBlZWtQZWVrKTtcbiAgICBpZiAoZGlnaXRBIHx8IChpc01vZGlmaWVyICYmIChwZWVrUGVlayA9PSBjaGFycy4kUEVSSU9EIHx8IGRpZ2l0QikpIHx8XG4gICAgICAgIChwZWVrID09IGNoYXJzLiRQRVJJT0QgJiYgZGlnaXRCKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nhbk51bWJlcigpO1xuICAgIH1cblxuICAgIGlmIChwZWVrID09IGNoYXJzLiRBVCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NhbkF0RXhwcmVzc2lvbigpO1xuICAgIH1cblxuICAgIGlmIChpc0lkZW50aWZpZXJTdGFydChwZWVrLCBwZWVrUGVlaykpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjYW5JZGVudGlmaWVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWRDc3NDaGFyYWN0ZXIocGVlaywgdGhpcy5fY3VycmVudE1vZGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuQ2hhcmFjdGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgY2hhcmFjdGVyIFske1N0cmluZy5mcm9tQ2hhckNvZGUocGVlayl9XWApO1xuICB9XG5cbiAgc2NhbkNvbW1lbnQoKTogQ3NzVG9rZW58bnVsbCB7XG4gICAgaWYgKHRoaXMuYXNzZXJ0Q29uZGl0aW9uKFxuICAgICAgICAgICAgaXNDb21tZW50U3RhcnQodGhpcy5wZWVrLCB0aGlzLnBlZWtQZWVrKSwgJ0V4cGVjdGVkIGNvbW1lbnQgc3RhcnQgdmFsdWUnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgY29uc3Qgc3RhcnRpbmdMaW5lID0gdGhpcy5saW5lO1xuXG4gICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAvXG4gICAgdGhpcy5hZHZhbmNlKCk7ICAvLyAqXG5cbiAgICB3aGlsZSAoIWlzQ29tbWVudEVuZCh0aGlzLnBlZWssIHRoaXMucGVla1BlZWspKSB7XG4gICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRFT0YpIHtcbiAgICAgICAgdGhpcy5lcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cblxuICAgIHRoaXMuYWR2YW5jZSgpOyAgLy8gKlxuICAgIHRoaXMuYWR2YW5jZSgpOyAgLy8gL1xuXG4gICAgY29uc3Qgc3RyID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgIHJldHVybiBuZXcgQ3NzVG9rZW4oc3RhcnQsIHN0YXJ0aW5nQ29sdW1uLCBzdGFydGluZ0xpbmUsIENzc1Rva2VuVHlwZS5Db21tZW50LCBzdHIpO1xuICB9XG5cbiAgc2NhbldoaXRlc3BhY2UoKTogQ3NzVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgIGNvbnN0IHN0YXJ0aW5nTGluZSA9IHRoaXMubGluZTtcbiAgICB3aGlsZSAoY2hhcnMuaXNXaGl0ZXNwYWNlKHRoaXMucGVlaykgJiYgdGhpcy5wZWVrICE9IGNoYXJzLiRFT0YpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIH1cbiAgICBjb25zdCBzdHIgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHN0YXJ0aW5nTGluZSwgQ3NzVG9rZW5UeXBlLldoaXRlc3BhY2UsIHN0cik7XG4gIH1cblxuICBzY2FuU3RyaW5nKCk6IENzc1Rva2VufG51bGwge1xuICAgIGlmICh0aGlzLmFzc2VydENvbmRpdGlvbihcbiAgICAgICAgICAgIGlzU3RyaW5nU3RhcnQodGhpcy5wZWVrLCB0aGlzLnBlZWtQZWVrKSwgJ1VuZXhwZWN0ZWQgbm9uLXN0cmluZyBzdGFydGluZyB2YWx1ZScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnBlZWs7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgY29uc3Qgc3RhcnRpbmdMaW5lID0gdGhpcy5saW5lO1xuICAgIGxldCBwcmV2aW91cyA9IHRhcmdldDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcblxuICAgIHdoaWxlICghaXNDaGFyTWF0Y2godGFyZ2V0LCBwcmV2aW91cywgdGhpcy5wZWVrKSkge1xuICAgICAgaWYgKHRoaXMucGVlayA9PSBjaGFycy4kRU9GIHx8IGlzTmV3bGluZSh0aGlzLnBlZWspKSB7XG4gICAgICAgIHRoaXMuZXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScpO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSB0aGlzLnBlZWs7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hc3NlcnRDb25kaXRpb24odGhpcy5wZWVrID09IHRhcmdldCwgJ1VudGVybWluYXRlZCBxdW90ZScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICBjb25zdCBzdHIgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHN0YXJ0aW5nTGluZSwgQ3NzVG9rZW5UeXBlLlN0cmluZywgc3RyKTtcbiAgfVxuXG4gIHNjYW5OdW1iZXIoKTogQ3NzVG9rZW4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgIGlmICh0aGlzLnBlZWsgPT0gY2hhcnMuJFBMVVMgfHwgdGhpcy5wZWVrID09IGNoYXJzLiRNSU5VUykge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuICAgIGxldCBwZXJpb2RVc2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKGNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSB8fCB0aGlzLnBlZWsgPT0gY2hhcnMuJFBFUklPRCkge1xuICAgICAgaWYgKHRoaXMucGVlayA9PSBjaGFycy4kUEVSSU9EKSB7XG4gICAgICAgIGlmIChwZXJpb2RVc2VkKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcignVW5leHBlY3RlZCB1c2Ugb2YgYSBzZWNvbmQgcGVyaW9kIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcGVyaW9kVXNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyVmFsdWUgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHRoaXMubGluZSwgQ3NzVG9rZW5UeXBlLk51bWJlciwgc3RyVmFsdWUpO1xuICB9XG5cbiAgc2NhbklkZW50aWZpZXIoKTogQ3NzVG9rZW58bnVsbCB7XG4gICAgaWYgKHRoaXMuYXNzZXJ0Q29uZGl0aW9uKFxuICAgICAgICAgICAgaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrLCB0aGlzLnBlZWtQZWVrKSwgJ0V4cGVjdGVkIGlkZW50aWZpZXIgc3RhcnRpbmcgdmFsdWUnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgd2hpbGUgKGlzSWRlbnRpZmllclBhcnQodGhpcy5wZWVrKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0clZhbHVlID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgIHJldHVybiBuZXcgQ3NzVG9rZW4oc3RhcnQsIHN0YXJ0aW5nQ29sdW1uLCB0aGlzLmxpbmUsIENzc1Rva2VuVHlwZS5JZGVudGlmaWVyLCBzdHJWYWx1ZSk7XG4gIH1cblxuICBzY2FuQ3NzVmFsdWVGdW5jdGlvbigpOiBDc3NUb2tlbiB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgbGV0IHBhcmVuQmFsYW5jZSA9IDE7XG4gICAgd2hpbGUgKHRoaXMucGVlayAhPSBjaGFycy4kRU9GICYmIHBhcmVuQmFsYW5jZSA+IDApIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgaWYgKHRoaXMucGVlayA9PSBjaGFycy4kTFBBUkVOKSB7XG4gICAgICAgIHBhcmVuQmFsYW5jZSsrO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsgPT0gY2hhcnMuJFJQQVJFTikge1xuICAgICAgICBwYXJlbkJhbGFuY2UtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3RyVmFsdWUgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5pbmRleCk7XG4gICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHRoaXMubGluZSwgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIsIHN0clZhbHVlKTtcbiAgfVxuXG4gIHNjYW5DaGFyYWN0ZXIoKTogQ3NzVG9rZW58bnVsbCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgIGNvbnN0IHN0YXJ0aW5nQ29sdW1uID0gdGhpcy5jb2x1bW47XG4gICAgaWYgKHRoaXMuYXNzZXJ0Q29uZGl0aW9uKFxuICAgICAgICAgICAgaXNWYWxpZENzc0NoYXJhY3Rlcih0aGlzLnBlZWssIHRoaXMuX2N1cnJlbnRNb2RlKSxcbiAgICAgICAgICAgIGNoYXJTdHIodGhpcy5wZWVrKSArICcgaXMgbm90IGEgdmFsaWQgQ1NTIGNoYXJhY3RlcicpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHN0YXJ0ICsgMSk7XG4gICAgdGhpcy5hZHZhbmNlKCk7XG5cbiAgICByZXR1cm4gbmV3IENzc1Rva2VuKHN0YXJ0LCBzdGFydGluZ0NvbHVtbiwgdGhpcy5saW5lLCBDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCBjKTtcbiAgfVxuXG4gIHNjYW5BdEV4cHJlc3Npb24oKTogQ3NzVG9rZW58bnVsbCB7XG4gICAgaWYgKHRoaXMuYXNzZXJ0Q29uZGl0aW9uKHRoaXMucGVlayA9PSBjaGFycy4kQVQsICdFeHBlY3RlZCBAIHZhbHVlJykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBzdGFydGluZ0NvbHVtbiA9IHRoaXMuY29sdW1uO1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIGlmIChpc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWssIHRoaXMucGVla1BlZWspKSB7XG4gICAgICBjb25zdCBpZGVudCA9IHRoaXMuc2NhbklkZW50aWZpZXIoKSE7XG4gICAgICBjb25zdCBzdHJWYWx1ZSA9ICdAJyArIGlkZW50LnN0clZhbHVlO1xuICAgICAgcmV0dXJuIG5ldyBDc3NUb2tlbihzdGFydCwgc3RhcnRpbmdDb2x1bW4sIHRoaXMubGluZSwgQ3NzVG9rZW5UeXBlLkF0S2V5d29yZCwgc3RyVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2FuQ2hhcmFjdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYXNzZXJ0Q29uZGl0aW9uKHN0YXR1czogYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXN0YXR1cykge1xuICAgICAgdGhpcy5lcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgZXJyb3JUb2tlblZhbHVlOiBzdHJpbmd8bnVsbCA9IG51bGwsIGRvTm90QWR2YW5jZTogYm9vbGVhbiA9IGZhbHNlKTpcbiAgICAgIENzc1Rva2VuIHtcbiAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICBjb25zdCBjb2x1bW46IG51bWJlciA9IHRoaXMuY29sdW1uO1xuICAgIGNvbnN0IGxpbmU6IG51bWJlciA9IHRoaXMubGluZTtcbiAgICBlcnJvclRva2VuVmFsdWUgPSBlcnJvclRva2VuVmFsdWUgfHwgU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLnBlZWspO1xuICAgIGNvbnN0IGludmFsaWRUb2tlbiA9IG5ldyBDc3NUb2tlbihpbmRleCwgY29sdW1uLCBsaW5lLCBDc3NUb2tlblR5cGUuSW52YWxpZCwgZXJyb3JUb2tlblZhbHVlKTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgICBnZW5lcmF0ZUVycm9yTWVzc2FnZSh0aGlzLmlucHV0LCBtZXNzYWdlLCBlcnJvclRva2VuVmFsdWUsIGluZGV4LCBsaW5lLCBjb2x1bW4pO1xuICAgIGlmICghZG9Ob3RBZHZhbmNlKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudEVycm9yID0gY3NzU2Nhbm5lckVycm9yKGludmFsaWRUb2tlbiwgZXJyb3JNZXNzYWdlKTtcbiAgICByZXR1cm4gaW52YWxpZFRva2VuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ2hhck1hdGNoKHRhcmdldDogbnVtYmVyLCBwcmV2aW91czogbnVtYmVyLCBjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT0gdGFyZ2V0ICYmIHByZXZpb3VzICE9IGNoYXJzLiRCQUNLU0xBU0g7XG59XG5cbmZ1bmN0aW9uIGlzQ29tbWVudFN0YXJ0KGNvZGU6IG51bWJlciwgbmV4dDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb2RlID09IGNoYXJzLiRTTEFTSCAmJiBuZXh0ID09IGNoYXJzLiRTVEFSO1xufVxuXG5mdW5jdGlvbiBpc0NvbW1lbnRFbmQoY29kZTogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT0gY2hhcnMuJFNUQVIgJiYgbmV4dCA9PSBjaGFycy4kU0xBU0g7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nU3RhcnQoY29kZTogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgbGV0IHRhcmdldCA9IGNvZGU7XG4gIGlmICh0YXJnZXQgPT0gY2hhcnMuJEJBQ0tTTEFTSCkge1xuICAgIHRhcmdldCA9IG5leHQ7XG4gIH1cbiAgcmV0dXJuIHRhcmdldCA9PSBjaGFycy4kRFEgfHwgdGFyZ2V0ID09IGNoYXJzLiRTUTtcbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyU3RhcnQoY29kZTogbnVtYmVyLCBuZXh0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgbGV0IHRhcmdldCA9IGNvZGU7XG4gIGlmICh0YXJnZXQgPT0gY2hhcnMuJE1JTlVTKSB7XG4gICAgdGFyZ2V0ID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiBjaGFycy5pc0FzY2lpTGV0dGVyKHRhcmdldCkgfHwgdGFyZ2V0ID09IGNoYXJzLiRCQUNLU0xBU0ggfHwgdGFyZ2V0ID09IGNoYXJzLiRNSU5VUyB8fFxuICAgICAgdGFyZ2V0ID09IGNoYXJzLiRfO1xufVxuXG5mdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0KHRhcmdldDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjaGFycy5pc0FzY2lpTGV0dGVyKHRhcmdldCkgfHwgdGFyZ2V0ID09IGNoYXJzLiRCQUNLU0xBU0ggfHwgdGFyZ2V0ID09IGNoYXJzLiRNSU5VUyB8fFxuICAgICAgdGFyZ2V0ID09IGNoYXJzLiRfIHx8IGNoYXJzLmlzRGlnaXQodGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBzZXVkb1NlbGVjdG9yQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgY2FzZSBjaGFycy4kUlBBUkVOOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkS2V5ZnJhbWVCbG9ja0NoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT0gY2hhcnMuJFBFUkNFTlQ7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRBdHRyaWJ1dGVTZWxlY3RvckNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gdmFsdWVeKnwkfj1zb21ldGhpbmdcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kJDpcbiAgICBjYXNlIGNoYXJzLiRQSVBFOlxuICAgIGNhc2UgY2hhcnMuJENBUkVUOlxuICAgIGNhc2UgY2hhcnMuJFRJTERBOlxuICAgIGNhc2UgY2hhcnMuJFNUQVI6XG4gICAgY2FzZSBjaGFycy4kRVE6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRTZWxlY3RvckNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gc2VsZWN0b3IgWyBrZXkgICA9IHZhbHVlIF1cbiAgLy8gSURFTlQgICAgQyBJREVOVCBDIElERU5UIENcbiAgLy8gI2lkLCAuY2xhc3MsICorfj5cbiAgLy8gdGFnOlBTRVVET1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRIQVNIOlxuICAgIGNhc2UgY2hhcnMuJFBFUklPRDpcbiAgICBjYXNlIGNoYXJzLiRUSUxEQTpcbiAgICBjYXNlIGNoYXJzLiRTVEFSOlxuICAgIGNhc2UgY2hhcnMuJFBMVVM6XG4gICAgY2FzZSBjaGFycy4kR1Q6XG4gICAgY2FzZSBjaGFycy4kQ09MT046XG4gICAgY2FzZSBjaGFycy4kUElQRTpcbiAgICBjYXNlIGNoYXJzLiRDT01NQTpcbiAgICBjYXNlIGNoYXJzLiRMQlJBQ0tFVDpcbiAgICBjYXNlIGNoYXJzLiRSQlJBQ0tFVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFN0eWxlQmxvY2tDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8vIGtleTp2YWx1ZTtcbiAgLy8ga2V5OmNhbGMoc29tZXRoaW5nIC4uLiApXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgY2hhcnMuJEhBU0g6XG4gICAgY2FzZSBjaGFycy4kU0VNSUNPTE9OOlxuICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgIGNhc2UgY2hhcnMuJFBFUkNFTlQ6XG4gICAgY2FzZSBjaGFycy4kU0xBU0g6XG4gICAgY2FzZSBjaGFycy4kQkFDS1NMQVNIOlxuICAgIGNhc2UgY2hhcnMuJEJBTkc6XG4gICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgIGNhc2UgY2hhcnMuJExQQVJFTjpcbiAgICBjYXNlIGNoYXJzLiRSUEFSRU46XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRNZWRpYVF1ZXJ5UnVsZUNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gKG1pbi13aWR0aDogNy41ZW0pIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kTFBBUkVOOlxuICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICBjYXNlIGNoYXJzLiRQRVJDRU5UOlxuICAgIGNhc2UgY2hhcnMuJFBFUklPRDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZEF0UnVsZUNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgLy8gQGRvY3VtZW50IHVybChodHRwOi8vd3d3LnczLm9yZy9wYWdlP3NvbWV0aGluZz1vbiNoYXNoKSxcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kTFBBUkVOOlxuICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICBjYXNlIGNoYXJzLiRQRVJDRU5UOlxuICAgIGNhc2UgY2hhcnMuJFBFUklPRDpcbiAgICBjYXNlIGNoYXJzLiRTTEFTSDpcbiAgICBjYXNlIGNoYXJzLiRCQUNLU0xBU0g6XG4gICAgY2FzZSBjaGFycy4kSEFTSDpcbiAgICBjYXNlIGNoYXJzLiRFUTpcbiAgICBjYXNlIGNoYXJzLiRRVUVTVElPTjpcbiAgICBjYXNlIGNoYXJzLiRBTVBFUlNBTkQ6XG4gICAgY2FzZSBjaGFycy4kU1RBUjpcbiAgICBjYXNlIGNoYXJzLiRDT01NQTpcbiAgICBjYXNlIGNoYXJzLiRNSU5VUzpcbiAgICBjYXNlIGNoYXJzLiRQTFVTOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkU3R5bGVGdW5jdGlvbkNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kUEVSSU9EOlxuICAgIGNhc2UgY2hhcnMuJE1JTlVTOlxuICAgIGNhc2UgY2hhcnMuJFBMVVM6XG4gICAgY2FzZSBjaGFycy4kU1RBUjpcbiAgICBjYXNlIGNoYXJzLiRTTEFTSDpcbiAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgY2FzZSBjaGFycy4kUlBBUkVOOlxuICAgIGNhc2UgY2hhcnMuJENPTU1BOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkQmxvY2tDaGFyYWN0ZXIoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIC8vIEBzb21ldGhpbmcgeyB9XG4gIC8vIElERU5UXG4gIHJldHVybiBjb2RlID09IGNoYXJzLiRBVDtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZENzc0NoYXJhY3Rlcihjb2RlOiBudW1iZXIsIG1vZGU6IENzc0xleGVyTW9kZSk6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIENzc0xleGVyTW9kZS5BTEw6XG4gICAgY2FzZSBDc3NMZXhlck1vZGUuQUxMX1RSQUNLX1dTOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIENzc0xleGVyTW9kZS5TRUxFQ1RPUjpcbiAgICAgIHJldHVybiBpc1ZhbGlkU2VsZWN0b3JDaGFyYWN0ZXIoY29kZSk7XG5cbiAgICBjYXNlIENzc0xleGVyTW9kZS5QU0VVRE9fU0VMRUNUT1JfV0lUSF9BUkdVTUVOVFM6XG4gICAgICByZXR1cm4gaXNWYWxpZFBzZXVkb1NlbGVjdG9yQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgY2FzZSBDc3NMZXhlck1vZGUuQVRUUklCVVRFX1NFTEVDVE9SOlxuICAgICAgcmV0dXJuIGlzVmFsaWRBdHRyaWJ1dGVTZWxlY3RvckNoYXJhY3Rlcihjb2RlKTtcblxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLk1FRElBX1FVRVJZOlxuICAgICAgcmV0dXJuIGlzVmFsaWRNZWRpYVF1ZXJ5UnVsZUNoYXJhY3Rlcihjb2RlKTtcblxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLkFUX1JVTEVfUVVFUlk6XG4gICAgICByZXR1cm4gaXNWYWxpZEF0UnVsZUNoYXJhY3Rlcihjb2RlKTtcblxuICAgIGNhc2UgQ3NzTGV4ZXJNb2RlLktFWUZSQU1FX0JMT0NLOlxuICAgICAgcmV0dXJuIGlzVmFsaWRLZXlmcmFtZUJsb2NrQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgY2FzZSBDc3NMZXhlck1vZGUuU1RZTEVfQkxPQ0s6XG4gICAgY2FzZSBDc3NMZXhlck1vZGUuU1RZTEVfVkFMVUU6XG4gICAgICByZXR1cm4gaXNWYWxpZFN0eWxlQmxvY2tDaGFyYWN0ZXIoY29kZSk7XG5cbiAgICBjYXNlIENzc0xleGVyTW9kZS5TVFlMRV9DQUxDX0ZVTkNUSU9OOlxuICAgICAgcmV0dXJuIGlzVmFsaWRTdHlsZUZ1bmN0aW9uQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgY2FzZSBDc3NMZXhlck1vZGUuQkxPQ0s6XG4gICAgICByZXR1cm4gaXNWYWxpZEJsb2NrQ2hhcmFjdGVyKGNvZGUpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFyQ29kZShpbnB1dDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGluZGV4ID49IGlucHV0Lmxlbmd0aCA/IGNoYXJzLiRFT0YgOiBpbnB1dC5jaGFyQ29kZUF0KGluZGV4KTtcbn1cblxuZnVuY3Rpb24gY2hhclN0cihjb2RlOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kRkY6XG4gICAgY2FzZSBjaGFycy4kQ1I6XG4gICAgY2FzZSBjaGFycy4kTEY6XG4gICAgY2FzZSBjaGFycy4kVlRBQjpcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19