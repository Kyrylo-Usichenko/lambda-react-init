import HttpClient from "./http-client";

export interface phoneResponse {
  status: string;
  code: number;
}

class Main extends HttpClient {
  private static instanceCached: Main;

  private constructor() {
    super(import.meta.env.VITE_APP_TITLE);
  }

  static getInstance = () => {
    if (!Main.instanceCached) {
      Main.instanceCached = new Main();
    }

    return Main.instanceCached;
  };

  public sendPhone = () => this.instance.post<phoneResponse>("/otp");
}

export default Main;
