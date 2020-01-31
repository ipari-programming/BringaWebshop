import * as React from "react";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../../withRoot";

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
{}

interface IProps
{}

  class Products extends React.Component<IProps & WithStyles<typeof styles>, IState>
  {
    render()
    {
        const css = this.props.classes;

        const Body = () =>
            <div className={css.container}>
                Products page
            </div>

        return Body();
    }
  }

const ProductsPage = withRoot(withStyles(styles)(Products));
export default ProductsPage;