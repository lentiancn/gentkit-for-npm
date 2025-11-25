import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default [
    // ES 模块版本
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        plugins: [
            resolve(),
            typescript({
                tsconfig: './tsconfig.json',
                compilerOptions: {
                    module: 'ESNext',
                    declaration: true,
                    declarationDir: './dist'
                }
            })
        ]
    },
    // CommonJS 版本
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'auto'
        },
        plugins: [
            resolve(),
            typescript({
                tsconfig: './tsconfig.json',
                compilerOptions: {
                    module: 'CommonJS',
                    declaration: false // 只生成一次类型声明
                }
            })
        ]
    }
];
