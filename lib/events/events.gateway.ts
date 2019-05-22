import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { OnApplicationBootstrap } from "@nestjs/common";
import { Server } from "socket.io";

import * as cote from "cote";

@WebSocketGateway()
export class EventsGateway implements OnApplicationBootstrap {
  @WebSocketServer()
  server: Server;

  onApplicationBootstrap() {
    new cote.Sockend(this.server, {
      name: "Client Sockend Host"
    });
  }
}
