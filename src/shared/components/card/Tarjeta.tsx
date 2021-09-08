import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Button, CardActionArea } from '@material-ui/core';
import "../card/tarjeta.css"
import { IProducto } from '../../../helpers/IProducto';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

interface props {
    datosProducto: IProducto
}

export const Tarjeta = ({ datosProducto }: props): JSX.Element => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        alert('Le diste like!');
    }

    return (
        <Card className={classes.root} >
            <CardHeader
                title={datosProducto.nombreProducto}
            />
            <CardMedia
                className={classes.media}
                image={datosProducto.imagenProducto}
                title={`${datosProducto.idProducto}`}

            />
            <CardContent>
                <Typography variant="subtitle1" color="textPrimary" component="p">
                    {datosProducto.descriProducto}
                </Typography>
            </CardContent>
            <div>
                <div className=" bg-purple-100 rounded text-center text-2xl mt-2">
                    ${datosProducto.precioProducto}
                </div>
            </div>


            <CardActions disableSpacing>
                <div className="content-end">
                    <IconButton aria-label="add to favorites" onClick={handleClick}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </div>
                <div className="content-end">
                    <IconButton aria-label="remove" >
                        <RemoveCircleIcon />
                    </IconButton>
                    <IconButton aria-label="add">
                        <AddCircleIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card >
    );
}