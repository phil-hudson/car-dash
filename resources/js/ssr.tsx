import { RouteContext } from '@/hooks/useRoute';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import route from 'ziggy-js';

const appName = 'Laravel';

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: title => `${title} - ${appName}`,
    resolve: name =>
      resolvePageComponent(
        `./Pages/${name}.tsx`,
        import.meta.glob('./Pages/**/*.tsx'),
      ),
    setup: ({ App, props }) => {
      const ssrRoute = (name: any, params: any, absolute: any, config: any) => {
        return route(name, params, absolute, {
          ...(page.props as any).ziggy,
          location: new URL((page.props as any).ziggy.url),
          ...config,
        });
      };
      return (
        <RouteContext.Provider value={ssrRoute as any}>
          <App {...props} />
        </RouteContext.Provider>
      );
    },
  }),
);
