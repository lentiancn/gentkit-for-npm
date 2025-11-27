# GentKit

## 用法

```javascript
const {formatDateTime, parseAndFormat} = require('./index');

// 格式化为默认格式
console.log(formatDateTime('2023-12-25T10:30:45'));
// 输出: 2023-12-25 10:30:45

// 格式化为自定义格式
console.log(formatDateTime('2023-12-25', 'DD/MM/YYYY'));
// 输出: 25/12/2023
```
