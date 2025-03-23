import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        company: '/company/index.html',
        openroles: '/open-roles/index.html',
        'applications/content-creator': '/applications/content-creator.html',
        'applications/django': '/applications/django.html',
        'applications/react-typescript': '/applications/react-typescript.html',
        'applications/ui-ux': '/applications/ui-ux.html',
        notavailable: '/not-available-yet/index.html',
        bookcall: '/book-call/index.html',
        products: '/products/index.html',
        'book-call-early-adopters-program': '/book-call/early-adopters-program.html',
      },
    },
  },
});
