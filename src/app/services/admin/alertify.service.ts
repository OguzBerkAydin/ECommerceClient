import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
    //message(message: string, messageType: MessageType, position: Position, delay: number = 3) 
    message(message: string, options: Partial<AlertifyOptions>) 
    {

      alertify.set("notifier", "delay", options.delay);
      alertify.set("notifier", "position", options.position);
      alertify[options.messageType](message);

    }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.TopRight;
  delay: Number = 3;
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Warning = "warning",
  Success= "success"
}
export enum Position{
  TopLeft = "top-left",
  TopCenter = "top-center",
  TopRight = "top-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right"
}
