import {buildCurrentVersion, buildNextVersion} from './shared/build-demo';
import {cleanupDistDemoDirectory} from './shared/cleanup-dist-demo-directory';
import {clonePreBuiltSnapshots} from './shared/clone-pre-built-snapshots';
import {logDistDirectory} from './shared/log-dist-directory';
import {makePublishableVersionsMap} from './shared/make-publishable-versions-map';
import {postBuildAllVersion} from './shared/post-build-all-version';

(function main(): void {
    const versionsMap = makePublishableVersionsMap();

    cleanupDistDemoDirectory();
    buildCurrentVersion();
    buildNextVersion();
    clonePreBuiltSnapshots(versionsMap);
    postBuildAllVersion(versionsMap);
    logDistDirectory();
})();
