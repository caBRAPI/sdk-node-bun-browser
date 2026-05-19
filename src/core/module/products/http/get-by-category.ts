import type { CoreClient } from "../../../client";
import type { GetProductsInput, GetProductsResponse } from "../index";

export async function getProductsByCategory(
  core: CoreClient,
  storeId: string,
  categoryId: string,
  input: GetProductsInput = {},
): Promise<GetProductsResponse> {
  const { data } = await core.http.get<GetProductsResponse>(
    `/stores/${storeId}/categories/${categoryId}/products`,
    {
      params: {
        page: input.page,
        limit: input.limit,
      },
    },
  );

  return data;
}
