import { useEffect, useState } from "react";
import type { CarData, Car } from "../types";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import AddCar from "./AddCar";
import EditCar from "./EditCar";


function CarList() {
    const [cars, setCars] = useState<CarData[]>([]);

    const columns: GridColDef[] = [
        { field: "brand", width: 200, headerName: "Brand" },
        { field: "model", width: 150, headerName: "Model" },
        { field: "color", headerName: "Color" },
        { field: "fuel", headerName: "Fuel type" },
        { field: "modelYear", headerName: "Model year" },
        { field: "price", headerName: "Price €" },
        {
            field: "edit",
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams) => (
                <EditCar carData={params.row} updateCar={updateCar} />
            )
        },
        {
            field: "delete",
            headerName: "",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridRenderCellParams) =>
                <button onClick={() =>
                    handleDelete(params.row._links.self.href)}> DELETE
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
        if (window.confirm("Are you sure you want to delete it?")) {
            fetch(url, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok)
                        throw new Error("error when deleting a car");
                    getCars();
                })
                .catch(error => console.error(error));
        }
    }
    useEffect(() => {
        getCars();
    }, [])

    const saveCar = (car: Car) => {
        fetch("https://car-rest-service-carshop.2.rahtiapp.fi/cars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        }).then(response => {
            if (!response.ok) {
                throw new Error("Error when saving car");
            }
            getCars();
        })
        .catch(error => console.error(error));
    };

    const updateCar = (car: Car, url: string) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        })
            .then(response => {
                if (!response.ok)
                    throw new Error("Error when updating car");
                getCars();
            })
            .catch(error => console.error(error));
    };



    return (
        <>
            <AddCar saveCar={saveCar} />
            <div style={{ height: 500, width: "100%" }}>
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