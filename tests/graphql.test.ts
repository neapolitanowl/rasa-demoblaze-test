import { test, expect } from "@playwright/test";

test.describe("GraphQL API tests", () => {
  test("Should be able to get details of all continents", async ({ request }) => {
    const response = await request.post("https://countries.trevorblades.com/graphql", {
      data: {
        query: `
          query {
            continents {
              code
              name
            }
          }
        `,
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.continents).toBeInstanceOf(Array);
  });

  test("Should be able to get details of countries in a continent", async ({ request }) => {
    const response = await request.post("https://countries.trevorblades.com/graphql", {
      data: {
        query: `
          query {
            continent(code: "AS") {
              name
              countries {
                code
                name
              }
            }
          }
        `,
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.continent.name).toBe("Asia");
    expect(responseBody.data.continent.countries).toBeInstanceOf(Array);
  });

  test("Should be able to get details of a specific country by code", async ({ request }) => {
    const response = await request.post("https://countries.trevorblades.com/graphql", {
      data: {
        query: `
          query {
            country(code: "IN") {
              name
              capital
              currency
            }
          }
        `,
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.country.name).toBe("India");
    expect(responseBody.data.country.capital).toBe("New Delhi");
    expect(responseBody.data.country.currency).toBe("INR");
  });
});

