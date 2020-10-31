module.exports = {
    basePath: process.env.BASE_URL || '',
    images: {
        sizes: [320, 420, 768, 1024, 1200],
        deviceSizes: [320, 420, 768, 1024, 1200],
        domains: ['mosaik.test', 'mosaik-stuttgart.net'],
        path: '/blog/_next/image',
        loader: 'default',
      },
}