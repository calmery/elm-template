const ports = new Proxy(
  {},
  {
    get: () => {
      return {
        subscribe: jest.fn(),
        send: jest.fn()
      };
    }
  }
);

export const Elm = {
  Main: {
    init: () => ({ ports })
  }
};
