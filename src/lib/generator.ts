import { randomBytes, randomInt, randomUUID } from 'crypto';

/**
 * Represents pseudo randomize methods based `crypto` module.
 */
export class Generator {

    /**
     * Generates a random RFC 4122 version 4 UUID.
     * The UUID is generated using a cryptographic
     * pseudorandom number generator.
     * As same as `crypto.randomUUID`.
     */
    static uuid() {
        return randomUUID();
    }

    /**
     * Generates cryptographically strong pseudorandom
     * sequence based `crypto.randomBytes`
     * @param size number of characters in returned string.
     * The `size` is a multiple of 2.
     */
    static sequence(size: number): string {

        const max = 2 ** 30;

        if (size > max) {
            return this.sequence(max) + this.sequence(size - max);
        }

        return randomBytes(size / 2).toString('hex');
    }

    /**
     * Return a random integer `n` such that `min <= n < max`.
     * The range (max - min) must be less than 248.
     * `min` and `max` must be safe integers.
     * As same as `crypto.randomInt`.
     * @param min start of random range (inclusive).
     * @param max end of random range (exclusive).
     * @returns random integer `n` such that `min <= n < max`
     */
    static int(min: number, max: number) {
        return randomInt(min, max);
    }

    /**
     * Generates pseudorandom numeric sequence based `Math.random`
     * @param size number of characters in returned string.
     */
    static code(size: number): string {

        const max = 9;

        if (size > max) {
            return this.code(max) + this.code(size - max);
        }

        return Math.random().toString().substring(2, size + 2)

    }

}
