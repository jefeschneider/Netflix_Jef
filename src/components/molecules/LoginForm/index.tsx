
import { useFormik } from 'formik';
import { TextField, Grid, Paper, styled, ButtonProps } from '@mui/material';
import Title from "../../atoms/Title";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalog from '../../../pages/Catalog/Catalog';
import { Link } from 'react-router-dom';

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: '',
            senha: '',
        },
        onSubmit: search,
    });

    const { handleChange, values, handleSubmit } = formik
    const { email, senha } = values

    function search(values: any) {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                    height: '100vh',
                }}
            >
                <Grid item >
                    <form onSubmit={handleSubmit}>
                        <Paper
                            sx={{
                                width: '27vw',
                                paddingY: 9,
                                paddingX: 11,
                                background: 'linear-gradient(#000000, transparent 400%)',
                                color: '#FFFFFF',
                            }}
                        >
                            <Title style={{ marginBottom: 30 }}>Login</Title>
                            <Grid
                                container
                                justifyContent="center"
                                spacing={0}
                                direction="column"
                            >
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="User"
                                    name="User"
                                    type="User"
                                    label="User"
                                    onChange={handleChange}
                                    value={email}
                                    variant="filled"
                                    className='login-textfield'
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    onChange={handleChange}
                                    value={senha}
                                    variant="filled"
                                    className='login-textfield'
                                />
                            </Grid>
                            <Grid item>
                                <br />
                                <Link to='/catalogo'>
                                    <Button type="submit" variant="danger" style={{ width: '100%' }}>Send</Button>
                                </Link>
                            </Grid>
                        </Paper>
                    </form>
                </Grid>
            </Grid >
        </>
    )
}

export default LoginForm