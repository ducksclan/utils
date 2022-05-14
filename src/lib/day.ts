/**
 * returns one day in milliseconds `ms`, seconds `s`, minutes `m` or hours `h`
 * @param measure defines in which measure function will be returned
 * @returns 1 day in `measure`
 */
export default function day(measure: 'ms' | 's' | 'm' | 'h') {
    switch (measure) {
        case 'ms':
            return 24 * 60 * 60 * 1000;
        case 's':
            return 24 * 60 * 60;
        case 'm':
            return 24 * 60;
        case 'h':
            return 24;
        default:
            throw new TypeError(`measure should equal 'ms', 's', 'm' or 'h'`);
    }
}
