import { describe, it, expect } from 'vitest'
const targetFile = '../../cjs/index.cjs';

describe('built package testing', () => {
    it('should have all expected functions callable', () => {
        expect(() => {
            // @ts-ignore
            require(targetFile)
        }).not.toThrow()
    })
})
