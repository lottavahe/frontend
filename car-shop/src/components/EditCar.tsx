import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import type { Car, CarData } from "../types";

type EditCarProps = {
    carData: CarData;
    updateCar: (car: Car, url: string) => void;
};

function EditCar({ carData, updateCar }: EditCarProps) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState<Car>({
        brand: carData.brand,
        model: carData.model,
        color: carData.color,
        fuel: carData.fuel,
        modelYear: carData.modelYear,
        price: carData.price
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const editCar = () => {
        updateCar(car, carData._links.self.href);
        handleClose();
    }

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit car</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        margin="dense"
                        label="Brand"
                        value={car.brand}
                        onChange={e => setCar({ ...car, brand: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        label="Model"
                        value={car.model}
                        onChange={e => setCar({ ...car, model: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        label="Color"
                        value={car.color}
                        onChange={e => setCar({ ...car, color: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        label="Fuel"
                        value={car.fuel}
                        onChange={e => setCar({ ...car, fuel: e.target.value })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        label="Model Year"
                        value={car.modelYear}
                        onChange={e => setCar({ ...car, modelYear: parseInt(e.target.value) || 0 })}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        type="number"
                        label="Price €"
                        value={car.price}
                        onChange={e => setCar({ ...car, price: parseFloat(e.target.value) || 0 })}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={editCar}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default EditCar;