const { formatDateTime } = require('../index.js');

describe('formatDateTime', () => {
    test('should format date with default format', () => {
        const result = formatDateTime('2025-01-15T14:30:25');
        expect(result).toBe('2025-01-15 14:30:25');
    });

    test('should format date with custom format YYYY/MM/DD', () => {
        const result = formatDateTime('2025-01-15T14:30:25', 'YYYY/MM/DD');
        expect(result).toBe('2025/01/15');
    });

    test('should format date with custom format DD-MM-YYYY', () => {
        const result = formatDateTime('2025-01-15T14:30:25', 'DD-MM-YYYY');
        expect(result).toBe('15-01-2025');
    });

    test('should handle single digit month and day with padding', () => {
        const result = formatDateTime('2025-01-05T09:07:03');
        expect(result).toBe('2025-01-05 09:07:03');
    });

    test('should handle different time zones', () => {
        const result = formatDateTime('2025-01-15T14:30:25Z');
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });

    test('should throw error for invalid date string', () => {
        expect(() => {
            formatDateTime('invalid-date');
        }).toThrow('Invalid date string provided');
    });

    test('should throw error for empty string', () => {
        expect(() => {
            formatDateTime('');
        }).toThrow('Invalid date string provided');
    });

    test('should handle timestamp input', () => {
        const timestamp = new Date('2025-01-15T14:30:25').getTime();
        const result = formatDateTime(timestamp);
        expect(typeof result).toBe('string');
    });
});
