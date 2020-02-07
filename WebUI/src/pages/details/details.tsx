import { Connected } from "../../lib/store/connected.mixin";
import * as React from "react";
import { WithStyles, Theme, createStyles, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { AppStore } from "../../lib/appStore";
import withRoot from "../../withRoot";
import { BicycleResponse } from "../../services/client/bicycleService";

const styles = (theme: Theme) =>
  createStyles
  ({

  });

  interface IState
  {
      bicycle: BicycleResponse
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
            bicycle: this.store.state.selectedBicycle
        }
    }

    render()
    {
        const css = this.props.classes;

        const Body = () =>
            <div></div>
        
        return Body;
    }
}

const DetailsPage = withRoot(withStyles(styles)(Details));
export default DetailsPage;