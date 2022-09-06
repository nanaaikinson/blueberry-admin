import SecureLS from "secure-ls";

export class SecureStorage {
  private ls: SecureLS;

  constructor() {
    const secret = import.meta.env.VITE_APP_KEY;
    this.ls = new SecureLS({
      encryptionSecret: secret,
    });
  }

  /**
   * Get item by key
   *
   * @param key
   * @returns any
   */
  public getItem(key: string) {
    return this.ls.get(key);
  }

  /**
   * Set item
   *
   * @param key
   * @param data
   */
  public setItem(key: string, data: unknown) {
    this.ls.set(key, data);
  }

  /**
   * Remove item by key
   *
   * @param key
   */
  public removeItem(key: string) {
    this.ls.remove(key);
  }
}
