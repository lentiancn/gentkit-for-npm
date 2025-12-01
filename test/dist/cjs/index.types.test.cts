import {describe, expect, it} from 'vitest'

// index.d.cts
const targetFile: string = '../../../cjs/index.d.cts'

describe('cjs/index.d.cts type definitions', () => {
    // @ts-ignore
    it('should re-export all types', async () => {
        // @ts-ignore
        const types = await import(targetFile)

        expect(types).toBeDefined()
    })
})
