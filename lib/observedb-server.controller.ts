import {
  Controller,
  Get,
  Post,
  Body,
  OnApplicationBootstrap,
  UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import * as cote from "cote";

@Controller("observedb")
export class ObservedbServerController implements OnApplicationBootstrap {
  dbChangesResponder: cote.Responder;
  dbChangesPublisher: cote.Publisher;

  constructor() {}

  onApplicationBootstrap() {
    this.dbChangesResponder = new cote.Responder({
      name: "dbChanges responder",
      namespace: "dbChanges",
      respondsTo: ["events"]
    });

    this.dbChangesPublisher = new cote.Publisher({
      name: "dbChanges publisher",
      namespace: "dbChanges",
      broadcasts: ["event_updates"]
    });
  }

  @Get("trigger")
  trigger(): any[] {
    let event: any = { val: 500 };
    this.dbChangesPublisher.publish("event_updates", event);
    return [];
  }

  @Post("select")
  @UseGuards(AuthGuard())
  select(@Body() data: any): any[] {
    console.log(data);
    return [];
  }
}
