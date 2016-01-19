
export default function appendArgs() {
    var args = [...arguments];
    var fn = args.pop();

    return function appendApply() {
        return fn.apply(null, [...arguments, ...args]);
    };
}
