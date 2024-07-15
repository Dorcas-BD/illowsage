export const HTTP_ENUM = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;

export type HttpType = (typeof HTTP_ENUM)[keyof typeof HTTP_ENUM];
