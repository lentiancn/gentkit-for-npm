import {describe, expect, it} from 'vitest'
// @ts-ignore
import * as index from '../src/index.ts'

describe('index.ts exports', () => {
    it('should export datetime-utils functions', () => {
        expect(index).toBeDefined()
        expect(Object.keys(index)).not.toHaveLength(0)
    })

    it('should export all expected functions', () => {
        const exportedFunctions = Object.keys(index).filter(key =>
            typeof index[key] === 'function'
        )

        expect(exportedFunctions.length).toBeGreaterThan(0)
    })
})
