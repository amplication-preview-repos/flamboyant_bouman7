import { Retailer as TRetailer } from "../api/retailer/Retailer";

export const RETAILER_TITLE_FIELD = "name";

export const RetailerTitle = (record: TRetailer): string => {
  return record.name?.toString() || String(record.id);
};
