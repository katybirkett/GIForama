/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GIPHY_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
