import { describe, it, expect } from 'vitest'
import * as index from '../src/index.js'

describe('index.ts exports', () => {
    it('should export datetime-utils functions', () => {
        expect(index).toBeDefined()
        expect(Object.keys(index)).not.toHaveLength(0)
    })

    it('should contain format function', () => {
        expect(index.format).toBeDefined()
        expect(typeof index.format).toBe('function')
    })
})
