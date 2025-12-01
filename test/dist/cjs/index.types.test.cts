import {describe, expect, it} from 'vitest'

// cjs/index.d.cts
const targetFile: string = '../../../cjs/index.d.cts'

describe('cjs/index.d.cts type definitions', () => {
    // @ts-ignore
    it('should re-export all types', async () => {
        // @ts-ignore
        const types = await import(targetFile)

        expect(types).toBeDefined()
    })
})
