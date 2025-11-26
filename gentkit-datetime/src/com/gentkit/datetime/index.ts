
export function format1(
    pattern: string,
    date: Date
): string {
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
