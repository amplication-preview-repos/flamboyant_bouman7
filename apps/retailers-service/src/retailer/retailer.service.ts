import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RetailerServiceBase } from "./base/retailer.service.base";

@Injectable()
export class RetailerService extends RetailerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
