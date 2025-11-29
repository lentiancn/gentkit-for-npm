import {describe, expect, it} from 'vitest';
import {format} from "../../src/datetime-utils/index.js";

describe('format', () => {
    const testDate = new Date(2025, 3, 16, 17, 18, 19); // 2023-06-15 14:30:45

    it('should format year correctly', () => {
        expect(format('Y', testDate)).toBe('2025');
        expect(format('YY', testDate)).toBe('25');
        expect(format('YYY', testDate)).toBe('2025');
        expect(format('YYYY', testDate)).toBe('2025');
        expect(format('YYYYY', testDate)).toBe('02025');
        expect(format('YYYYYY', testDate)).toBe('002025');
        expect(format('YYYYYYY', testDate)).toBe('0002025');
        expect(format('YYYYYYYY', testDate)).toBe('00002025');
        expect(format('YYYYYYYYY', testDate)).toBe('000002025');
        expect(format('YYYYYYYYYY', testDate)).toBe('0000002025');
    });

    it('should format year with lowercase y correctly', () => {
        expect(format('y', testDate)).toBe('2025');
        expect(format('yy', testDate)).toBe('25');
        expect(format('yyy', testDate)).toBe('2025');
        expect(format('yyyy', testDate)).toBe('2025');
        expect(format('yyyyy', testDate)).toBe('02025');
        expect(format('yyyyyy', testDate)).toBe('002025');
        expect(format('yyyyyyy', testDate)).toBe('0002025');
        expect(format('yyyyyyyy', testDate)).toBe('00002025');
        expect(format('yyyyyyyyy', testDate)).toBe('000002025');
        expect(format('yyyyyyyyyy', testDate)).toBe('0000002025');
    });

    it('should format month correctly', () => {
        expect(format('M', testDate)).toBe('04');
        expect(format('MM', testDate)).toBe('04');
        expect(format('MMM', testDate)).toBe('Apr');
        expect(format('MMMM', testDate)).toBe('April');
        expect(format('MMMMM', testDate)).toBe('April');
        expect(format('MMMMMM', testDate)).toBe('April');
        expect(format('MMMMMMM', testDate)).toBe('April');
        expect(format('MMMMMMMM', testDate)).toBe('April');
        expect(format('MMMMMMMMM', testDate)).toBe('April');
        expect(format('MMMMMMMMMM', testDate)).toBe('April');
    });

    it('should format minute correctly', () => {
        expect(format('m', testDate)).toBe('18');
        expect(format('mm', testDate)).toBe('18');
        expect(format('mmm', testDate)).toBe('018');
        expect(format('mmmm', testDate)).toBe('0018');
        expect(format('mmmmm', testDate)).toBe('00018');
        expect(format('mmmmmm', testDate)).toBe('000018');
        expect(format('mmmmmmm', testDate)).toBe('0000018');
        expect(format('mmmmmmmm', testDate)).toBe('00000018');
        expect(format('mmmmmmmmm', testDate)).toBe('000000018');
        expect(format('mmmmmmmmmm', testDate)).toBe('0000000018');
    });
});
