/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { scheduleMicroTask } from '../util';
/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see `AnimationPlayer`
 * @see `{@link animations/group group()}`
 *
 */
var AnimationGroupPlayer = /** @class */ (function () {
    function AnimationGroupPlayer(_players) {
        var _this = this;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._finished = false;
        this._started = false;
        this._destroyed = false;
        this._onDestroyFns = [];
        this.parentPlayer = null;
        this.totalTime = 0;
        this.players = _players;
        var doneCount = 0;
        var destroyCount = 0;
        var startCount = 0;
        var total = this.players.length;
        if (total == 0) {
            scheduleMicroTask(function () { return _this._onFinish(); });
        }
        else {
            this.players.forEach(function (player) {
                player.onDone(function () {
                    if (++doneCount == total) {
                        _this._onFinish();
                    }
                });
                player.onDestroy(function () {
                    if (++destroyCount == total) {
                        _this._onDestroy();
                    }
                });
                player.onStart(function () {
                    if (++startCount == total) {
                        _this._onStart();
                    }
                });
            });
        }
        this.totalTime = this.players.reduce(function (time, player) { return Math.max(time, player.totalTime); }, 0);
    }
    AnimationGroupPlayer.prototype._onFinish = function () {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach(function (fn) { return fn(); });
            this._onDoneFns = [];
        }
    };
    AnimationGroupPlayer.prototype.init = function () {
        this.players.forEach(function (player) { return player.init(); });
    };
    AnimationGroupPlayer.prototype.onStart = function (fn) {
        this._onStartFns.push(fn);
    };
    AnimationGroupPlayer.prototype._onStart = function () {
        if (!this.hasStarted()) {
            this._started = true;
            this._onStartFns.forEach(function (fn) { return fn(); });
            this._onStartFns = [];
        }
    };
    AnimationGroupPlayer.prototype.onDone = function (fn) {
        this._onDoneFns.push(fn);
    };
    AnimationGroupPlayer.prototype.onDestroy = function (fn) {
        this._onDestroyFns.push(fn);
    };
    AnimationGroupPlayer.prototype.hasStarted = function () {
        return this._started;
    };
    AnimationGroupPlayer.prototype.play = function () {
        if (!this.parentPlayer) {
            this.init();
        }
        this._onStart();
        this.players.forEach(function (player) { return player.play(); });
    };
    AnimationGroupPlayer.prototype.pause = function () {
        this.players.forEach(function (player) { return player.pause(); });
    };
    AnimationGroupPlayer.prototype.restart = function () {
        this.players.forEach(function (player) { return player.restart(); });
    };
    AnimationGroupPlayer.prototype.finish = function () {
        this._onFinish();
        this.players.forEach(function (player) { return player.finish(); });
    };
    AnimationGroupPlayer.prototype.destroy = function () {
        this._onDestroy();
    };
    AnimationGroupPlayer.prototype._onDestroy = function () {
        if (!this._destroyed) {
            this._destroyed = true;
            this._onFinish();
            this.players.forEach(function (player) { return player.destroy(); });
            this._onDestroyFns.forEach(function (fn) { return fn(); });
            this._onDestroyFns = [];
        }
    };
    AnimationGroupPlayer.prototype.reset = function () {
        this.players.forEach(function (player) { return player.reset(); });
        this._destroyed = false;
        this._finished = false;
        this._started = false;
    };
    AnimationGroupPlayer.prototype.setPosition = function (p) {
        var timeAtPosition = p * this.totalTime;
        this.players.forEach(function (player) {
            var position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
            player.setPosition(position);
        });
    };
    AnimationGroupPlayer.prototype.getPosition = function () {
        var min = 0;
        this.players.forEach(function (player) {
            var p = player.getPosition();
            min = Math.min(p, min);
        });
        return min;
    };
    AnimationGroupPlayer.prototype.beforeDestroy = function () {
        this.players.forEach(function (player) {
            if (player.beforeDestroy) {
                player.beforeDestroy();
            }
        });
    };
    /** @internal */
    AnimationGroupPlayer.prototype.triggerCallback = function (phaseName) {
        var methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach(function (fn) { return fn(); });
        methods.length = 0;
    };
    return AnimationGroupPlayer;
}());
export { AnimationGroupPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX2dyb3VwX3BsYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvc3JjL3BsYXllcnMvYW5pbWF0aW9uX2dyb3VwX3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFHMUM7Ozs7Ozs7R0FPRztBQUNIO0lBWUUsOEJBQVksUUFBMkI7UUFBdkMsaUJBOEJDO1FBekNPLGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFFaEMsaUJBQVksR0FBeUIsSUFBSSxDQUFDO1FBQzFDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFJM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFbEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2QsaUJBQWlCLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07Z0JBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ1osSUFBSSxFQUFFLFNBQVMsSUFBSSxL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QUFJLE9BQUEsRUFBRSxFQUFFLEVBQUosQ0FBSSxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQXpKRCxJQXlKQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtzY2hlZHVsZU1pY3JvVGFza30gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQge0FuaW1hdGlvblBsYXllcn0gZnJvbSAnLi9hbmltYXRpb25fcGxheWVyJztcblxuLyoqXG4gKiBBIHByb2dyYW1tYXRpYyBjb250cm9sbGVyIGZvciBhIGdyb3VwIG9mIHJldXNhYmxlIGFuaW1hdGlvbnMuXG4gKiBVc2VkIGludGVybmFsbHkgdG8gY29udHJvbCBhbmltYXRpb25zLlxuICpcbiAqIEBzZWUgYEFuaW1hdGlvblBsYXllcmBcbiAqIEBzZWUgYHtAbGluayBhbmltYXRpb25zL2dyb3VwIGdyb3VwKCl9YFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkdyb3VwUGxheWVyIGltcGxlbWVudHMgQW5pbWF0aW9uUGxheWVyIHtcbiAgcHJpdmF0ZSBfb25Eb25lRm5zOiBGdW5jdGlvbltdID0gW107XG4gIHByaXZhdGUgX29uU3RhcnRGbnM6IEZ1bmN0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfZmluaXNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3RhcnRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfb25EZXN0cm95Rm5zOiBGdW5jdGlvbltdID0gW107XG5cbiAgcHVibGljIHBhcmVudFBsYXllcjogQW5pbWF0aW9uUGxheWVyfG51bGwgPSBudWxsO1xuICBwdWJsaWMgdG90YWxUaW1lOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgcmVhZG9ubHkgcGxheWVyczogQW5pbWF0aW9uUGxheWVyW107XG5cbiAgY29uc3RydWN0b3IoX3BsYXllcnM6IEFuaW1hdGlvblBsYXllcltdKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gX3BsYXllcnM7XG4gICAgbGV0IGRvbmVDb3VudCA9IDA7XG4gICAgbGV0IGRlc3Ryb3lDb3VudCA9IDA7XG4gICAgbGV0IHN0YXJ0Q291bnQgPSAwO1xuICAgIGNvbnN0IHRvdGFsID0gdGhpcy5wbGF5ZXJzLmxlbmd0aDtcblxuICAgIGlmICh0b3RhbCA9PSAwKSB7XG4gICAgICBzY2hlZHVsZU1pY3JvVGFzaygoKSA9PiB0aGlzLl9vbkZpbmlzaCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKCsrZG9uZUNvdW50ID09IHRvdGFsKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkZpbmlzaCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllci5vbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgICAgIGlmICgrK2Rlc3Ryb3lDb3VudCA9PSB0b3RhbCkge1xuICAgICAgICAgICAgdGhpcy5fb25EZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyLm9uU3RhcnQoKCkgPT4ge1xuICAgICAgICAgIGlmICgrK3N0YXJ0Q291bnQgPT0gdG90YWwpIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy50b3RhbFRpbWUgPSB0aGlzLnBsYXllcnMucmVkdWNlKCh0aW1lLCBwbGF5ZXIpID0+IE1hdGgubWF4KHRpbWUsIHBsYXllci50b3RhbFRpbWUpLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRmluaXNoKCkge1xuICAgIGlmICghdGhpcy5fZmluaXNoZWQpIHtcbiAgICAgIHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uRG9uZUZucy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5fb25Eb25lRm5zID0gW107XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLmluaXQoKSk7XG4gIH1cblxuICBvblN0YXJ0KGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25TdGFydEZucy5wdXNoKGZuKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gICAgICB0aGlzLl9vblN0YXJ0Rm5zLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLl9vblN0YXJ0Rm5zID0gW107XG4gICAgfVxuICB9XG5cbiAgb25Eb25lKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Eb25lRm5zLnB1c2goZm4pO1xuICB9XG5cbiAgb25EZXN0cm95KGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25EZXN0cm95Rm5zLnB1c2goZm4pO1xuICB9XG5cbiAgaGFzU3RhcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRlZDtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgaWYgKCF0aGlzLnBhcmVudFBsYXllcikge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIHRoaXMuX29uU3RhcnQoKTtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLnBsYXkoKSk7XG4gIH1cblxuICBwYXVzZSgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLnBhdXNlKCkpO1xuICB9XG5cbiAgcmVzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLnJlc3RhcnQoKSk7XG4gIH1cblxuICBmaW5pc2goKTogdm9pZCB7XG4gICAgdGhpcy5fb25GaW5pc2goKTtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLmZpbmlzaCgpKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fb25EZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB0aGlzLl9vbkZpbmlzaCgpO1xuICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHBsYXllci5kZXN0cm95KCkpO1xuICAgICAgdGhpcy5fb25EZXN0cm95Rm5zLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLl9vbkRlc3Ryb3lGbnMgPSBbXTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4gcGxheWVyLnJlc2V0KCkpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuX2ZpbmlzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0UG9zaXRpb24ocDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdGltZUF0UG9zaXRpb24gPSBwICogdGhpcy50b3RhbFRpbWU7XG4gICAgdGhpcy5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gcGxheWVyLnRvdGFsVGltZSA/IE1hdGgubWluKDEsIHRpbWVBdFBvc2l0aW9uIC8gcGxheWVyLnRvdGFsVGltZSkgOiAxO1xuICAgICAgcGxheWVyLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgbGV0IG1pbiA9IDA7XG4gICAgdGhpcy5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIGNvbnN0IHAgPSBwbGF5ZXIuZ2V0UG9zaXRpb24oKTtcbiAgICAgIG1pbiA9IE1hdGgubWluKHAsIG1pbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIGJlZm9yZURlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgIGlmIChwbGF5ZXIuYmVmb3JlRGVzdHJveSkge1xuICAgICAgICBwbGF5ZXIuYmVmb3JlRGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0cmlnZ2VyQ2FsbGJhY2socGhhc2VOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBtZXRob2RzID0gcGhhc2VOYW1lID09ICdzdGFydCcgPyB0aGlzLl9vblN0YXJ0Rm5zIDogdGhpcy5fb25Eb25lRm5zO1xuICAgIG1ldGhvZHMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICBtZXRob2RzLmxlbmd0aCA9IDA7XG4gIH1cbn1cbiJdfQ==