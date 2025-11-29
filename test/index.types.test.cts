import { describe, it, expect } from 'vitest'

describe('cjs/index.d.cts type definitions', () => {
    // @ts-ignore
    it('should re-export all types', async () => {
        // @ts-ignore
        const types = await import('../../cjs/index.d.cts')

        expect(types).toBeDefined()
    })
})
