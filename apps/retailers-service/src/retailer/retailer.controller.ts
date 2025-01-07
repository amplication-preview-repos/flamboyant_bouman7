import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RetailerService } from "./retailer.service";
import { RetailerControllerBase } from "./base/retailer.controller.base";

@swagger.ApiTags("retailers")
@common.Controller("retailers")
export class RetailerController extends RetailerControllerBase {
  constructor(
    protected readonly service: RetailerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
