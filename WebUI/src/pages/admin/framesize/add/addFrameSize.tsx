import * as React from "react";
import { Connected } from "./../../../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, ListItem, ListItemText, List } from "@material-ui/core"
import withRoot from "./../../../../withRoot";
import { CustomColors } from "./../../../../style/colors";
import HeaderComponent from "./../../../../pages/header/header";
import FooterComponent from "./../../../../pages/footer/footer";
import { WebAPI } from "./../../../../services/webAPI";
import { Form } from "./../../../../components/Form/Form";
import { Field } from "./../../../../components/Form/component/Field";
import { IFields } from "./../../../../components/Form/interfaces/IFields";
import { required } from "./../../../../components/Form/validators/required";
import { SizeEntity } from "./../../../../services/client/sizeService";

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
    sizes: SizeEntity[];
}

interface IProps
{}

enum FieldTypes
{ 
    meret = "meret"
}

class AddFrame extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{ 
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
      super(props);

      this.state =
      {
          sizes: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      let sizes: {Id: number | undefined, Name: string | undefined }[] = await WebAPI.Size.all().then(x => x);

      this.setState
      ({
        ...this.state,
        sizes
      });
    }

    private form : React.RefObject<Form> = React.createRef<Form>();

    submit = async (): Promise<void> =>
    {
      const data = {...this.form.current!.state!.values};

      const size: SizeEntity = {
        Id: data.id,
        Name: data.meret
      };

      const newSize = await WebAPI.Size.sizePost(size)
                                         .then(x => x)
                                         .catch();

      window.location.reload(false);
    }

    render()
    {
        const css = this.props.classes;

        const sizes:JSX.Element[] = this.state.sizes.map
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
          meret:
          {
            id: FieldTypes.meret,
            label: "Méret",
            validation: [ {rule: required} ]
          }
        }

        const Body = () =>
        <React.Fragment>
          <div className={css.container}>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <div>
              <p className={css.formLabel}>Jelenlegi méretek:</p>
              <List className={css.list}>
                  {sizes}
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
                              Új méret felvitele:
                          </div>
                          <Field {...fields.meret} />
                      </React.Fragment>
                  )}
              />
              <FooterComponent />
          </div>
        </React.Fragment>

        return Body();
    }
}

const AddFrameSizePage = withRoot(withStyles(styles)(AddFrame));
export default AddFrameSizePage;
