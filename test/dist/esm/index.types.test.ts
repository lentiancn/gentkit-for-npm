import { describe, it, expect } from 'vitest'

// esm/index.d.ts
const targetFile: string = '../../../esm/index.d.ts'

describe('esm/index.d.cts type definitions', () => {
    // @ts-ignore
    it('should re-export all types', async () => {
        // @ts-ignore
        const types = await import(targetFile)

        expect(types).toBeDefined()
    })
})
