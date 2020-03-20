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
import { WheelDiameterEntity } from "../../../../services/client/wheelDiameterService";

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
    diameters: WheelDiameterEntity[];
}

interface IProps
{}

enum FieldTypes
{ 
    diameter = "diameter"
}

class AddWheelDiameter extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{ 
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
      super(props);

      this.state =
      {
          diameters: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      let diameters: {Id: number | undefined, Name: string | undefined }[] = await WebAPI.WheelDiameter.all().then(x => x);

      this.setState
      ({
        ...this.state,
        diameters
      });
    }

    private form : React.RefObject<Form> = React.createRef<Form>();

    submit = async (): Promise<void> =>
    {
      const data = {...this.form.current!.state!.values};

      const diameter: WheelDiameterEntity = {
        Id: data.id,
        Name: data.diameter
      };

      const newDiameter = await WebAPI.WheelDiameter.wheelDiameterPost(diameter)
                                         .then(x => x)
                                         .catch();

      window.location.reload(false);
    }

    render()
    {
        const css = this.props.classes;

        const diameters:JSX.Element[] = this.state.diameters.map
        (
            x => x.Name != "" ?  <li>{x.Name}</li> : <span/>
        );
        const fields: IFields =
        {
          diameter:
          {
            id: FieldTypes.diameter,
            label: "Kerék átmérő",
            validation: [ {rule: required} ]
          }
        }

        const Body = () =>
        <React.Fragment>
          <div>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <div>
              <p>Jelenlegi kerék átmérők:</p>
              <ul>
                  {diameters}
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
                              Új kerék átmérő felvitele:
                          </div>
                          <Field {...fields.diameter} />
                      </React.Fragment>
                  )}
              />
              <FooterComponent />
          </div>
        </React.Fragment>

        return Body();
    }
}

const AddWheelDiameterPage = withRoot(withStyles(styles)(AddWheelDiameter));
export default AddWheelDiameterPage;
