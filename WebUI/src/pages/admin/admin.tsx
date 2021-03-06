import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { Urls } from "./../../routing/urls";
import HeaderComponent from "../header/header";
import FooterComponent from "../footer/footer";
import { CustomColors } from "./../../style/colors";

const styles = (theme: Theme) =>
  createStyles
  ({
    container:
    {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: CustomColors.background
    },
    hText:
    {
      color: "#33ff00"
    },
    action:
    {
        color: "#FFF",
        "&:hover":
        {
            backgroundColor: "#33ff00",
            color: "#000"
        }
    }
  })

interface IState
{}

interface IProps
{}


class Admin extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        this.state =
        {}
    }

    createClickHandler = (): void =>
    {
        this.props.history.push(Urls.addProduct);
    }

    createBrandClickHandler = (): void =>
    {
        this.props.history.push(Urls.addBrand);
    }

    createShifterClickHandler = (): void =>
    {
        this.props.history.push(Urls.addShifter);
    }

    createSizeClickHandler = (): void =>
    {
        this.props.history.push(Urls.addSize);
    }

    createTypeClickHandler = (): void =>
    {
        this.props.history.push(Urls.addType);
    }

    createWheelDiameterClickHandler = (): void =>
    {
        this.props.history.push(Urls.AddWheelDiameter);
    }

    render()
    {
        const css = this.props.classes;

        const Body = () =>
            <div className={css.container}>
            <h1 className={css.hText}>Admin</h1>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <h3 className={css.action} onClick={this.createClickHandler}>Product Create</h3>
            <h3 className={css.action} onClick={this.createBrandClickHandler}>Brand Create</h3>
            <h3 className={css.action} onClick={this.createShifterClickHandler}>Shifter Create</h3>
            <h3 className={css.action} onClick={this.createSizeClickHandler}>Size Create</h3>
            <h3 className={css.action} onClick={this.createTypeClickHandler}>Type Create</h3>
            <h3 className={css.action} onClick={this.createWheelDiameterClickHandler}>Wheel diameter Create</h3>
            <FooterComponent />
            </div>
        
        return Body();
    }
}

const AdminPage = withRoot(withStyles(styles)(Admin));
export default AdminPage;