import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { Routes } from "./../../routing/urls";
import HeaderComponent from "../header/header";
import { BicycleResponse } from "./../../services/client/bicycleService";
import CartEntryComponent from "./../../components/cartEntry";

const styles = (theme: Theme) =>
  createStyles
  ({
    container:
    {
        background: "#000",
    }
  })

interface IState
{
    bicycles: BicycleResponse[]
}

interface IProps
{}


class Cart extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);
    }

    render()
    {
        const css = this.props.classes;
        const bicycles:JSX.Element[] = this.state.bicycles.map
        (
          x => <Route key={x.Id} render={ props => <CartEntryComponent bicycle={x} {...props}/> }/>
        );

        const Body = () =>
            <div className={css.container}>
                <Route render={ props => <HeaderComponent {...props}/> }/>
                {bicycles}
            </div>
        
        return Body();
    }
}

const CartPage = withRoot(withStyles(styles)(Cart));
export default CartPage;