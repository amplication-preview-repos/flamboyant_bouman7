import { RetailerWhereInput } from "./RetailerWhereInput";
import { RetailerOrderByInput } from "./RetailerOrderByInput";

export type RetailerFindManyArgs = {
  where?: RetailerWhereInput;
  orderBy?: Array<RetailerOrderByInput>;
  skip?: number;
  take?: number;
};
