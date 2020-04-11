import * as React from "react";
import { Connected } from "./../../../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, List, ListItem, ListItemText } from "@material-ui/core"
import withRoot from "./../../../../withRoot";
import { CustomColors } from "./../../../../style/colors";
import HeaderComponent from "./../../../../pages/header/header";
import FooterComponent from "./../../../../pages/footer/footer";
import { WebAPI } from "./../../../../services/webAPI";
import { Form } from "./../../../../components/Form/Form";
import { Field } from "./../../../../components/Form/component/Field";
import { IFields } from "./../../../../components/Form/interfaces/IFields";
import { required } from "./../../../../components/Form/validators/required";
import { BrandEntity } from "./../../../../services/client/brandService";

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
      minHeight: "100vh",
      backgroundColor: CustomColors.background
    },
    list:
    {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#121212",
      margin: 5
    },
    item:
    {
      color: "#33ff00 !important"
    },
    formLabel:
    {
      color: "#33ff00 !important",
      backgroundColor: CustomColors.background
    }
  })

interface IState
{
    brands: BrandEntity[];
}

interface IProps
{}

enum FieldTypes
{ 
    marka = "marka"
}

class AddBrand extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{ 
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
      super(props);

      this.state =
      {
          brands: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      let brands: {Id: number | undefined, Name: string | undefined }[] = await WebAPI.Brand.all().then(x => x);

      this.setState
      ({
        ...this.state,
        brands
      });
    }

    private form : React.RefObject<Form> = React.createRef<Form>();

    submit = async (): Promise<void> =>
    {
      console.log("SUBMITED");
      const data = {...this.form.current!.state!.values};
      console.log(data);

      const brand: BrandEntity = {
        Id: data.id,
        Name: data.marka
      };

      const newBrand = await WebAPI.Brand.brandPost(brand)
                                         .then(x => x)
                                         .catch();

      window.location.reload(false);
    }

    render()
    {
        const css = this.props.classes;

        const brands:JSX.Element[] = this.state.brands.map
        (
            x => x.Name != "" ?
                    <ListItem>
                      <ListItemText
                        classes={{ primary: css.item }}
                        primary={x.Name}
                      />
                    </ListItem> :
                    <span/>
        );

        const fields: IFields =
        {
          marka:
          {
            id: FieldTypes.marka,
            label: "Márka",
            validation: [ {rule: required} ]
          }
        }

        const Body = () =>
        <React.Fragment>
          <div className={css.container}>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <div>
              <p className={css.formLabel}>Jelenlegi márkák:</p>
                <List className={css.list}>
                  {brands}
                </List>
            </div>
              <Form
                  ref={this.form}
                  submit={() => this.submit()}
                  fields={ fields }
                  render={() => 
                  (
                      <React.Fragment>
                          <div className={css.formLabel}>
                              Új márka felvitele:
                          </div>
                          <Field  {...fields.marka} />
                      </React.Fragment>
                  )}
              />
              <FooterComponent />
          </div>
        </React.Fragment>

        return Body();
    }
}

const AddBrandPage = withRoot(withStyles(styles)(AddBrand));
export default AddBrandPage;
