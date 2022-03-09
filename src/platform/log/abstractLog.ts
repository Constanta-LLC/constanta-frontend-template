export enum LogLevel {
  Trace,
  Debug,
  Info,
  Warning,
  Error,
  Critical,
  Off,
}

export abstract class AbstractLogService {
  private level: LogLevel = LogLevel.Info;

  public setLevel(level: LogLevel): void {
    if (this.level !== level) {
      this.level = level;
    }
  }

  public getLevel(): LogLevel {
    return this.level;
  }
}
