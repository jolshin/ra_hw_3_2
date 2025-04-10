export interface ListingProps {
    items: Array<{
        listing_id: number;
        url: string;
        MainImage: MainImage;
        title: string;
        currency_code: string;
        price: string;
        quantity: number;
    }>;
}

export interface MainImage {
  url_570xN: string 
}