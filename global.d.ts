// global.d.ts
declare namespace NodeJS {
    interface Module {
      hot?: {
        accept: (callback?: () => void) => void;
      };
    }
  }