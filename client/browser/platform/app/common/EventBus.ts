type EventHandler = (browserClientEvent: IBrowserClientEvent) => any;

type EventType = string;

interface IBrowserClientEvent {
  readonly type: EventType;
  readonly [key: string]: any;
}

interface IEventMap {
  [eventType: string]: EventHandler[];
}

export class EventBus {
  private _events: IEventMap = {};

  public dispatch(event: IBrowserClientEvent): void {
    if (this._events[event.type]) {
      this._events[event.type].forEach(handler => handler(event));
    }
  }

  public register(eventType: EventType, handler: EventHandler): void {
    if (!this._events[eventType]) {
      this._events[eventType] = [];
    }

    this._events[eventType].push(handler);
  }
}