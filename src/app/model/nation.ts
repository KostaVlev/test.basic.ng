
export interface Nation
{
    name: string;
    nativeName: string;
    alpha2Code: string;
    alpha3Code: string;
    capital: string;
    flag: string;
    latlng: {
        latitude: number;
        longitude: number;
    }    
    selected: boolean;
}