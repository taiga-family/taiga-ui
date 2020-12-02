import { computeStyle } from '../../util';
var WebAnimationsPlayer = /** @class */ (function () {
    function WebAnimationsPlayer(element, keyframes, options, _specialStyles) {
        this.element = element;
        this.keyframes = keyframes;
        this.options = options;
        this._specialStyles = _specialStyles;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._initialized = false;
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this.time = 0;
        this.parentPlayer = null;
        this.currentSnapshot = {};
        this._duration = options['duration'];
        this._delay = options['delay'] || 0;
        this.time = this._duration + this._delay;
    }
    WebAnimationsPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    WebAnimationsPlayer.prototype.init = function () {
        this._buildPlayer();
        this._preparePlayerBeforeStart();
    };
    WebAnimationsPlayer.prototype._buildPlayer = function () {
        var _this = this;
        if (this._initialized)
            return;
        this._initialized = true;
        var keyframes = this.keyframes;
        this.domPlayer =
            this._triggerWebAnimation(this.element, keyframes, this.options);
        this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : {};
        this.domPlayer.addEventListener('finish', function () { return _this._onFinish(); });
    };
    WebAnimationsPlayer.prototype._preparePlayerBeforeStart = function () {
        // this is required so that the player doesn't start to animate right away
        if (this._delay) {
            this._resetDomPlayerState();
        }
        else {
            this.domPlayer.pause();
        }
    };
    /** @internal */
    WebAnimationsPlayer.prototype._triggerWebAnimation = function (element, keyframes, options) {
        // jscompiler doesn't seem to know animate is a native property because it's not fully
        // supported yet across common browsers (we polyfill it for Edge/Safari) [CL #143630929]
        return element['animate'](keyframes, options);
    };
    WebAnimationsPlayer.prototype.onStart = function (fn) {
        this._onStartFns.push(fn);
    };
    WebAnimationsPlayer.prototype.onDone = function (fn) {
        this._onDoneFns.push(fn);
    };
    WebAnimationsPlayer.prototype.onDestroy = function (fn) {
        this._onDestroyFns.push(fn);
    };
    WebAnimationsPlayer.prototype.play = function () {
        this._buildPlayer();
        if (!this.hasStarted()) {
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
            this._started = true;
            if (this._specialStyles) {
                this._specialStyles.start();
            }
        }
        this.domPlayer.play();
    };
    WebAnimationsPlayer.prototype.pause = function () {
        this.init();
        this.domPlayer.pause();
    };
    WebAnimationsPlayer.prototype.finish = function () {
        this.init();
        if (this._specialStyles) {
            this._specialStyles.finish();
        }
        this._onFinish();
        this.domPlayer.finish();
    };
    WebAnimationsPlayer.prototype.reset = function () {
        this._resetDomPlayerState();
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    WebAnimationsPlayer.prototype._resetDomPlayerState = function () {
        if (this.domPlayer) {
            this.domPlayer.cancel();
        }
    };
    WebAnimationsPlayer.prototype.restart = function () {
        this.reset();
        this.play();
    };
    WebAnimationsPlayer.prototype.hasStarted = function () {
        return this._started;
    };
    WebAnimationsPlayer.prototype.destroy = function () {
        if (!this._destroyed) {
            this._destroyed = true;
            this._resetDomPlayerState();
            this._onFinish();
            if (this._specialStyles) {
                this._specialStyles.destroy();
            }
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    WebAnimationsPlayer.prototype.setPosition = function (p) {
        this.domPlayer.currentTime = p * this.time;
    };
    WebAnimationsPlayer.prototype.getPosition = function () {
        return this.domPlayer.currentTime / this.time;
    };
    Object.defineProperty(WebAnimationsPlayer.prototype, "totalTime", {
        get: function () {
            return this._delay + this._duration;
        },
        enumerable: true,
        configurable: true
    });
    WebAnimationsPlayer.prototype.beforeDestroy = function () {
        var _this = this;
        var styles = {};
        if (this.hasStarted()) {
            Object.keys(this._finalKeyframe).forEach(function (prop) {
                if (prop != 'offset') {
                    styles[prop] =
                        _this._finished ? _this._finalKeyframe[prop] : computeStyle(_this.element, prop);
                }
            });
        }
        this.currentSnapshot = styles;
    };
    /** @internal */
    WebAnimationsPlayer.prototype.triggerCallback = function (phaseName) {
        var methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach(function (fn) { return fn(); });
        methods.length = 0;
    };
    return WebAnimationsPlayer;
}());
export { WebAnimationsPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViX2FuaW1hdGlvbnNfcGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvd2ViX2FuaW1hdGlvbnMvd2ViX2FuaW1hdGlvbnNfcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFLeEM7SUFvQkUsNkJBQ1csT0FBWSxFQUFTLFNBQTJDLEVBQ2hFLE9BQXVDLEVBQ3RDLGNBQXdDO1FBRnpDLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFrQztRQUNoRSxZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBMEI7UUF0QjVDLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFDN0Isa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFHL0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNcEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULGlCQUFZLEdBQXlCLElBQUksQ0FBQztRQUMxQyxvQkFBZSxHQUF5QyxFQUFFLENBQUM7UUFNaEUsSUFBSSxDQUFDLFNBQVMsR0FBVyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBVyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFFTyx1Q0FBUyxHQUFqQjtRQUNF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SSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsRUFBRSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUE5S0QsSUE4S0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvblBsYXllcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7Y29tcHV0ZVN0eWxlfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7U3BlY2lhbENhc2VkU3R5bGVzfSBmcm9tICcuLi9zcGVjaWFsX2Nhc2VkX3N0eWxlcyc7XG5cbmltcG9ydCB7RE9NQW5pbWF0aW9ufSBmcm9tICcuL2RvbV9hbmltYXRpb24nO1xuXG5leHBvcnQgY2xhc3MgV2ViQW5pbWF0aW9uc1BsYXllciBpbXBsZW1lbnRzIEFuaW1hdGlvblBsYXllciB7XG4gIHByaXZhdGUgX29uRG9uZUZuczogRnVuY3Rpb25bXSA9IFtdO1xuICBwcml2YXRlIF9vblN0YXJ0Rm5zOiBGdW5jdGlvbltdID0gW107XG4gIHByaXZhdGUgX29uRGVzdHJveUZuczogRnVuY3Rpb25bXSA9IFtdO1xuICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIF9kZWxheTogbnVtYmVyO1xuICBwcml2YXRlIF9pbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIF9maW5pc2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zdGFydGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfZmluYWxLZXlmcmFtZSE6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfTtcblxuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHVibGljIHJlYWRvbmx5IGRvbVBsYXllciE6IERPTUFuaW1hdGlvbjtcbiAgcHVibGljIHRpbWUgPSAwO1xuXG4gIHB1YmxpYyBwYXJlbnRQbGF5ZXI6IEFuaW1hdGlvblBsYXllcnxudWxsID0gbnVsbDtcbiAgcHVibGljIGN1cnJlbnRTbmFwc2hvdDoge1tzdHlsZU5hbWU6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZWxlbWVudDogYW55LCBwdWJsaWMga2V5ZnJhbWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn1bXSxcbiAgICAgIHB1YmxpYyBvcHRpb25zOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn0sXG4gICAgICBwcml2YXRlIF9zcGVjaWFsU3R5bGVzPzogU3BlY2lhbENhc2VkU3R5bGVzfG51bGwpIHtcbiAgICB0aGlzLl9kdXJhdGlvbiA9IDxudW1iZXI+b3B0aW9uc1snZHVyYXRpb24nXTtcbiAgICB0aGlzLl9kZWxheSA9IDxudW1iZXI+b3B0aW9uc1snZGVsYXknXSB8fCAwO1xuICAgIHRoaXMudGltZSA9IHRoaXMuX2R1cmF0aW9uICsgdGhpcy5fZGVsYXk7XG4gIH1cblxuICBwcml2YXRlIF9vbkZpbmlzaCgpIHtcbiAgICBpZiAoIXRoaXMuX2ZpbmlzaGVkKSB7XG4gICAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XG4gICAgICB0aGlzLl9vbkRvbmVGbnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICAgIHRoaXMuX29uRG9uZUZucyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fYnVpbGRQbGF5ZXIoKTtcbiAgICB0aGlzLl9wcmVwYXJlUGxheWVyQmVmb3JlU3RhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkUGxheWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGtleWZyYW1lcyA9IHRoaXMua2V5ZnJhbWVzO1xuICAgICh0aGlzIGFzIHtkb21QbGF5ZXI6IERPTUFuaW1hdGlvbn0pLmRvbVBsYXllciA9XG4gICAgICAgIHRoaXMuX3RyaWdnZXJXZWJBbmltYXRpb24odGhpcy5lbGVtZW50LCBrZXlmcmFtZXMsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5fZmluYWxLZXlmcmFtZSA9IGtleWZyYW1lcy5sZW5ndGggPyBrZXlmcmFtZXNba2V5ZnJhbWVzLmxlbmd0aCAtIDFdIDoge307XG4gICAgdGhpcy5kb21QbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZmluaXNoJywgKCkgPT4gdGhpcy5fb25GaW5pc2goKSk7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJlUGxheWVyQmVmb3JlU3RhcnQoKSB7XG4gICAgLy8gdGhpcyBpcyByZXF1aXJlZCBzbyB0aGF0IHRoZSBwbGF5ZXIgZG9lc24ndCBzdGFydCB0byBhbmltYXRlIHJpZ2h0IGF3YXlcbiAgICBpZiAodGhpcy5fZGVsYXkpIHtcbiAgICAgIHRoaXMuX3Jlc2V0RG9tUGxheWVyU3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21QbGF5ZXIucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF90cmlnZ2VyV2ViQW5pbWF0aW9uKGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiBhbnlbXSwgb3B0aW9uczogYW55KTogRE9NQW5pbWF0aW9uIHtcbiAgICAvLyBqc2NvbXBpbGVyIGRvZXNuJ3Qgc2VlbSB0byBrbm93IGFuaW1hdGUgaXMgYSBuYXRpdmUgcHJvcGVydHkgYmVjYXVzZSBpdCdzIG5vdCBmdWxseVxuICAgIC8vIHN1cHBvcnRlZCB5ZXQgYWNyb3NzIGNvbW1vbiBicm93c2VycyAod2UgcG9seWZpbGwgaXQgZm9yIEVkZ2UvU2FmYXJpKSBbQ0wgIzE0MzYzMDkyOV1cbiAgICByZXR1cm4gZWxlbWVudFsnYW5pbWF0ZSddKGtleWZyYW1lcywgb3B0aW9ucykgYXMgRE9NQW5pbWF0aW9uO1xuICB9XG5cbiAgb25TdGFydChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uU3RhcnRGbnMucHVzaChmbik7XG4gIH1cblxuICBvbkRvbmUoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkRvbmVGbnMucHVzaChmbik7XG4gIH1cblxuICBvbkRlc3Ryb3koZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkRlc3Ryb3lGbnMucHVzaChmbik7XG4gIH1cblxuICBwbGF5KCk6IHZvaWQge1xuICAgIHRoaXMuX2J1aWxkUGxheWVyKCk7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgdGhpcy5fb25TdGFydEZucy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5fb25TdGFydEZucyA9IFtdO1xuICAgICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5fc3BlY2lhbFN0eWxlcykge1xuICAgICAgICB0aGlzLl9zcGVjaWFsU3R5bGVzLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZG9tUGxheWVyLnBsYXkoKTtcbiAgfVxuXG4gIHBhdXNlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuZG9tUGxheWVyLnBhdXNlKCk7XG4gIH1cblxuICBmaW5pc2goKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgaWYgKHRoaXMuX3NwZWNpYWxTdHlsZXMpIHtcbiAgICAgIHRoaXMuX3NwZWNpYWxTdHlsZXMuZmluaXNoKCk7XG4gICAgfVxuICAgIHRoaXMuX29uRmluaXNoKCk7XG4gICAgdGhpcy5kb21QbGF5ZXIuZmluaXNoKCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNldERvbVBsYXllclN0YXRlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fZmluaXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldERvbVBsYXllclN0YXRlKCkge1xuICAgIGlmICh0aGlzLmRvbVBsYXllcikge1xuICAgICAgdGhpcy5kb21QbGF5ZXIuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cblxuICBoYXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zdGFydGVkO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3Jlc2V0RG9tUGxheWVyU3RhdGUoKTtcbiAgICAgIHRoaXMuX29uRmluaXNoKCk7XG4gICAgICBpZiAodGhpcy5fc3BlY2lhbFN0eWxlcykge1xuICAgICAgICB0aGlzLl9zcGVjaWFsU3R5bGVzLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29uRGVzdHJveUZucy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5fb25EZXN0cm95Rm5zID0gW107XG4gICAgfVxuICB9XG5cbiAgc2V0UG9zaXRpb24ocDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kb21QbGF5ZXIuY3VycmVudFRpbWUgPSBwICogdGhpcy50aW1lO1xuICB9XG5cbiAgZ2V0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kb21QbGF5ZXIuY3VycmVudFRpbWUgLyB0aGlzLnRpbWU7XG4gIH1cblxuICBnZXQgdG90YWxUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGF5ICsgdGhpcy5fZHVyYXRpb247XG4gIH1cblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIGNvbnN0IHN0eWxlczoge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9ID0ge307XG4gICAgaWYgKHRoaXMuaGFzU3RhcnRlZCgpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLl9maW5hbEtleWZyYW1lKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICBpZiAocHJvcCAhPSAnb2Zmc2V0Jykge1xuICAgICAgICAgIHN0eWxlc1twcm9wXSA9XG4gICAgICAgICAgICAgIHRoaXMuX2ZpbmlzaGVkID8gdGhpcy5fZmluYWxLZXlmcmFtZVtwcm9wXSA6IGNvbXB1dGVTdHlsZSh0aGlzLmVsZW1lbnQsIHByb3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50U25hcHNob3QgPSBzdHlsZXM7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHRyaWdnZXJDYWxsYmFjayhwaGFzZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBwaGFzZU5hbWUgPT0gJ3N0YXJ0JyA/IHRoaXMuX29uU3RhcnRGbnMgOiB0aGlzLl9vbkRvbmVGbnM7XG4gICAgbWV0aG9kcy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgIG1ldGhvZHMubGVuZ3RoID0gMDtcbiAgfVxufVxuIl19