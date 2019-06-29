/* eslint-disable @typescript-eslint/no-explicit-any */

interface DependencyClass {
  new (...args: any[]): unknown;
}

export default (DependencyClass: DependencyClass) => <
  I extends object
>() => (Constructor: {new (...args: any[]): {}}) => {
  return (class extends Constructor {
    public constructor(...args: any[]) {
      super(...args, DependencyClass);
    }
  } as unknown) as {new (): I};
};
