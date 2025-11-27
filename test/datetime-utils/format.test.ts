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

    // it('should format month correctly', () => {
    //     expect(format('M', testDate)).toBe('11');
    //     expect(format('MM', testDate)).toBe('11');
    //     expect(format('MMM', testDate)).toBe('Nov');
    //     expect(format('MMMM', testDate)).toBe('November');
    //     expect(format('MMMMM', testDate)).toBe('November');
    //     expect(format('MMMMMM', testDate)).toBe('November');
    //     expect(format('MMMMMMM', testDate)).toBe('November');
    //     expect(format('MMMMMMMM', testDate)).toBe('November');
    //     expect(format('MMMMMMMMM', testDate)).toBe('November');
    //     expect(format('MMMMMMMMMM', testDate)).toBe('November');
    // });

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

    //
    // it('should format month correctly', () => {
    //     expect(format('MM', testDate)).toBe('06');
    //     expect(format('YYYY-MM', testDate)).toBe('2023-06');
    // });
    //
    // it('should format day correctly', () => {
    //     expect(format('DD', testDate)).toBe('15');
    //     expect(format('YYYY-MM-DD', testDate)).toBe('2023-06-15');
    // });
    //
    // it('should format hours correctly', () => {
    //     expect(format('HH', testDate)).toBe('14');
    //     expect(format('HH:mm:ss', testDate)).toBe('14:30:45');
    // });
    //
    // it('should format minutes correctly', () => {
    //     expect(format('mm', testDate)).toBe('30');
    //     expect(format('HH:mm:ss', testDate)).toBe('14:30:45');
    // });
    //
    // it('should format seconds correctly', () => {
    //     expect(format('ss', testDate)).toBe('45');
    //     expect(format('HH:mm:ss', testDate)).toBe('14:30:45');
    // });
    //
    // it('should format complete datetime patterns', () => {
    //     expect(format('YYYY-MM-DD HH:mm:ss', testDate)).toBe('2023-06-15 14:30:45');
    //     expect(format('YY-MM-DD HH:mm', testDate)).toBe('23-06-15 14:30');
    // });
    //
    // it('should handle edge cases', () => {
    //     const edgeDate = new Date(2000, 0, 1, 0, 0, 0); // 2000-01-01 00:00:00
    //     expect(format('YYYY-MM-DD HH:mm:ss', edgeDate)).toBe('2000-01-01 00:00:00');
    //
    //     const singleDigitDate = new Date(2001, 2, 3, 4, 5, 6); // 2001-03-03 04:05:06
    //     expect(format('YYYY-M-D H:m:s', singleDigitDate)).toBe('2001-M-D H:m:s');
    // });
});