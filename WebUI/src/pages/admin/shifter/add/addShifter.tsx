import * as React from "react";
import { Connected } from "./../../../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import withRoot from "./../../../../withRoot";
import { CustomColors } from "./../../../../style/colors";
import HeaderComponent from "./../../../../pages/header/header";
import FooterComponent from "./../../../../pages/footer/footer";
import { BicycleEntity } from "./../../../../services/client/bicycleService";
import { WebAPI } from "./../../../../services/webAPI";
import { Form } from "./../../../../components/Form/Form";
import { Field } from "./../../../../components/Form/component/Field";
import { IFields } from "./../../../../components/Form/interfaces/IFields";
import { required } from "./../../../../components/Form/validators/required";
import { BrandEntity } from "./../../../../services/client/brandService";
import { ShifterEntity } from "./../../../../services/client/shifterService";
import { minValue } from "./../../../../components/Form/validators/minValue";
import { Urls } from "./../../../../routing/urls";

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
  shifters: ShifterEntity[];
}

interface IProps
{}

enum FieldTypes
{ 
  /*
  KEY = VALUE
  vigyazzunk arra, hogy a ket nev teljessen megegyezzen
  */
  valtoUj = "valtoUj"
}

class AddShifter extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{ 
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
      super(props);

      this.state =
      {
        shifters: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      let shifters: ShifterEntity[] = await WebAPI.Shifter.all().then(x => x);

      this.setState
      ({
        ...this.state,
        shifters
      });
    }

    private form : React.RefObject<Form> = React.createRef<Form>();

    submit = async (): Promise<void> =>
    {
      console.log("SUBMITED");
      const data = {...this.form.current!.state!.values};

      const shifter: ShifterEntity = 
      {
        Id: data.id,
        Name: data.valtoUj
      };

      console.log(shifter);

      const newShifter = await WebAPI.Shifter.shifterPost(shifter)
                                             .then(x => x)
                                             .catch();

      window.location.reload(false);
    }

    render()
    {
        const css = this.props.classes;

        const shifters:JSX.Element[] = this.state.shifters.map
        (
            x => x.Name != "" ?  <li>{x.Name}</li> : <span/>
        );
		
        const fields: IFields =
        {
          valtoUj:
          {
            id: FieldTypes.valtoUj,
            label: "Váltó típus",
            validation: [{rule: required}]
          }
        }

        const Body = () =>
        <React.Fragment>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <div>
              <p>Jelenlegi márkák:</p>
              <ul>
                  {shifters}
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
                            Új váltó típus felvitele:
                        </div>
                        <Field {...fields.valtoUj} />
                    </React.Fragment>
                )}
            />
            <FooterComponent />
        </React.Fragment>

        return Body();
    }
}

const AddShifterPage = withRoot(withStyles(styles)(AddShifter));
export default AddShifterPage;
