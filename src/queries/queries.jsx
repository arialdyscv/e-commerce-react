import { gql } from "@apollo/client";

export const CATEGORY = (productsName) => gql`
  query {
    category(input: {title: "${productsName}"}) {
        name
        products {
            id
            brand
            name
            inStock
            gallery
            category
            description
            attributes {
                id
                name
                type
                items {
                    id
                    value
                    displayValue
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
        }
    }
  }

`;

export const PRODUCT_BY_ID = (productId) => gql`
query {
    product( id: ${JSON.stringify(productId)}){
        id
        name
        description
        gallery
        inStock
        brand
        attributes {
            id
            name
            type
            items {
                id
                value
                displayValue
            }
        }
        prices {
            amount
            currency {
                label
                symbol
            }
        }
    }
    
}`;

export const PRODUCT_LIST = gql`
  query fetchProducts {
    categories {
      name
      products {
        id
        name
        brand
        description
        gallery
        inStock
        attributes {
          id
          name
          type
          items {
            displayValue
            value
          }
        }
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

export const NAVBAR_INFO = gql`
  query {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;
