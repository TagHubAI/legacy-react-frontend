async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    // Force MSW to load immediately. This increases first load JS
    const { worker } = require('./browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
}

initMocks();

export {};
