const { spawnSync, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const del = require('del')

const distPath = path.join(process.cwd(), '.vuepress', 'dist');

try {
    if (!fs.existsSync(distPath)) {
        fs.mkdirSync(distPath);
    }

    let cmdStr = '';

    cmdStr = 'git init';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'git config core.sparsecheckout true';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'echo front-end-study >> .git/info/sparse-checkout ';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'git remote add -f origin git@github.com:nannongrousong/web.git';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'git pull origin master';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'git config core.sparsecheckout false ';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'npm run build';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        stdio: [0, 1, 2]
    });

    //  删除刚才从git上拉取的目录
    del.sync(path.join(distPath, 'front-end-study'))

    fs.renameSync(path.join(distPath, 'local'), path.join(distPath, 'front-end-study'))

    cmdStr = 'git add .';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    const time = new Date();

    cmdStr = `git commit -m "网站自动发布${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}" `;
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    cmdStr = 'git push --set-upstream origin master';
    console.log(cmdStr);
    execSync(cmdStr, {
        encoding: 'utf8',
        cwd: distPath
    });

    del.sync(distPath);
} catch (err) {
    console.error(err)
}