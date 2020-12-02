const {resolve} = require('path');
const {writeFileSync, readFileSync} = require('fs-extra');

const content = resolve(__dirname, '..', 'styles', 'editor-socket.css');
const file = resolve(__dirname, '..', 'constants', 'default-editor-styles.ts');
const styles = readFileSync(content, 'utf-8');

writeFileSync(file, `export const defaultEditorStyles = \`${styles}\`;`, {
    encoding: 'utf-8',
});
