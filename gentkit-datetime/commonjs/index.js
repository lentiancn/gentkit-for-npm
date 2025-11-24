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
 * Date and Time handling library.
 *
 * @module gentkit-datetime
 */

/**
 * 格式化日期字符串为目标格式。
 *
 * @param {string} dateStr - 输入的日期字符串
 * @param {string} format - 目标日期格式
 * @returns {string} 格式化后的日期字符串
 */
function formatDateTime(dateStr, format = 'YYYY-MM-DD HH:mm:ss') {
    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date string provided');
    }

    const padZero = (num) => String(num).padStart(2, '0');

    const replacements = {
        'YYYY': date.getFullYear(),
        'MM': padZero(date.getMonth() + 1),
        'DD': padZero(date.getDate()),
        'HH': padZero(date.getHours()),
        'mm': padZero(date.getMinutes()),
        'ss': padZero(date.getSeconds())
    };

    let formatted = format;
    for (const [key, value] of Object.entries(replacements)) {
        formatted = formatted.replace(new RegExp(key, 'g'), value);
    }

    return formatted;
}

/**
 * 解析并格式化日期字符串
 * @param {string} dateStr - 输入的日期字符串
 * @param {string} targetFormat - 目标格式
 * @returns {string} 格式化后的日期字符串
 */
function parseAndFormat(dateStr, targetFormat) {
    try {
        return formatDateTime(dateStr, targetFormat);
    } catch (error) {
        console.error('Date formatting error:', error.message);
        return null;
    }
}

// 导出函数
module.exports = {
    formatDateTime
};
