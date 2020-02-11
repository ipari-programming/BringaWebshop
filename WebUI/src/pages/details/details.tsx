import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { Routes } from "../../routing/urls";
import { BicycleResponse } from "./../../services/client/bicycleService";
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
      backgroundColor: CustomColors.background
    },
    hText:
    {
      color: "#33ff00"
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
                <h1 className={css.hText}>Részletek</h1>
                <h1 className={css.hText}>{this.state.bicycle.Marka}</h1>
                 <h2 className={css.hText}>{this.state.bicycle.Tipus}</h2>
            </div>

        return Body();
    }
}

const DetailsPage = withRoot(withStyles(styles)(Details));
export default DetailsPage;