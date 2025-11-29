import {defineConfig} from "vitest/config";

export default defineConfig({
    test: {
        include: ['test/**/*.test.cts','test/**/*.test.ts'],
        globals: true,
        coverage: {
            provider: 'v8', // 使用 v8 引擎生成覆盖率报告
            reporter: ['text', 'lcov'], // 生成 lcov 格式（Codecov 所需）
            reportsDirectory: './coverage', // 报告输出目录
            exclude: [
                'cjs/',
                'esm/',
                'node_modules/',
                '**/*.test.js',
                '**/*.spec.js',
                '**/vitest.config.js'
            ]
        }
    }
})
