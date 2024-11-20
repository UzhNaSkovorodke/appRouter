import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule: any) =>
            rule.test?.test?.('.svg'),
        )
        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {not: [...fileLoaderRule.resourceQuery.not, /url/]},
                use: ['@svgr/webpack'],
            },
        )
        fileLoaderRule.exclude = /\.svg$/i
        return config
    },

    images: {
        remotePatterns: [
            {hostname: 'cms.stonehedgecompany.com',},
            {hostname: 'stonehedgecompany.com'},
            {hostname: 'stonehedgecompany.comnull'},
            {hostname: 'stonehedgecompany.comundefined'},
            {hostname: 'cms.stonehedgecompany.comundefined'},
            {hostname: 'stone.runull'},
            {hostname: 'stone.ruundefined'},
            {hostname: '166ba6ce-eee2-43f1-87a4-b80ece869977.selcdn.net'},
            {hostname: 'demo.stone.ru'},
            {hostname: 'cms.demo.stone.ru'},
        ],
    },

};

export default nextConfig;
