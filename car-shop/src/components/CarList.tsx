import { useEffect, useState } from "react";
import type { CarData } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
function CarList() {
    const [cars, setCars] = useState<CarData[]>([]);

    const columns: GridColDef[] = [
        {field: "brand", width: 200, headerName: "Brand"},
        {field: "model", width: 150, headerName: "Model"},
        {field: "color", headerName: "Color"},
        {field: "fuel", headerName: "Fuel type"},
        {field: "modelYear", headerName: "Model year"},
        {field: "price", headerName: "Price €"},
        {field: "_links.self.href", 
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams) =>
                <button onClick={() => 
                    handleDelete(params.id as string)}> DELETE
                </button>

        }
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

    const handleDelete = (url: string) => {
        if (window.confirm("Are you shure you want to delete it?")) {
            fetch(url, {
                method: "DELETE"
            })
            .then(response => {
                if (!response.ok)
                    throw new Error ("error when deleting a car");
                return response.json();
            })
            .then(() => getCars())
            .catch(error => console.error(error))
        }
    }
    useEffect(() => {
        getCars();
    },[])


    
    return (
        <>
        <div style={{height: 500, width: "100%"}}>
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