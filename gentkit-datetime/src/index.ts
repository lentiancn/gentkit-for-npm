/*
 * MIT License
 *
 * Copyright (c) 2025 田隆 (Len)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * 将输入字符串解析并格式化为指定日期格式
 * @param dateInput - 输入的日期字符串
 * @param format - 目标格式 (默认: 'YYYY-MM-DD')
 * @returns 格式化后的日期字符串
 */
export function formatDate(dateInput: string, format: string = 'YYYY-MM-DD'): string {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date input');
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', String(year))
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

/**
 * 解析各种格式的日期字符串并格式化
 * @param dateString - 输入的日期字符串
 * @returns 标准日期格式字符串 YYYY-MM-DD
 */
export function parseAndFormat(dateString: string): string {
    // 处理常见日期格式
    const formats = [
        /^\d{4}-\d{1,2}-\d{1,2}$/,           // YYYY-MM-DD
        /^\d{1,2}\/\d{1,2}\/\d{4}$/,         // MM/DD/YYYY
        /^\d{4}\/\d{1,2}\/\d{1,2}$/,         // YYYY/MM/DD
        /^\d{1,2}-\d{1,2}-\d{4}$/,           // MM-DD-YYYY
        /^\d{4}\.\d{1,2}\.\d{1,2}$/,         // YYYY.MM.DD
    ];

    let parsedDate: Date | null = null;

    // 尝试不同的解析方式
    if (formats.some(regex => regex.test(dateString))) {
        parsedDate = new Date(dateString);
    } else {
        // 尝试直接解析
        parsedDate = new Date(dateString);
    }

    if (!parsedDate || isNaN(parsedDate.getTime())) {
        throw new Error(`无法解析日期字符串: ${dateString}`);
    }

    return formatDate(parsedDate.toISOString(), 'YYYY-MM-DD');
}
