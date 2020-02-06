import * as React from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { BicycleResponse } from "../../services/client/bicycleService";
import { WebAPI } from "../../services/webAPI";
import BicycleComponent from "../../components/bicycle";
import { CustomColors } from "../../style/colors";

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
    productContainer:
    {
      display: "flex",
      flexDirection: "row",
      flexGrow: 1,
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    },
    hText:
    {
      color: "#33ff00"
    }
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
          <h1 className={css.hText}>Termékek</h1>
          <div className={css.productContainer}>
              {bicycles}
          </div>
        </div>

        return Body();
    }
  }

const ProductsPage = withRoot(withStyles(styles)(Products));
export default ProductsPage;