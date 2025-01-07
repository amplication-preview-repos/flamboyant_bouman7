import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RetailerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
};
