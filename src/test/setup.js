import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Con globals: false, Testing Library no limpia el DOM automáticamente entre tests
afterEach(() => {
  cleanup();
});

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

globalThis.IntersectionObserver = globalThis.IntersectionObserver || IntersectionObserverMock;