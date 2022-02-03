const fs = require('fs');

const DEMO_PATH = process.env.DEMO_PATH;
const INDEX_PATH = `${DEMO_PATH}/index.html`;
const NOT_FOUND_PATH = `${DEMO_PATH}/404.html`;

const SMOKER_BALANCER = `<script>
if (!localStorage.getItem('env') && location.pathname.includes('next')) {
    localStorage.setItem('env', location.pathname + location.search + location.hash);
    location.replace('/next');
} else {
    localStorage.removeItem('env');
}
</script>`;

const body = fs.readFileSync(INDEX_PATH).toString();

const processedBody = body.replace(`<head>`, `<head>${SMOKER_BALANCER}`);

fs.writeFileSync(NOT_FOUND_PATH, processedBody);
