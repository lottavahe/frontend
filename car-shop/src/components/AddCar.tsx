import { useState } from "react";

function AddCar() {
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        fuel: "",
        modelYear: "",
        price: ""
    });
    return(
        <>
        <form>
            <input name="brand" value={car.brand} placeholder="Brand" />
            <input name="model" value={car.model} placeholder="Model" />
            <input name="color" value={car.color} placeholder="Color" />
            <input name="fuel" value={car.fuel} placeholder="Fuel type" />
            <input name="modelYear" value={car.modelYear} placeholder="Model year" />
            <input name="price" value={car.price} placeholder="Price €" />
            <button type="submit">Save</button>
        </form>
        </>
    );
}

export default AddCar;