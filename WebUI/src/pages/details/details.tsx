import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { Routes } from "../../routing/urls";
import { BicycleResponse } from "./../../services/client/bicycleService";

const styles = (theme: Theme) =>
  createStyles
  ({})

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
            <div>
                <h1>{this.state.bicycle.Marka}</h1>
                 <h2>{this.state.bicycle.Tipus}</h2>
            </div>

        return Body();
    }
}

const DetailsPage = withRoot(withStyles(styles)(Details));
export default DetailsPage;