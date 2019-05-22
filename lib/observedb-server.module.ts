import { Module } from "@nestjs/common";
import { ObservedbServerController } from "./observedb-server.controller";
import { EventsModule } from "./events/events.module";

@Module({
  imports: [EventsModule],
  controllers: [ObservedbServerController]
})
export class ObservedbServerModule {}
