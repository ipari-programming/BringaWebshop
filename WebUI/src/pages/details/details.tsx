import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { Routes } from "./../../routing/urls";
import { BicycleResponse } from "./../../services/client/bicycleService";
import { CustomColors } from "./../../style/colors";
import HeaderComponent from "./../header/header";
import FooterComponent from "./../footer/footer";

const styles = (theme: Theme) =>
  createStyles
  ({
    container:
    {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: "100vh",
      minHeight: "100%",
      backgroundColor: CustomColors.background
    },
    detailsText:
    {
        color: "#33ff00",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    row:
    {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row"
    },
    imgContainer:
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%"
    },
    detailsContainer:
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%"
    },
    text:
    {
      color: "#33ff00"
    },
    img:
    {
        margin: 20,
        borderRadius: 15,
        border: "1px #000"
    }
  });

interface IState
{
    bicycle: BicycleResponse;
}

interface IProps
{}

class Details extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        this.state =
        {
            bicycle : this.store.state.selectedBicycle
        }
    }

    render()
    {
        const css = this.props.classes;

        const Body = () =>
            <div className={css.container}>
                <h1 className={css.detailsText}>Részletek</h1>
                <Route render={ props => <HeaderComponent {...props}/> }/>
                <div className={css.row}>
                    <div className={css.imgContainer}>
                        <img className={css.img} src={this.state.bicycle.URL} />
                        <p className={css.text}>{this.state.bicycle.Ar} HUF</p>
                        <Button variant="contained" color="primary">
                            Kosárba
                        </Button>
                    </div>
                    <div className={css.detailsContainer}>
                        <h3 className={css.text}>Termék neve: {this.state.bicycle.Marka} {this.state.bicycle.Tipus} bicikli</h3><br/>
                        <h3 className={css.text}>Termék tulajdonságai:</h3>
                            <p className={css.text}>Márka: {this.state.bicycle.Marka}</p>
                            <p className={css.text}>Típus: {this.state.bicycle.Tipus}</p>
                            <p className={css.text}>Felni átmérő: {this.state.bicycle.FelniAtmero}</p>
                            <p className={css.text}>Váltó típusa: {this.state.bicycle.Valto}</p>
                            <p className={css.text}>Váz mérete: {this.state.bicycle.Vazmeret}</p>
                            <p className={css.text}>Cikkszám: {this.state.bicycle.Cikkszam}</p>
                    </div>
                </div>
                <FooterComponent />
            </div>

        return Body();
    }
}

const DetailsPage = withRoot(withStyles(styles)(Details));
export default DetailsPage;