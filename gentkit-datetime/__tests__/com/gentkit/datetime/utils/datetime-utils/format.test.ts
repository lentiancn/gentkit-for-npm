import {DateTimeUtils} from '../../../../../../src/com/gentkit/datetime/utils/datetime-utils';

describe('DateTimeUtils', () => {
    describe('format - Year Formats', () => {
        const testDate = new Date(2025, 0, 15, 14, 30, 25); // 2025-01-15 14:30:25

        test('should handle Y format (single Y - full year)', () => {
            const result = DateTimeUtils.format('Y', testDate);
            expect(result).toBe('2025');
        });

        test('should handle YY format (two Ys - 2-digit year)', () => {
            const result = DateTimeUtils.format('YY', testDate);
            expect(result).toBe('25');
        });

        test('should handle YYY format (three Ys - padded full year)', () => {
            const result = DateTimeUtils.format('YYY', testDate);
            expect(result).toBe('2025');
        });

        test('should handle YYYY format (four Ys - 4-digit year)', () => {
            const result = DateTimeUtils.format('YYYY', testDate);
            expect(result).toBe('2025');
        });

        test('should handle YYYYY format (five Ys - 5-digit year)', () => {
            const result = DateTimeUtils.format('YYYYY', testDate);
            expect(result).toBe('02025');
        });

        test('should handle YYYYYY format (six Ys - 6-digit year)', () => {
            const result = DateTimeUtils.format('YYYYYY', testDate);
            expect(result).toBe('002025');
        });

        test('should handle YYYYYYY format (seven Ys - 7-digit year)', () => {
            const result = DateTimeUtils.format('YYYYYYY', testDate);
            expect(result).toBe('0002025');
        });

        test('should handle YYYYYYYY format (eight Ys - 8-digit year)', () => {
            const result = DateTimeUtils.format('YYYYYYYY', testDate);
            expect(result).toBe('00002025');
        });

        // 小写 y 测试
        test('should handle lowercase y formats', () => {
            const result1 = DateTimeUtils.format('y', testDate);
            expect(result1).toBe('2025');

            const result2 = DateTimeUtils.format('yy', testDate);
            expect(result2).toBe('25');

            const result3 = DateTimeUtils.format('yyy', testDate);
            expect(result3).toBe('2025');

            const result4 = DateTimeUtils.format('yyyy', testDate);
            expect(result4).toBe('2025');

            const result5 = DateTimeUtils.format('yyyyy', testDate);
            expect(result5).toBe('02025');

            const result6 = DateTimeUtils.format('yyyyyy', testDate);
            expect(result6).toBe('002025');

            const result7 = DateTimeUtils.format('yyyyyyy', testDate);
            expect(result7).toBe('0002025');

            const result8 = DateTimeUtils.format('yyyyyyyy', testDate);
            expect(result8).toBe('00002025');
        });

        test('should handle mixed case Y and y formats', () => {
            const result = DateTimeUtils.format('YyYY', testDate);
            expect(result).toBe('2025252025');
        });
    });
});
