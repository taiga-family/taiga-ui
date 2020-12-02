"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const chokidar = require("chokidar");
const rxjs_1 = require("rxjs");
const path_1 = require("../utils/path");
const log = require("../utils/log");
function createFileWatch(projectPath, ignoredPaths = []) {
    log.debug(`Watching for changes: projectPath: ${projectPath}, ignoredPaths: ${ignoredPaths}`);
    const watch = chokidar.watch(projectPath, {
        ignoreInitial: true,
        ignored: [...ignoredPaths, /((^[\/\\])\..)|(\.js$)|(\.map$)|(\.metadata\.json)/],
        persistent: true,
    });
    const handleFileChange = (event, filePath, observer) => {
        log.debug(`Watch: Path changed. Event: ${event}, Path: ${filePath}`);
        if (event === 'unlinkDir' || event === 'addDir') {
            // we don't need to trigger on directory removed or renamed as chokidar will fire the changes for each file
            return;
        }
        observer.next({
            filePath: path_1.ensureUnixPath(path.resolve(filePath)),
            event,
        });
    };
    return rxjs_1.Observable.create(observer => {
        watch.on('all', (event, filePath) => handleFileChange(event, filePath, observer));
        return () => watch.close();
    });
}
exports.createFileWatch = createFileWatch;
//# sourceMappingURL=file-watcher.js.map