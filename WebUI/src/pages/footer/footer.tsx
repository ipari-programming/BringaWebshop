import * as React from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import withRoot from "./../../withRoot";

const styles = (theme: Theme) =>
    createStyles
    ({
        
    });

interface IState { }

interface IProps { }

class Footer extends React.Component<IProps & WithStyles<typeof styles>, IState>
{
    render() {
        const Body = () =>
            <div>
                Copyright BringaWebshop 2020. All rights reserved.©
            </div>

        return Body();
    }
}

const FooterComponent = withRoot(withStyles(styles)(Footer));
export default FooterComponent;