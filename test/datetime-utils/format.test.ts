import {describe, expect, it} from 'vitest';
import {format} from "../../src";


describe('format', () => {
    const testDate = new Date(2023, 5, 15, 14, 30, 45); // 2023-06-15 14:30:45

    it('should format year correctly', () => {
        expect(format('YYYY', testDate)).toBe('2023');
        expect(format('YY', testDate)).toBe('23');
        expect(format('Y', testDate)).toBe('2023');
        expect(format('YYYYY', testDate)).toBe('02023');
        expect(format('YYYYYY', testDate)).toBe('002023');
        expect(format('YYYYYYY', testDate)).toBe('0002023');
        expect(format('YYYYYYYY', testDate)).toBe('00002023');
        expect(format('YYYYYYYYY', testDate)).toBe('000002023');
        expect(format('YYYYYYYYYY', testDate)).toBe('0000002023');
        expect(format('YYYYYYYYYYY', testDate)).toBe('00000002023');
    });

    // it('should format year with lowercase y correctly', () => {
    //     expect(format('yyyy', testDate)).toBe('2023');
    //     expect(format('yy', testDate)).toBe('23');
    //     expect(format('y', testDate)).toBe('2023');
    //     expect(format('yyyyy', testDate)).toBe('02023');
    //     expect(format('yyyyyy', testDate)).toBe('002023');
    // });
    //
    // it('should handle long year patterns', () => {
    //     expect(format('YYYYYYY', testDate)).toBe('2023');
    //     expect(format('yyyyyyy', testDate)).toBe('2023');
    // });
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