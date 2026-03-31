import { useEffect, useState } from "react";
import type { CarData } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef} from "@mui/x-data-grid";
function CarList() {
    const [cars, setCars] = useState<CarData[]>([]);

    const columns: GridColDef[] = [
        {field: "brand", width: 200, headerName: "Brand"},
        {field: "model", width: 150, headerName: "Model"},
        {field: "color", headerName: "Color"},
        {field: "fuel", headerName: "Fuel type"},
        {field: "modelYear", headerName: "Model year"},
        {field: "price", headerName: "Price €"},
    ]

    const getCars = () => {
        fetch("https://car-rest-service-carshop.2.rahtiapp.fi/cars")
            .then(response => {
                if (!response.ok)
                    throw new Error("error when fwtching cars");
                return response.json();
            })
            .then(data => setCars(data._embedded.cars))
            .catch(error => console.error(error));
    }
    useEffect(() => {
        getCars();
    },[])

    
    return (
        <>
        <div>
            <DataGrid
            columns={columns}
            rows={cars}
            getRowId={row => row._links.self.href}
            rowSelection={false}
            />
        </div>
        {/*Tässä testasin että näkyykö data oikein nettisivulla
        {cars.map((car, index) => (
            <div key={index}>
                {car.brand} {car.model} {car.price}
            </div>
        ))}*/}
        </>
    );
}

export default CarList;