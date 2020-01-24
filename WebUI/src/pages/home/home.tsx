import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { StorageService } from "./../../services/client/storage.service";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { CustomColors } from "./../../style/colors";
import { LocalImages } from "./../../staticFiles/images";

const styles = (theme: Theme) =>
  createStyles
  ({
    container:
    {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      backgroundColor: CustomColors.background1,
      color: CustomColors.foreground
    },
    logoContainer:
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    loginContainer:
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"}
  });

interface IState
{}

interface IProps
{}

class Home extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    storageService: StorageService = new StorageService();

    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        this.state =
        {}
    }

    render()
    {
      const css = this.props.classes;

      const Body = () =>
        <div className={css.container}>
          <div className={css.logoContainer}>
            <img src={LocalImages.images('./bringawebshop.jpg')} alt=""/>
          </div>
          <div className={css.loginContainer}></div>
        </div>
      return Body();
  }
}

const HomePage = withRoot(withStyles(styles)(Home));
export default HomePage;