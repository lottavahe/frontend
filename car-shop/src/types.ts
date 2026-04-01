
export type CarData = {
    brand: string;
    model: string;
    color: string;
    fuel: string;
    modelYear: number;
    price: number;
    _links: {
        self: {
            href: string;
        };
        car: {
            href: string;
        };
    };
};
export type Car = Omit<CarData, "_links">;
//ihmettelin kun cardata import ei toiminut oikein addcar
//tiedostossa, lisäsin tämän loin uuden tyypin car se on sama kuin cardata
//mutta ilman links kenttää