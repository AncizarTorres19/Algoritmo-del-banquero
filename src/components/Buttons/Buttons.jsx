import { Button, Grid } from "@mui/material";

export default function Buttons({ proceso, reset }) {
    return (
        <Grid container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ maxWidth: '100%', p: 1 }}
        >
            <Grid item xs={12}>
                <Button fullWidth variant="contained" color="success"
                    onClick={() => proceso()}
                >
                    Ejecutar
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant="contained" color="info"
                    onClick={() => reset()}
                >
                    Reiniciar
                </Button>
            </Grid>
        </Grid>
    )
}
