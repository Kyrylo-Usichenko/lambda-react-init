import HttpClientProtected from "./http-client-protected";
export type UpdateNotification = {
  text_message: boolean;
  email: boolean;
  unsubscribe: boolean;
};
export default class MainProtected extends HttpClientProtected {
  private static instanceCached: MainProtected;

  private constructor() {
    super(import.meta.env.VITE_APP_TITLE);
  }

  static getInstance = () => {
    if (!MainProtected.instanceCached) {
      MainProtected.instanceCached = new MainProtected();
    }

    return MainProtected.instanceCached;
  };

  public getPostPhotoUrl = () => this.instance.get<any>(`/123`);
}
