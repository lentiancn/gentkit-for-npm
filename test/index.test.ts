import {describe, expect, it} from 'vitest';

describe('src/index.ts', () => {
    it('should have proper re-exports', () => {
        // @ts-ignore
        expect(() => import('../src/index.ts')).not.toThrow();
    });

    // @ts-ignore
    it('should export all members from demo module', async () => {
        // @ts-ignore
        const module = await import('../src/index.ts');
        // @ts-ignore
        const demoModule = await import('../src/datetime-utils/index.ts');

        Object.keys(demoModule).forEach(key => {
            expect(module).toHaveProperty(key);
            // @ts-ignore
            expect(module[key]).toBe(demoModule[key]);
        });
    });
});
