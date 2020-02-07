/*
import { Connected } from "../../lib/store/connected.mixin";
import * as React from "react";
import { WithStyles, Theme, createStyles, withStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";
import { AppStore } from "../../lib/appStore";
import withRoot from "../../withRoot";

const styles = (theme: Theme) =>
  createStyles
  ({

  });

  interface IState
  {}
  
  interface IProps
  {}

class TEMPLATE extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        
    }

    render()
    {
        const css = this.props.classes;

        const Body = () =>
            <div></div>
        
        return Body;
    }
}

const TEMPLATEPage = withRoot(withStyles(styles)(TEMPLATE));
export default TEMPLATEPage;
*/