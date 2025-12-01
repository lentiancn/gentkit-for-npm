import { describe, it, expect } from 'vitest'

describe('esm/index.d.cts type definitions', () => {
    // @ts-ignore
    it('should re-export all types', async () => {
        // @ts-ignore
        const types = await import('../../../esm')

        expect(types).toBeDefined()
    })
})
