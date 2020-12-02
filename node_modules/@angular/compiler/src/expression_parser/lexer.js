/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/expression_parser/lexer", ["require", "exports", "@angular/compiler/src/chars"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chars = require("@angular/compiler/src/chars");
    var TokenType;
    (function (TokenType) {
        TokenType[TokenType["Character"] = 0] = "Character";
        TokenType[TokenType["Identifier"] = 1] = "Identifier";
        TokenType[TokenType["Keyword"] = 2] = "Keyword";
        TokenType[TokenType["String"] = 3] = "String";
        TokenType[TokenType["Operator"] = 4] = "Operator";
        TokenType[TokenType["Number"] = 5] = "Number";
        TokenType[TokenType["Error"] = 6] = "Error";
    })(TokenType = exports.TokenType || (exports.TokenType = {}));
    var KEYWORDS = ['var', 'let', 'as', 'null', 'undefined', 'true', 'false', 'if', 'else', 'this'];
    var Lexer = /** @class */ (function () {
        function Lexer() {
        }
        Lexer.prototype.tokenize = function (text) {
            var scanner = new _Scanner(text);
            var tokens = [];
            var token = scanner.scanToken();
            while (token != null) {
                tokens.push(token);
                token = scanner.scanToken();
            }
            return tokens;
        };
        return Lexer;
    }());
    exports.Lexer = Lexer;
    var Token = /** @class */ (function () {
        function Token(index, end, type, numValue, strValue) {
            this.index = index;
            this.end = end;
            this.type = type;
            this.numValue = numValue;
            this.strValue = strValue;
        }
        Token.prototype.isCharacter = function (code) {
            return this.type == TokenType.Character && this.numValue == code;
        };
        Token.prototype.isNumber = function () {
            return this.type == TokenType.Number;
        };
        Token.prototype.isString = function () {
            return this.type == TokenType.String;
        };
        Token.prototype.isOperator = function (operator) {
            return this.type == TokenType.Operator && this.strValue == operator;
        };
        Token.prototype.isIdentifier = function () {
            return this.type == TokenType.Identifier;
        };
        Token.prototype.isKeyword = function () {
            return this.type == TokenType.Keyword;
        };
        Token.prototype.isKeywordLet = function () {
            return this.type == TokenType.Keyword && this.strValue == 'let';
        };
        Token.prototype.isKeywordAs = function () {
            return this.type == TokenType.Keyword && this.strValue == 'as';
        };
        Token.prototype.isKeywordNull = function () {
            return this.type == TokenType.Keyword && this.strValue == 'null';
        };
        Token.prototype.isKeywordUndefined = function () {
            return this.type == TokenType.Keyword && this.strValue == 'undefined';
        };
        Token.prototype.isKeywordTrue = function () {
            return this.type == TokenType.Keyword && this.strValue == 'true';
        };
        Token.prototype.isKeywordFalse = function () {
            return this.type == TokenType.Keyword && this.strValue == 'false';
        };
        Token.prototype.isKeywordThis = function () {
            return this.type == TokenType.Keyword && this.strValue == 'this';
        };
        Token.prototype.isError = function () {
            return this.type == TokenType.Error;
        };
        Token.prototype.toNumber = function () {
            return this.type == TokenType.Number ? this.numValue : -1;
        };
        Token.prototype.toString = function () {
            switch (this.type) {
                case TokenType.Character:
                case TokenType.Identifier:
                case TokenType.Keyword:
                case TokenType.Operator:
                case TokenType.String:
                case TokenType.Error:
                    return this.strValue;
                case TokenType.Number:
                    return this.numValue.toString();
                default:
                    return null;
            }
        };
        return Token;
    }());
    exports.Token = Token;
    function newCharacterToken(index, end, code) {
        return new Token(index, end, TokenType.Character, code, String.fromCharCode(code));
    }
    function newIdentifierToken(index, end, text) {
        return new Token(index, end, TokenType.Identifier, 0, text);
    }
    function newKeywordToken(index, end, text) {
        return new Token(index, end, TokenType.Keyword, 0, text);
    }
    function newOperatorToken(index, end, text) {
        return new Token(index, end, TokenType.Operator, 0, text);
    }
    function newStringToken(index, end, text) {
        return new Token(index, end, TokenType.String, 0, text);
    }
    function newNumberToken(index, end, n) {
        return new Token(index, end, TokenType.Number, n, '');
    }
    function newErrorToken(index, end, message) {
        return new Token(index, end, TokenType.Error, 0, message);
    }
    exports.EOF = new Token(-1, -1, TokenType.Character, 0, '');
    var _Scanner = /** @class */ (function () {
        function _Scanner(input) {
            this.input = input;
            this.peek = 0;
            this.index = -1;
            this.length = input.length;
            this.advance();
        }
        _Scanner.prototype.advance = function () {
            this.peek = ++this.index >= this.length ? chars.$EOF : this.input.charCodeAt(this.index);
        };
        _Scanner.prototype.scanToken = function () {
            var input = this.input, length = this.length;
            var peek = this.peek, index = this.index;
            // Skip whitespace.
            while (peek <= chars.$SPACE) {
                if (++index >= length) {
                    peek = chars.$EOF;
                    break;
                }
                else {
                    peek = input.charCodeAt(index);
                }
            }
            this.peek = peek;
            this.index = index;
            if (index >= length) {
                return null;
            }
            // Handle identifiers and numbers.
            if (isIdentifierStart(peek))
                return this.scanIdentifier();
            if (chars.isDigit(peek))
                return this.scanNumber(index);
            var start = index;
            switch (peek) {
                case chars.$PERIOD:
                    this.advance();
                    return chars.isDigit(this.peek) ? this.scanNumber(start) :
                        newCharacterToken(start, this.index, chars.$PERIOD);
                case chars.$LPAREN:
                case chars.$RPAREN:
                case chars.$LBRACE:
                case chars.$RBRACE:
                case chars.$LBRACKET:
                case chars.$RBRACKET:
                case chars.$COMMA:
                case chars.$COLON:
                case chars.$SEMICOLON:
                    return this.scanCharacter(start, peek);
                case chars.$SQ:
                case chars.$DQ:
                    return this.scanString();
                case chars.$HASH:
                case chars.$PLUS:
                case chars.$MINUS:
                case chars.$STAR:
                case chars.$SLASH:
                case chars.$PERCENT:
                case chars.$CARET:
                    return this.scanOperator(start, String.fromCharCode(peek));
                case chars.$QUESTION:
                    return this.scanComplexOperator(start, '?', chars.$PERIOD, '.');
                case chars.$LT:
                case chars.$GT:
                    return this.scanComplexOperator(start, String.fromCharCode(peek), chars.$EQ, '=');
                case chars.$BANG:
                case chars.$EQ:
                    return this.scanComplexOperator(start, String.fromCharCode(peek), chars.$EQ, '=', chars.$EQ, '=');
                case chars.$AMPERSAND:
                    return this.scanComplexOperator(start, '&', chars.$AMPERSAND, '&');
                case chars.$BAR:
                    return this.scanComplexOperator(start, '|', chars.$BAR, '|');
                case chars.$NBSP:
                    while (chars.isWhitespace(this.peek))
                        this.advance();
                    return this.scanToken();
            }
            this.advance();
            return this.error("Unexpected character [" + String.fromCharCode(peek) + "]", 0);
        };
        _Scanner.prototype.scanCharacter = function (start, code) {
            this.advance();
            return newCharacterToken(start, this.index, code);
        };
        _Scanner.prototype.scanOperator = function (start, str) {
            this.advance();
            return newOperatorToken(start, this.index, str);
        };
        /**
         * Tokenize a 2/3 char long operator
         *
         * @param start start index in the expression
         * @param one first symbol (always part of the operator)
         * @param twoCode code point for the second symbol
         * @param two second symbol (part of the operator when the second code point matches)
         * @param threeCode code point for the third symbol
         * @param three third symbol (part of the operator when provided and matches source expression)
         */
        _Scanner.prototype.scanComplexOperator = function (start, one, twoCode, two, threeCode, three) {
            this.advance();
            var str = one;
            if (this.peek == twoCode) {
                this.advance();
                str += two;
            }
            if (threeCode != null && this.peek == threeCode) {
                this.advance();
                str += three;
            }
            return newOperatorToken(start, this.index, str);
        };
        _Scanner.prototype.scanIdentifier = function () {
            var start = this.index;
            this.advance();
            while (isIdentifierPart(this.peek))
                this.advance();
            var str = this.input.substring(start, this.index);
            return KEYWORDS.indexOf(str) > -1 ? newKeywordToken(start, this.index, str) :
                newIdentifierToken(start, this.index, str);
        };
        _Scanner.prototype.scanNumber = function (start) {
            var simple = (this.index === start);
            this.advance(); // Skip initial digit.
            while (true) {
                if (chars.isDigit(this.peek)) {
                    // Do nothing.
                }
                else if (this.peek == chars.$PERIOD) {
                    simple = false;
                }
                else if (isExponentStart(this.peek)) {
                    this.advance();
                    if (isExponentSign(this.peek))
                        this.advance();
                    if (!chars.isDigit(this.peek))
                        return this.error('Invalid exponent', -1);
                    simple = false;
                }
                else {
                    break;
                }
                this.advance();
            }
            var str = this.input.substring(start, this.index);
            var value = simple ? parseIntAutoRadix(str) : parseFloat(str);
            return newNumberToken(start, this.index, value);
        };
        _Scanner.prototype.scanString = function () {
            var start = this.index;
            var quote = this.peek;
            this.advance(); // Skip initial quote.
            var buffer = '';
            var marker = this.index;
            var input = this.input;
            while (this.peek != quote) {
                if (this.peek == chars.$BACKSLASH) {
                    buffer += input.substring(marker, this.index);
                    this.advance();
                    var unescapedCode = void 0;
                    // Workaround for TS2.1-introduced type strictness
                    this.peek = this.peek;
                    if (this.peek == chars.$u) {
                        // 4 character hex code for unicode character.
                        var hex = input.substring(this.index + 1, this.index + 5);
                        if (/^[0-9a-f]+$/i.test(hex)) {
                            unescapedCode = parseInt(hex, 16);
                        }
                        else {
                            return this.error("Invalid unicode escape [\\u" + hex + "]", 0);
                        }
                        for (var i = 0; i < 5; i++) {
                            this.advance();
                        }
                    }
                    else {
                        unescapedCode = unescape(this.peek);
                        this.advance();
                    }
                    buffer += String.fromCharCode(unescapedCode);
                    marker = this.index;
                }
                else if (this.peek == chars.$EOF) {
                    return this.error('Unterminated quote', 0);
                }
                else {
                    this.advance();
                }
            }
            var last = input.substring(marker, this.index);
            this.advance(); // Skip terminating quote.
            return newStringToken(start, this.index, buffer + last);
        };
        _Scanner.prototype.error = function (message, offset) {
            var position = this.index + offset;
            return newErrorToken(position, this.index, "Lexer Error: " + message + " at column " + position + " in expression [" + this.input + "]");
        };
        return _Scanner;
    }());
    function isIdentifierStart(code) {
        return (chars.$a <= code && code <= chars.$z) || (chars.$A <= code && code <= chars.$Z) ||
            (code == chars.$_) || (code == chars.$$);
    }
    function isIdentifier(input) {
        if (input.length == 0)
            return false;
        var scanner = new _Scanner(input);
        if (!isIdentifierStart(scanner.peek))
            return false;
        scanner.advance();
        while (scanner.peek !== chars.$EOF) {
            if (!isIdentifierPart(scanner.peek))
                return false;
            scanner.advance();
        }
        return true;
    }
    exports.isIdentifier = isIdentifier;
    function isIdentifierPart(code) {
        return chars.isAsciiLetter(code) || chars.isDigit(code) || (code == chars.$_) ||
            (code == chars.$$);
    }
    function isExponentStart(code) {
        return code == chars.$e || code == chars.$E;
    }
    function isExponentSign(code) {
        return code == chars.$MINUS || code == chars.$PLUS;
    }
    function isQuote(code) {
        return code === chars.$SQ || code === chars.$DQ || code === chars.$BT;
    }
    exports.isQuote = isQuote;
    function unescape(code) {
        switch (code) {
            case chars.$n:
                return chars.$LF;
            case chars.$f:
                return chars.$FF;
            case chars.$r:
                return chars.$CR;
            case chars.$t:
                return chars.$TAB;
            case chars.$v:
                return chars.$VTAB;
            default:
                return code;
        }
    }
    function parseIntAutoRadix(text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV4ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZXhwcmVzc2lvbl9wYXJzZXIvbGV4ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxtREFBa0M7SUFFbEMsSUFBWSxTQVFYO0lBUkQsV0FBWSxTQUFTO1FBQ25CLG1EQUFTLENBQUE7UUFDVCxxREFBVSxDQUFBO1FBQ1YsK0NBQU8sQ0FBQTtRQUNQLDZDQUFNLENBQUE7UUFDTixpREFBUSxDQUFBO1FBQ1IsNkNBQU0sQ0FBQTtRQUNOLDJDQUFLLENBQUE7SUFDUCxDQUFDLEVBUlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFRcEI7SUFFRCxJQUFNLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRWxHO1FBQUE7UUFXQSxDQUFDO1FBVkMsd0JBQVEsR0FBUixVQUFTLElBQVk7WUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO1lBQzNCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQyxPQUFPLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDN0I7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0gsWUFBQztJQUFELENBQUMsQUFYRCxJQVdDO0lBWFksc0JBQUs7SUFhbEI7UUFDRSxlQUNXLEtB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QUNuQixLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQixLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQixLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEtBQUssQ0FBQyxFQUFFO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNyQjtnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELFNBQVMsaUJBQWlCLENBQUMsSUFBWTtRQUNyQyxJQUFNLE1BQU0sR0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGNoYXJzIGZyb20gJy4uL2NoYXJzJztcblxuZXhwb3J0IGVudW0gVG9rZW5UeXBlIHtcbiAgQ2hhcmFjdGVyLFxuICBJZGVudGlmaWVyLFxuICBLZXl3b3JkLFxuICBTdHJpbmcsXG4gIE9wZXJhdG9yLFxuICBOdW1iZXIsXG4gIEVycm9yXG59XG5cbmNvbnN0IEtFWVdPUkRTID0gWyd2YXInLCAnbGV0JywgJ2FzJywgJ251bGwnLCAndW5kZWZpbmVkJywgJ3RydWUnLCAnZmFsc2UnLCAnaWYnLCAnZWxzZScsICd0aGlzJ107XG5cbmV4cG9ydCBjbGFzcyBMZXhlciB7XG4gIHRva2VuaXplKHRleHQ6IHN0cmluZyk6IFRva2VuW10ge1xuICAgIGNvbnN0IHNjYW5uZXIgPSBuZXcgX1NjYW5uZXIodGV4dCk7XG4gICAgY29uc3QgdG9rZW5zOiBUb2tlbltdID0gW107XG4gICAgbGV0IHRva2VuID0gc2Nhbm5lci5zY2FuVG9rZW4oKTtcbiAgICB3aGlsZSAodG9rZW4gIT0gbnVsbCkge1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSBzY2FubmVyLnNjYW5Ub2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGluZGV4OiBudW1iZXIsIHB1YmxpYyBlbmQ6IG51bWJlciwgcHVibGljIHR5cGU6IFRva2VuVHlwZSwgcHVibGljIG51bVZhbHVlOiBudW1iZXIsXG4gICAgICBwdWJsaWMgc3RyVmFsdWU6IHN0cmluZykge31cblxuICBpc0NoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IFRva2VuVHlwZS5DaGFyYWN0ZXIgJiYgdGhpcy5udW1WYWx1ZSA9PSBjb2RlO1xuICB9XG5cbiAgaXNOdW1iZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuTnVtYmVyO1xuICB9XG5cbiAgaXNTdHJpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuU3RyaW5nO1xuICB9XG5cbiAgaXNPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuT3BlcmF0b3IgJiYgdGhpcy5zdHJWYWx1ZSA9PSBvcGVyYXRvcjtcbiAgfVxuXG4gIGlzSWRlbnRpZmllcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IFRva2VuVHlwZS5JZGVudGlmaWVyO1xuICB9XG5cbiAgaXNLZXl3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gVG9rZW5UeXBlLktleXdvcmQ7XG4gIH1cblxuICBpc0tleXdvcmRMZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09ICdsZXQnO1xuICB9XG5cbiAgaXNLZXl3b3JkQXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09ICdhcyc7XG4gIH1cblxuICBpc0tleXdvcmROdWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PSAnbnVsbCc7XG4gIH1cblxuICBpc0tleXdvcmRVbmRlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgaXNLZXl3b3JkVHJ1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IFRva2VuVHlwZS5LZXl3b3JkICYmIHRoaXMuc3RyVmFsdWUgPT0gJ3RydWUnO1xuICB9XG5cbiAgaXNLZXl3b3JkRmFsc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PSBUb2tlblR5cGUuS2V5d29yZCAmJiB0aGlzLnN0clZhbHVlID09ICdmYWxzZSc7XG4gIH1cblxuICBpc0tleXdvcmRUaGlzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gVG9rZW5UeXBlLktleXdvcmQgJiYgdGhpcy5zdHJWYWx1ZSA9PSAndGhpcyc7XG4gIH1cblxuICBpc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT0gVG9rZW5UeXBlLkVycm9yO1xuICB9XG5cbiAgdG9OdW1iZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09IFRva2VuVHlwZS5OdW1iZXIgPyB0aGlzLm51bVZhbHVlIDogLTE7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmd8bnVsbCB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgVG9rZW5UeXBlLkNoYXJhY3RlcjpcbiAgICAgIGNhc2UgVG9rZW5UeXBlLklkZW50aWZpZXI6XG4gICAgICBjYXNlIFRva2VuVHlwZS5LZXl3b3JkOlxuICAgICAgY2FzZSBUb2tlblR5cGUuT3BlcmF0b3I6XG4gICAgICBjYXNlIFRva2VuVHlwZS5TdHJpbmc6XG4gICAgICBjYXNlIFRva2VuVHlwZS5FcnJvcjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyVmFsdWU7XG4gICAgICBjYXNlIFRva2VuVHlwZS5OdW1iZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm51bVZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbmV3Q2hhcmFjdGVyVG9rZW4oaW5kZXg6IG51bWJlciwgZW5kOiBudW1iZXIsIGNvZGU6IG51bWJlcik6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgZW5kLCBUb2tlblR5cGUuQ2hhcmFjdGVyLCBjb2RlLCBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpKTtcbn1cblxuZnVuY3Rpb24gbmV3SWRlbnRpZmllclRva2VuKGluZGV4OiBudW1iZXIsIGVuZDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIHJldHVybiBuZXcgVG9rZW4oaW5kZXgsIGVuZCwgVG9rZW5UeXBlLklkZW50aWZpZXIsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdLZXl3b3JkVG9rZW4oaW5kZXg6IG51bWJlciwgZW5kOiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgZW5kLCBUb2tlblR5cGUuS2V5d29yZCwgMCwgdGV4dCk7XG59XG5cbmZ1bmN0aW9uIG5ld09wZXJhdG9yVG9rZW4oaW5kZXg6IG51bWJlciwgZW5kOiBudW1iZXIsIHRleHQ6IHN0cmluZyk6IFRva2VuIHtcbiAgcmV0dXJuIG5ldyBUb2tlbihpbmRleCwgZW5kLCBUb2tlblR5cGUuT3BlcmF0b3IsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdTdHJpbmdUb2tlbihpbmRleDogbnVtYmVyLCBlbmQ6IG51bWJlciwgdGV4dDogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBlbmQsIFRva2VuVHlwZS5TdHJpbmcsIDAsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBuZXdOdW1iZXJUb2tlbihpbmRleDogbnVtYmVyLCBlbmQ6IG51bWJlciwgbjogbnVtYmVyKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBlbmQsIFRva2VuVHlwZS5OdW1iZXIsIG4sICcnKTtcbn1cblxuZnVuY3Rpb24gbmV3RXJyb3JUb2tlbihpbmRleDogbnVtYmVyLCBlbmQ6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKTogVG9rZW4ge1xuICByZXR1cm4gbmV3IFRva2VuKGluZGV4LCBlbmQsIFRva2VuVHlwZS5FcnJvciwgMCwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCBjb25zdCBFT0Y6IFRva2VuID0gbmV3IFRva2VuKC0xLCAtMSwgVG9rZW5UeXBlLkNoYXJhY3RlciwgMCwgJycpO1xuXG5jbGFzcyBfU2Nhbm5lciB7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBwZWVrOiBudW1iZXIgPSAwO1xuICBpbmRleDogbnVtYmVyID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlucHV0OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgfVxuXG4gIGFkdmFuY2UoKSB7XG4gICAgdGhpcy5wZWVrID0gKyt0aGlzLmluZGV4ID49IHRoaXMubGVuZ3RoID8gY2hhcnMuJEVPRiA6IHRoaXMuaW5wdXQuY2hhckNvZGVBdCh0aGlzLmluZGV4KTtcbiAgfVxuXG4gIHNjYW5Ub2tlbigpOiBUb2tlbnxudWxsIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQsIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICAgIGxldCBwZWVrID0gdGhpcy5wZWVrLCBpbmRleCA9IHRoaXMuaW5kZXg7XG5cbiAgICAvLyBTa2lwIHdoaXRlc3BhY2UuXG4gICAgd2hpbGUgKHBlZWsgPD0gY2hhcnMuJFNQQUNFKSB7XG4gICAgICBpZiAoKytpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgcGVlayA9IGNoYXJzLiRFT0Y7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVlayA9IGlucHV0LmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGVlayA9IHBlZWs7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGlkZW50aWZpZXJzIGFuZCBudW1iZXJzLlxuICAgIGlmIChpc0lkZW50aWZpZXJTdGFydChwZWVrKSkgcmV0dXJuIHRoaXMuc2NhbklkZW50aWZpZXIoKTtcbiAgICBpZiAoY2hhcnMuaXNEaWdpdChwZWVrKSkgcmV0dXJuIHRoaXMuc2Nhbk51bWJlcihpbmRleCk7XG5cbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gaW5kZXg7XG4gICAgc3dpdGNoIChwZWVrKSB7XG4gICAgICBjYXNlIGNoYXJzLiRQRVJJT0Q6XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICByZXR1cm4gY2hhcnMuaXNEaWdpdCh0aGlzLnBlZWspID8gdGhpcy5zY2FuTnVtYmVyKHN0YXJ0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgdGhpcy5pbmRleCwgY2hhcnMuJFBFUklPRCk7XG4gICAgICBjYXNlIGNoYXJzLiRMUEFSRU46XG4gICAgICBjYXNlIGNoYXJzLiRSUEFSRU46XG4gICAgICBjYXNlIGNoYXJzLiRMQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRSQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRMQlJBQ0tFVDpcbiAgICAgIGNhc2UgY2hhcnMuJFJCUkFDS0VUOlxuICAgICAgY2FzZSBjaGFycy4kQ09NTUE6XG4gICAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICAgIGNhc2UgY2hhcnMuJFNFTUlDT0xPTjpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNoYXJhY3RlcihzdGFydCwgcGVlayk7XG4gICAgICBjYXNlIGNoYXJzLiRTUTpcbiAgICAgIGNhc2UgY2hhcnMuJERROlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuU3RyaW5nKCk7XG4gICAgICBjYXNlIGNoYXJzLiRIQVNIOlxuICAgICAgY2FzZSBjaGFycy4kUExVUzpcbiAgICAgIGNhc2UgY2hhcnMuJE1JTlVTOlxuICAgICAgY2FzZSBjaGFycy4kU1RBUjpcbiAgICAgIGNhc2UgY2hhcnMuJFNMQVNIOlxuICAgICAgY2FzZSBjaGFycy4kUEVSQ0VOVDpcbiAgICAgIGNhc2UgY2hhcnMuJENBUkVUOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuT3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlaykpO1xuICAgICAgY2FzZSBjaGFycy4kUVVFU1RJT046XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsICc/JywgY2hhcnMuJFBFUklPRCwgJy4nKTtcbiAgICAgIGNhc2UgY2hhcnMuJExUOlxuICAgICAgY2FzZSBjaGFycy4kR1Q6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsIFN0cmluZy5mcm9tQ2hhckNvZGUocGVlayksIGNoYXJzLiRFUSwgJz0nKTtcbiAgICAgIGNhc2UgY2hhcnMuJEJBTkc6XG4gICAgICBjYXNlIGNoYXJzLiRFUTpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbkNvbXBsZXhPcGVyYXRvcihcbiAgICAgICAgICAgIHN0YXJ0LCBTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspLCBjaGFycy4kRVEsICc9JywgY2hhcnMuJEVRLCAnPScpO1xuICAgICAgY2FzZSBjaGFycy4kQU1QRVJTQU5EOlxuICAgICAgICByZXR1cm4gdGhpcy5zY2FuQ29tcGxleE9wZXJhdG9yKHN0YXJ0LCAnJicsIGNoYXJzLiRBTVBFUlNBTkQsICcmJyk7XG4gICAgICBjYXNlIGNoYXJzLiRCQVI6XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Db21wbGV4T3BlcmF0b3Ioc3RhcnQsICd8JywgY2hhcnMuJEJBUiwgJ3wnKTtcbiAgICAgIGNhc2UgY2hhcnMuJE5CU1A6XG4gICAgICAgIHdoaWxlIChjaGFycy5pc1doaXRlc3BhY2UodGhpcy5wZWVrKSkgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYW5Ub2tlbigpO1xuICAgIH1cblxuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIGNoYXJhY3RlciBbJHtTdHJpbmcuZnJvbUNoYXJDb2RlKHBlZWspfV1gLCAwKTtcbiAgfVxuXG4gIHNjYW5DaGFyYWN0ZXIoc3RhcnQ6IG51bWJlciwgY29kZTogbnVtYmVyKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIHJldHVybiBuZXdDaGFyYWN0ZXJUb2tlbihzdGFydCwgdGhpcy5pbmRleCwgY29kZSk7XG4gIH1cblxuXG4gIHNjYW5PcGVyYXRvcihzdGFydDogbnVtYmVyLCBzdHI6IHN0cmluZyk6IFRva2VuIHtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbmV3T3BlcmF0b3JUb2tlbihzdGFydCwgdGhpcy5pbmRleCwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2tlbml6ZSBhIDIvMyBjaGFyIGxvbmcgb3BlcmF0b3JcbiAgICpcbiAgICogQHBhcmFtIHN0YXJ0IHN0YXJ0IGluZGV4IGluIHRoZSBleHByZXNzaW9uXG4gICAqIEBwYXJhbSBvbmUgZmlyc3Qgc3ltYm9sIChhbHdheXMgcGFydCBvZiB0aGUgb3BlcmF0b3IpXG4gICAqIEBwYXJhbSB0d29Db2RlIGNvZGUgcG9pbnQgZm9yIHRoZSBzZWNvbmQgc3ltYm9sXG4gICAqIEBwYXJhbSB0d28gc2Vjb25kIHN5bWJvbCAocGFydCBvZiB0aGUgb3BlcmF0b3Igd2hlbiB0aGUgc2Vjb25kIGNvZGUgcG9pbnQgbWF0Y2hlcylcbiAgICogQHBhcmFtIHRocmVlQ29kZSBjb2RlIHBvaW50IGZvciB0aGUgdGhpcmQgc3ltYm9sXG4gICAqIEBwYXJhbSB0aHJlZSB0aGlyZCBzeW1ib2wgKHBhcnQgb2YgdGhlIG9wZXJhdG9yIHdoZW4gcHJvdmlkZWQgYW5kIG1hdGNoZXMgc291cmNlIGV4cHJlc3Npb24pXG4gICAqL1xuICBzY2FuQ29tcGxleE9wZXJhdG9yKFxuICAgICAgc3RhcnQ6IG51bWJlciwgb25lOiBzdHJpbmcsIHR3b0NvZGU6IG51bWJlciwgdHdvOiBzdHJpbmcsIHRocmVlQ29kZT86IG51bWJlcixcbiAgICAgIHRocmVlPzogc3RyaW5nKTogVG9rZW4ge1xuICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgIGxldCBzdHI6IHN0cmluZyA9IG9uZTtcbiAgICBpZiAodGhpcy5wZWVrID09IHR3b0NvZGUpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgc3RyICs9IHR3bztcbiAgICB9XG4gICAgaWYgKHRocmVlQ29kZSAhPSBudWxsICYmIHRoaXMucGVlayA9PSB0aHJlZUNvZGUpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgc3RyICs9IHRocmVlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3T3BlcmF0b3JUb2tlbihzdGFydCwgdGhpcy5pbmRleCwgc3RyKTtcbiAgfVxuXG4gIHNjYW5JZGVudGlmaWVyKCk6IFRva2VuIHtcbiAgICBjb25zdCBzdGFydDogbnVtYmVyID0gdGhpcy5pbmRleDtcbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICB3aGlsZSAoaXNJZGVudGlmaWVyUGFydCh0aGlzLnBlZWspKSB0aGlzLmFkdmFuY2UoKTtcbiAgICBjb25zdCBzdHI6IHN0cmluZyA9IHRoaXMuaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLmluZGV4KTtcbiAgICByZXR1cm4gS0VZV09SRFMuaW5kZXhPZihzdHIpID4gLTEgPyBuZXdLZXl3b3JkVG9rZW4oc3RhcnQsIHRoaXMuaW5kZXgsIHN0cikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0lkZW50aWZpZXJUb2tlbihzdGFydCwgdGhpcy5pbmRleCwgc3RyKTtcbiAgfVxuXG4gIHNjYW5OdW1iZXIoc3RhcnQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBsZXQgc2ltcGxlOiBib29sZWFuID0gKHRoaXMuaW5kZXggPT09IHN0YXJ0KTtcbiAgICB0aGlzLmFkdmFuY2UoKTsgIC8vIFNraXAgaW5pdGlhbCBkaWdpdC5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGNoYXJzLmlzRGlnaXQodGhpcy5wZWVrKSkge1xuICAgICAgICAvLyBEbyBub3RoaW5nLlxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsgPT0gY2hhcnMuJFBFUklPRCkge1xuICAgICAgICBzaW1wbGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFeHBvbmVudFN0YXJ0KHRoaXMucGVlaykpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgIGlmIChpc0V4cG9uZW50U2lnbih0aGlzLnBlZWspKSB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgaWYgKCFjaGFycy5pc0RpZ2l0KHRoaXMucGVlaykpIHJldHVybiB0aGlzLmVycm9yKCdJbnZhbGlkIGV4cG9uZW50JywgLTEpO1xuICAgICAgICBzaW1wbGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0cjogc3RyaW5nID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMuaW5kZXgpO1xuICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBzaW1wbGUgPyBwYXJzZUludEF1dG9SYWRpeChzdHIpIDogcGFyc2VGbG9hdChzdHIpO1xuICAgIHJldHVybiBuZXdOdW1iZXJUb2tlbihzdGFydCwgdGhpcy5pbmRleCwgdmFsdWUpO1xuICB9XG5cbiAgc2NhblN0cmluZygpOiBUb2tlbiB7XG4gICAgY29uc3Qgc3RhcnQ6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgcXVvdGU6IG51bWJlciA9IHRoaXMucGVlaztcbiAgICB0aGlzLmFkdmFuY2UoKTsgIC8vIFNraXAgaW5pdGlhbCBxdW90ZS5cblxuICAgIGxldCBidWZmZXI6IHN0cmluZyA9ICcnO1xuICAgIGxldCBtYXJrZXI6IG51bWJlciA9IHRoaXMuaW5kZXg7XG4gICAgY29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMuaW5wdXQ7XG5cbiAgICB3aGlsZSAodGhpcy5wZWVrICE9IHF1b3RlKSB7XG4gICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRCQUNLU0xBU0gpIHtcbiAgICAgICAgYnVmZmVyICs9IGlucHV0LnN1YnN0cmluZyhtYXJrZXIsIHRoaXMuaW5kZXgpO1xuICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgbGV0IHVuZXNjYXBlZENvZGU6IG51bWJlcjtcbiAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgVFMyLjEtaW50cm9kdWNlZCB0eXBlIHN0cmljdG5lc3NcbiAgICAgICAgdGhpcy5wZWVrID0gdGhpcy5wZWVrO1xuICAgICAgICBpZiAodGhpcy5wZWVrID09IGNoYXJzLiR1KSB7XG4gICAgICAgICAgLy8gNCBjaGFyYWN0ZXIgaGV4IGNvZGUgZm9yIHVuaWNvZGUgY2hhcmFjdGVyLlxuICAgICAgICAgIGNvbnN0IGhleDogc3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgaWYgKC9eWzAtOWEtZl0rJC9pLnRlc3QoaGV4KSkge1xuICAgICAgICAgICAgdW5lc2NhcGVkQ29kZSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcihgSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUke2hleH1dYCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmVzY2FwZWRDb2RlID0gdW5lc2NhcGUodGhpcy5wZWVrKTtcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1bmVzY2FwZWRDb2RlKTtcbiAgICAgICAgbWFya2VyID0gdGhpcy5pbmRleDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrID09IGNoYXJzLiRFT0YpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdDogc3RyaW5nID0gaW5wdXQuc3Vic3RyaW5nKG1hcmtlciwgdGhpcy5pbmRleCk7XG4gICAgdGhpcy5hZHZhbmNlKCk7ICAvLyBTa2lwIHRlcm1pbmF0aW5nIHF1b3RlLlxuXG4gICAgcmV0dXJuIG5ld1N0cmluZ1Rva2VuKHN0YXJ0LCB0aGlzLmluZGV4LCBidWZmZXIgKyBsYXN0KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBUb2tlbiB7XG4gICAgY29uc3QgcG9zaXRpb246IG51bWJlciA9IHRoaXMuaW5kZXggKyBvZmZzZXQ7XG4gICAgcmV0dXJuIG5ld0Vycm9yVG9rZW4oXG4gICAgICAgIHBvc2l0aW9uLCB0aGlzLmluZGV4LFxuICAgICAgICBgTGV4ZXIgRXJyb3I6ICR7bWVzc2FnZX0gYXQgY29sdW1uICR7cG9zaXRpb259IGluIGV4cHJlc3Npb24gWyR7dGhpcy5pbnB1dH1dYCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyU3RhcnQoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY2hhcnMuJGEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiR6KSB8fCAoY2hhcnMuJEEgPD0gY29kZSAmJiBjb2RlIDw9IGNoYXJzLiRaKSB8fFxuICAgICAgKGNvZGUgPT0gY2hhcnMuJF8pIHx8IChjb2RlID09IGNoYXJzLiQkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWRlbnRpZmllcihpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzY2FubmVyID0gbmV3IF9TY2FubmVyKGlucHV0KTtcbiAgaWYgKCFpc0lkZW50aWZpZXJTdGFydChzY2FubmVyLnBlZWspKSByZXR1cm4gZmFsc2U7XG4gIHNjYW5uZXIuYWR2YW5jZSgpO1xuICB3aGlsZSAoc2Nhbm5lci5wZWVrICE9PSBjaGFycy4kRU9GKSB7XG4gICAgaWYgKCFpc0lkZW50aWZpZXJQYXJ0KHNjYW5uZXIucGVlaykpIHJldHVybiBmYWxzZTtcbiAgICBzY2FubmVyLmFkdmFuY2UoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNJZGVudGlmaWVyUGFydChjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNoYXJzLmlzQXNjaWlMZXR0ZXIoY29kZSkgfHwgY2hhcnMuaXNEaWdpdChjb2RlKSB8fCAoY29kZSA9PSBjaGFycy4kXykgfHxcbiAgICAgIChjb2RlID09IGNoYXJzLiQkKTtcbn1cblxuZnVuY3Rpb24gaXNFeHBvbmVudFN0YXJ0KGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PSBjaGFycy4kZSB8fCBjb2RlID09IGNoYXJzLiRFO1xufVxuXG5mdW5jdGlvbiBpc0V4cG9uZW50U2lnbihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvZGUgPT0gY2hhcnMuJE1JTlVTIHx8IGNvZGUgPT0gY2hhcnMuJFBMVVM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1F1b3RlKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29kZSA9PT0gY2hhcnMuJFNRIHx8IGNvZGUgPT09IGNoYXJzLiREUSB8fCBjb2RlID09PSBjaGFycy4kQlQ7XG59XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGNvZGU6IG51bWJlcik6IG51bWJlciB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgY2hhcnMuJG46XG4gICAgICByZXR1cm4gY2hhcnMuJExGO1xuICAgIGNhc2UgY2hhcnMuJGY6XG4gICAgICByZXR1cm4gY2hhcnMuJEZGO1xuICAgIGNhc2UgY2hhcnMuJHI6XG4gICAgICByZXR1cm4gY2hhcnMuJENSO1xuICAgIGNhc2UgY2hhcnMuJHQ6XG4gICAgICByZXR1cm4gY2hhcnMuJFRBQjtcbiAgICBjYXNlIGNoYXJzLiR2OlxuICAgICAgcmV0dXJuIGNoYXJzLiRWVEFCO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY29kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUludEF1dG9SYWRpeCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCByZXN1bHQ6IG51bWJlciA9IHBhcnNlSW50KHRleHQpO1xuICBpZiAoaXNOYU4ocmVzdWx0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBpbnRlZ2VyIGxpdGVyYWwgd2hlbiBwYXJzaW5nICcgKyB0ZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19