import * as React from "react";
import { Connected } from "./../../../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../../../../withRoot";
import { CustomColors } from "./../../../../style/colors";
import HeaderComponent from "./../../../../pages/header/header";
import FooterComponent from "./../../../../pages/footer/footer";
import { WebAPI } from "./../../../../services/webAPI";
import { Form } from "./../../../../components/Form/Form";
import { Field } from "./../../../../components/Form/component/Field";
import { IFields } from "./../../../../components/Form/interfaces/IFields";
import { required } from "./../../../../components/Form/validators/required";
import { TypeEntity } from "./../../../../services/client/typeService";

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
    }
  })

interface IState
{
    types: TypeEntity[];
}

interface IProps
{}

enum FieldTypes
{ 
    tipus = "tipus"
}

class AddType extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{ 
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
      super(props);

      this.state =
      {
          types: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      let types: TypeEntity[] = await WebAPI.Type.all().then(x => x);

      this.setState
      ({
        ...this.state,
        types
      });
    }

    private form : React.RefObject<Form> = React.createRef<Form>();

    submit = async (): Promise<void> =>
    {
      console.log("SUBMITED");
      const data = {...this.form.current!.state!.values};
      console.log(data);

      const type: TypeEntity = {
        Id: data.id,
        Name: data.tipus
      };

      const newType = await WebAPI.Type.typePost(type)
                                       .then(x => x)
                                       .catch();

      window.location.reload(false);
    }

    render()
    {
        const css = this.props.classes;

        const types:JSX.Element[] = this.state.types.map
        (
            x => x.Name != "" ?  <li>{x.Name}</li> : <span/>
        );

        const fields: IFields =
        {
          tipus:
          {
            id: FieldTypes.tipus,
            label: "Típus",
            validation: [ {rule: required} ]
          }
        }

        const Body = () =>
        <React.Fragment>
          <div>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <div>
              <p>Jelenlegi márkák:</p>
              <ul>
                  {types}
              </ul>
            </div>
              <Form
                  ref={this.form}
                  submit={() => this.submit()}
                  fields={ fields }
                  render={() => 
                  (
                      <React.Fragment>
                          <div className="alert alert-info" role="alert">
                              Új típus felvitele:
                          </div>
                          <Field {...fields.tipus} />
                      </React.Fragment>
                  )}
              />
              <FooterComponent />
          </div>
        </React.Fragment>

        return Body();
    }
}

const AddTypePage = withRoot(withStyles(styles)(AddType));
export default AddTypePage;
