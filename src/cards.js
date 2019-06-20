import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import INGLOGO from './INGLOGO.png';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className="row col-md-12 pl-5 pb-5 pr-5">
            <div className="col-md-4">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                            <img className="img-responsive" style={{ width: "460", height: "345" }}
                            src={INGLOGO} alt="inglogo" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Innovation
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                “Innovation is about people” – Benoît Legrand
                                 07 June 2019 Innovation chief takes the stage at Money 20/20 Europe
                           </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                         </Button>
                        <Button size="small" color="primary">
                            Learn More
                          </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="col-md-4">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                           <img className="img-responsive" style={{ width: "460", height: "345" }}
                            src={INGLOGO} alt="inglogo" />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Innovation
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                “Innovation is about people” – Benoît Legrand 07 June 2019 Innovation chief takes the stage at Money 20/20 Europe
                             </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                         </Button>
                        <Button size="small" color="primary">
                            Learn More
                         </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="col-md-4">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                          <img className="img-responsive" style={{ width: "460", height: "345" }}
                            src={INGLOGO} alt="inglogo" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Innovation
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                “Innovation is about people” – Benoît Legrand 07 June 2019 Innovation chief takes the stage at Money 20/20 Europe
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                         </Button>
                        <Button size="small" color="primary">
                            Learn More
                         </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
