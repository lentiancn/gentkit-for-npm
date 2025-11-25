/*
 * DatetimeUtils.ts
 */
export class DatetimeUtils {

    public static format(pattern: string, date: Date): string {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        // 处理年份格式的多种情况
        let result = pattern;

        // 按长度从长到短替换，避免冲突
        result = result.replace(/Y{7,}/g, match => {
            const paddedYear = year.toString().padStart(match.length, '0');
            return paddedYear.substring(0, match.length);
        });

        result = result.replace(/Y{6}/g, '00' + year.toString().padStart(4, '0'));
        result = result.replace(/Y{5}/g, '0' + year.toString().padStart(4, '0'));
        result = result.replace(/Y{4}/g, year.toString().padStart(4, '0'));
        result = result.replace(/Y{3}/g, year.toString().padStart(4, '0'));
        result = result.replace(/Y{2}/g, year.toString().substring(2).padStart(2, '0'));
        result = result.replace(/Y{1}/g, year.toString());

        // 兼容小写 y 的情况
        result = result.replace(/y{7,}/g, match => {
            const paddedYear = year.toString().padStart(match.length, '0');
            return paddedYear.substring(0, match.length);
        });

        result = result.replace(/y{6}/g, '00' + year.toString().padStart(4, '0'));
        result = result.replace(/y{5}/g, '0' + year.toString().padStart(4, '0'));
        result = result.replace(/y{4}/g, year.toString().padStart(4, '0'));
        result = result.replace(/y{3}/g, year.toString().padStart(4, '0'));
        result = result.replace(/y{2}/g, year.toString().substring(2).padStart(2, '0'));
        result = result.replace(/y{1}/g, year.toString());

        // 处理其他格式
        result = result.replace(/MM/g, month);
        result = result.replace(/DD/g, day);
        result = result.replace(/HH/g, hours);
        result = result.replace(/mm/g, minutes);
        result = result.replace(/ss/g, seconds);

        return result;
    }

    // public static parse(pattern: string, date: string): Date {
    //     if (!pattern || !date) {
    //         throw new Error('Pattern and date string are required');
    //     }
    //
    //     // 创建正则表达式来匹配模式中的各个部分
    //     const regexPattern = pattern
    //         .replace(/YYYY/g, '(\\d{4})')
    //         .replace(/MM/g, '(\\d{2})')
    //         .replace(/DD/g, '(\\d{2})')
    //         .replace(/HH/g, '(\\d{2})')
    //         .replace(/mm/g, '(\\d{2})')
    //         .replace(/ss/g, '(\\d{2})');
    //
    //     const regex = new RegExp(`^${regexPattern}$`);
    //     const match = date.match(regex);
    //
    //     if (!match) {
    //         throw new Error(`Date string '${date}' does not match pattern '${pattern}'`);
    //     }
    //
    //     // 提取匹配的组
    //     const patternParts = pattern.match(/YYYY|MM|DD|HH|mm|ss/g) || [];
    //     const values = match.slice(1);
    //
    //     let year = 0, month = 0, day = 1, hours = 0, minutes = 0, seconds = 0;
    //
    //     for (let i = 0; i < patternParts.length; i++) {
    //         const value = parseInt(values[i], 10);
    //         switch (patternParts[i]) {
    //             case 'YYYY':
    //                 year = value;
    //                 break;
    //             case 'MM':
    //                 month = value - 1; // JavaScript 月份从 0 开始
    //                 break;
    //             case 'DD':
    //                 day = value;
    //                 break;
    //             case 'HH':
    //                 hours = value;
    //                 break;
    //             case 'mm':
    //                 minutes = value;
    //                 break;
    //             case 'ss':
    //                 seconds = value;
    //                 break;
    //         }
    //     }
    //
    //     const result = new Date(year, month, day, hours, minutes, seconds);
    //
    //     // 验证日期是否有效
    //     if (result.getFullYear() !== year ||
    //         result.getMonth() !== month ||
    //         result.getDate() !== day) {
    //         throw new Error(`Invalid date: ${date}`);
    //     }
    //
    //     return result;
    // }
}