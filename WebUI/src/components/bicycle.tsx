import * as React from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../withRoot";
import { BicycleResponse } from "../services/client/bicycleService";

const styles = (theme: Theme) =>
  createStyles
  ({
    container:
    {
      display: "flex",
      flexGrow: 1
    },
    card:
    {
        width: 300,
        height: 450,
        backgroundColor: "#121212",
        display: "block",
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        boxShadow: "5px 5px 20px #33ff00"
    },
    kep:
    {
        width: 300,
        height: 230,
        border: "10px solid #121212"
    },
    cardContainer:
    {
        width: 300,
        maxHeight: 800,
        backgroundColor: "#121212"
    },
    cim:
    {
        marginLeft: 10,
        color: "#33ff00"
    },
    cardText:
    {
        display: "block",
        width: "100%",
        height: "100%",
        marginTop: 25,
        marginBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        wordBreak: "break-all"
    }
  });

interface IState
{}

interface IProps
{
    bicycle: BicycleResponse;
}

  class Bicycle extends React.Component<IProps & WithStyles<typeof styles>, IState>
  {
    render()
    {
        const css = this.props.classes;

        const Body = () =>
            <div className={css.card}>
                <img src={this.props.bicycle.URL} className={css.kep} alt=""/>
                <div className={css.cardContainer}>
                    <h2 className={css.cim}>{this.props.bicycle.Marka}</h2>
                    <h3 className={css.cim}>{this.props.bicycle.Tipus}</h3>
                    <div className={css.cardText}>
                        TODO description
                        IDEA: generate description from data
                    </div>
                </div>
            </div>

        return Body();
    }
  }

const BicycleComponent = withRoot(withStyles(styles)(Bicycle));
export default BicycleComponent;