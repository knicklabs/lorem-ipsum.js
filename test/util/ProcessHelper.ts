class ProcessHelper {
  public cachedPlatform: string;

  constructor() {
    this.cachedPlatform = process.platform;
  }

  public resetPlatform() {
    this.setPlatform(this.cachedPlatform);
  }

  public setPlatform(platform?: string) {
    Object.defineProperty(process, "platform", {
      value: platform,
    });
  }
}

export default ProcessHelper;
