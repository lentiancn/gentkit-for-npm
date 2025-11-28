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

export function format(
    pattern: string,
    date: Date
): string {
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    let result;

    result = formatYear(pattern, year+"");
    result = formatMonth(result, date);
    result = formatMinute(result, minutes);

    //
    // // 处理其他格式
    // result = result.replace(/MM/g, month);
    // result = result.replace(/DD/g, day);
    // result = result.replace(/HH/g, hours);
    // result = result.replace(/mm/g, minutes);
    // result = result.replace(/ss/g, seconds);

    return result;
}

function formatYear(pattern: string, yearString: string) {
    let result = pattern;

    // Y
    result = result.replace(/Y{7,}/g, match => {
        const paddedYear = yearString.padStart(match.length, '0');
        return paddedYear.substring(0, match.length);
    });
    result = result.replace(/Y{6}/g, '00' + yearString.padStart(4, '0'));
    result = result.replace(/Y{5}/g, '0' + yearString.padStart(4, '0'));
    result = result.replace(/Y{4}/g, yearString.padStart(4, '0'));
    result = result.replace(/Y{3}/g, yearString.padStart(4, '0'));
    result = result.replace(/Y{2}/g, yearString.substring(2).padStart(2, '0'));
    result = result.replace(/Y{1}/g, yearString);

    // y
    result = result.replace(/y{7,}/g, match => {
        const paddedYear = yearString.padStart(match.length, '0');
        return paddedYear.substring(0, match.length);
    });
    result = result.replace(/y{6}/g, '00' + yearString.padStart(4, '0'));
    result = result.replace(/y{5}/g, '0' + yearString.padStart(4, '0'));
    result = result.replace(/y{4}/g, yearString.padStart(4, '0'));
    result = result.replace(/y{3}/g, yearString.padStart(4, '0'));
    result = result.replace(/y{2}/g, yearString.substring(2).padStart(2, '0'));
    result = result.replace(/y{1}/g, yearString);

    return result;
}

function formatMonth(pattern: string, date: Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');

    let result = pattern;

    result = result.replace(/M{4,}/g, match => {
        return new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);
    });
    result = result.replace(/M{3}/g, new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date));
    result = result.replace(/M{2}/g, month);
    result = result.replace(/M{1}/g, month);

    return result;
}

function formatMinute(pattern: string, minutes: string) {
    let result = pattern;

    result = result.replace(/m{3,}/g, match => {
        const paddedMinutes = minutes.padStart(match.length, '0');
        return paddedMinutes.substring(0, match.length);
    });
    result = result.replace(/m{2}/g, minutes);
    result = result.replace(/m{1}/g, minutes);

    return result;
}
