import React, { Fragment, ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Tarjeta } from '../card/Tarjeta';
import * as Data from '../../../assets/Test_Data.json';



interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

interface LinkTabProps {
    label?: string;
    href?: string;
}





const useStyles = makeStyles((theme: Theme) => ({
    flexContainer: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 11,
            padding: 0
        },
    },
}));

export const TabsComponent = (): JSX.Element => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const productos: any = Data.Productos;

    function LinkTab(props: LinkTabProps) {
        return (
            <Tab
                className={classes.flexContainer}
                component="a"
                onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    event.preventDefault();
                }}
                {...props}
            />
        );
    }

    const renderProductos = (categoria: number) => {
        return (
            <Fragment>
                {Object.keys(productos).map((productKey: string) => {

                    return productos[productKey].idCategoria === categoria && <Tarjeta datosProducto={productos[productKey]} />

                    //<h1>{productos[productKey].descriProducto}</h1>

                })}
            </Fragment>
        )
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };


    return (
        <div>
            <AppBar position="sticky">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Sandwich"  {...a11yProps(0)} />
                    <LinkTab label="Pizzas" {...a11yProps(1)} />
                    <LinkTab label="Combos"  {...a11yProps(2)} />
                    <LinkTab label="Fritas" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="flex flex-wrap m-5 space-x-1 gap-20 justify-center">
                    {renderProductos(9)}
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="flex flex-wrap m-5 space-x-1 gap-20 justify-center">
                    {renderProductos(7)}
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="flex flex-wrap m-5 space-x-1 gap-20 justify-center">
                    {renderProductos(102)}
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className="flex flex-wrap m-5 space-x-1 gap-20 justify-center">
                    {renderProductos(83)}
                </div>
            </TabPanel>
        </div>
    );
}
