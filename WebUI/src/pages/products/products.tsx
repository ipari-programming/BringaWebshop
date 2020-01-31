import * as React from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { BicycleResponse } from "../../services/client/bicycleService";
import { WebAPI } from "../../services/webAPI";
import BicycleComponent from "../../components/bicycle";

const styles = (theme: Theme) =>
  createStyles
  ({
    container:
    {
      display: "flex",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  });

interface IState
{
  bicycles: BicycleResponse[];
}

interface IProps
{}

  class Products extends React.Component<IProps & WithStyles<typeof styles>, IState>
  {
    constructor(props: IProps & WithStyles<typeof styles>)
    {
      super(props);

      this.state =
      {
        bicycles: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      const bicyclesDB: BicycleResponse[] = await WebAPI.Bicycle.allData().then(x => x);

      this.setState
        ({
          ...this.state,
          bicycles: bicyclesDB
        });
    }

    render()
    {
        const css = this.props.classes;
        const bicycles:JSX.Element[] = this.state.bicycles.map
        (
          x => <React.Fragment><BicycleComponent bicycle={x} /></React.Fragment>
        );

        console.log(bicycles);

        const Body = () =>
            <div className={css.container}>
              <h1>Termékek</h1>
              {bicycles}
            </div>

        return Body();
    }
  }

const ProductsPage = withRoot(withStyles(styles)(Products));
export default ProductsPage;