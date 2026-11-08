import { createAxios } from "./http";

/**
 * Tipo derivado da instância do Axios
 * (evita problemas no build de types)
 */
type AxiosInstance = ReturnType<typeof createAxios>;

/**
 * Modos disponíveis
 */
export type ClientMode = "public" | "private";

/**
 * Enum de modos disponíveis
 */
const MODES = { PUBLIC: "public", PRIVATE: "private" } as const;

/**
 * Builder de opções (estilo fluente):
 *
 * ```ts
 * new CoreClient.Options(CoreClient.Mode.PRIVATE)
 *   .apiKey("SUA_API_KEY");
 * ```
 */
export class CoreClientOptions {
  private _config?: { key?: string; baseURL?: string };

  public readonly type: ClientMode;

  constructor(type: ClientMode) {
    this.type = type;
  }

  public apiKey(key: string): this {
    this._config = { ...(this._config ?? {}), key };
    return this;
  }

  public baseURL(url: string): this {
    this._config = { ...(this._config ?? {}), baseURL: url };
    return this;
  }

  public get config(): { key?: string; baseURL?: string } {
    return this._config ?? {};
  }
}

/**
 * Detecta ambiente
 */
const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

/**
 * Cliente base da caBRAPI
 */
export class CoreClient {
  /**
   * Modos (estilo builder): `CoreClient.Mode.PRIVATE` / `CoreClient.Mode.PUBLIC`
   */
  public static readonly Mode = MODES;

  /**
   * Builder de opções: `new CoreClient.Options(CoreClient.Mode.PRIVATE).apiKey("...")`
   */
  public static readonly Options = CoreClientOptions;

  public http: AxiosInstance;
  public mode: ClientMode;
  public isBrowser: boolean;

  constructor(options: CoreClientOptions) {
    if (!(options instanceof CoreClientOptions)) {
      throw new Error(
        "Formato legado removido. Use: new CoreClient.Options(CoreClient.Mode.PUBLIC | CoreClient.Mode.PRIVATE).",
      );
    }
    this.mode = options.type;
    this.isBrowser = isBrowser;

    // 🔐 só backend usa key
    const apiKey =
      !this.isBrowser && this.mode === "private"
        ? options.config.key
        : undefined;

    this.http = createAxios({ baseURL: options.config.baseURL, apiKey });

    // ⚠️ aviso dev
    if (this.isBrowser && this.mode === "private") {
      console.warn(
        "[caBRAPI] Modo 'private' detectado no navegador. API key ignorada.",
      );
    }
  }

  /**
   * Está em modo privado (backend)
   */
  public isPrivate(): boolean {
    return !this.isBrowser && this.mode === "private";
  }

  /**
   * Está em modo público
   */
  public isPublic(): boolean {
    return this.isBrowser || this.mode === "public";
  }

  /**
   * Garante execução no backend
   */
  public assertPrivate(): void {
    if (!this.isPrivate()) {
      throw new Error(
        "Este método é privado e não pode ser usado no navegador.",
      );
    }
  }
}
