module.exports = {
    basePath: process.env.BASE_URL || '',
    images: {
        //deviceSizes: [320, 420, 768, 1024, 1200],
        domains: ['mosaik.test', 'mosaik-stuttgart.net'],
        path: process.env.BASE_URL + '/_next/image',
        loader: 'default',
      },
}