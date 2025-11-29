import { describe, it, expect } from 'vitest'
import * as index from '../src/index.js'

describe('index.ts exports', () => {
    it('should export datetime-utils functions', () => {
        // 检查是否正确导出了 datetime-utils 模块的内容
        expect(index).toBeDefined()
        expect(Object.keys(index)).not.toHaveLength(0)
    })

    it('should contain format function', () => {
        // 检查是否导出了 format 函数
        expect(index.format).toBeDefined()
        expect(typeof index.format).toBe('function')
    })
})
