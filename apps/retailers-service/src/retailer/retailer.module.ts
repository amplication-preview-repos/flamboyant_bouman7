import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RetailerModuleBase } from "./base/retailer.module.base";
import { RetailerService } from "./retailer.service";
import { RetailerController } from "./retailer.controller";
import { RetailerResolver } from "./retailer.resolver";

@Module({
  imports: [RetailerModuleBase, forwardRef(() => AuthModule)],
  controllers: [RetailerController],
  providers: [RetailerService, RetailerResolver],
  exports: [RetailerService],
})
export class RetailerModule {}
