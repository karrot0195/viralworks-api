export function log(...msg: any[]) {
    console.log('' + new Date().toISOString() + ' | ' + msg.join(' '));
}
