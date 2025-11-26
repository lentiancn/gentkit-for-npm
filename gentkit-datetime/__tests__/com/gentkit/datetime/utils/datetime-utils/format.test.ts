
import { format } from '../../../../../../src/com/gentkit/datetime/utils/datetime-utils';

describe('format', () => {
    test('should format duration in seconds correctly', () => {
        expect(format("Y", new Date())).toBe('2025');
        expect(format("YY", new Date())).toBe('25');
        expect(format("YYY", new Date())).toBe('2025');
    });
    //
    // test('should format duration in minutes and seconds correctly', () => {
    //     expect(formatDuration(60)).toBe('1分钟');
    //     expect(formatDuration(61)).toBe('1分钟1秒');
    //     expect(formatDuration(119)).toBe('1分钟59秒');
    //     expect(formatDuration(3599)).toBe('59分钟59秒');
    // });
    //
    // test('should format duration in hours, minutes and seconds correctly', () => {
    //     expect(formatDuration(3600)).toBe('1小时');
    //     expect(formatDuration(3601)).toBe('1小时1秒');
    //     expect(formatDuration(3660)).toBe('1小时1分钟');
    //     expect(formatDuration(3661)).toBe('1小时1分钟1秒');
    //     expect(formatDuration(7200)).toBe('2小时');
    //     expect(formatDuration(86399)).toBe('23小时59分钟59秒');
    // });
    //
    // test('should format duration in days, hours, minutes and seconds correctly', () => {
    //     expect(formatDuration(86400)).toBe('1天');
    //     expect(formatDuration(86401)).toBe('1天1秒');
    //     expect(formatDuration(86460)).toBe('1天1分钟');
    //     expect(formatDuration(86461)).toBe('1天1分钟1秒');
    //     expect(formatDuration(90000)).toBe('1天1小时');
    //     expect(formatDuration(90001)).toBe('1天1小时1秒');
    //     expect(formatDuration(90060)).toBe('1天1小时1分钟');
    //     expect(formatDuration(90061)).toBe('1天1小时1分钟1秒');
    //     expect(formatDuration(172800)).toBe('2天');
    // });
});