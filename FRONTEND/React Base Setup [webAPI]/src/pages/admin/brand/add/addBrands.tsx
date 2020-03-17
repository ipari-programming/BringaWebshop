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
import { SizeEntity } from "./../../../../services/client/sizeService";
import { TypeEntity } from "./../../../../services/client/typeService";
import { WheelDiameterEntity } from "./../../../../services/client/wheelDiameterService";


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
    hText:
    {
      color: "#33ff00"
    },
    textField:
    {
      width: "90%"
    },
    textFieldLabel:
    {
      color : `${CustomColors.darkerFont} !important`,
    },
    textFieldOutlinedInput:
    {
      "&$cssFocused $notchedOutline":
      {
        borderColor: `${CustomColors.darkerFont} !important`,
      }
    },
    textFieldFocused:
    {
      color: "orange !important"
    },
    textFieldNotchedOutline:
    {
      borderWidth: "1px",
      borderColor: CustomColors.darkerFont + "!important"
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
      console.log("SUMBITED");
      const data = {...this.form.current!.state!.values};
      console.log(data);

      const brand: BrandEntity = {
        Id: data.id,
        Name: data.marka
      };

      const bicycle = await WebAPI.Brand.brandPost(brand)
                                         .then(x => x)
                                         .catch();
      /*
      if (bicycle)
      {
          alert("kész tes");
      }
      else alert("rip");*/
    }

    render()
    {
        const css = this.props.classes;

        const brands:JSX.Element[] = this.state.brands.map
        (
            x => <li>{x.Name}</li>
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
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <ul>
                {brands}
            </ul>
            <Form
                ref={this.form}
                submit={() => this.submit()}
                fields={ fields }
                render={() => 
                (
                    <React.Fragment>
                        <div className="alert alert-info" role="alert">
                            Új márka felvitele:
                        </div>
                        <Field {...fields.marka} />
                    </React.Fragment>
                )}
            />
            <FooterComponent />
        </React.Fragment>

        return Body();
    }
}

const AddBrandPage = withRoot(withStyles(styles)(AddBrand));
export default AddBrandPage;
