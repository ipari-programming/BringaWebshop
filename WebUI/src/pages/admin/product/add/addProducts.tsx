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
    }
  })

interface IState
{
  brands: { Id: number | undefined, Name: string | undefined }[];
  shifters: { Id: number | undefined, Name: string | undefined }[];
  sizes: { Id: number | undefined, Name: string | undefined }[];
  types: { Id: number | undefined, Name: string | undefined }[];
  wheelDiameters: { Id: number | undefined, Name: string | undefined }[];
}

interface IProps
{}

enum FieldTypes
{ 
    cikkszam = "cikkszam",
    marka = "marka",
    vazmeret = "vazmeret",
    felniAtmero="felniAtmero",
    valtoTipus = "valtoTipus",
    tipus="tipus",
    ar="ar",
    url="kep"
}

class AddProduct extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{ 
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
      super(props);

      this.state =
      {
        brands: [],
        shifters: [],
        sizes: [],
        types: [],
        wheelDiameters: []
      }
    }

    componentWillMount = async (): Promise<void> =>
    {
      let brands: { Id: number | undefined, Name: string | undefined }[] = await WebAPI.Brand.all().then(x => x);
      let shifters: { Id: number | undefined, Name: string | undefined }[] = await WebAPI.Shifter.all().then(x => x);
      let sizes: { Id: number | undefined, Name: string | undefined }[] = await WebAPI.Size.all().then(x => x);
      let types: { Id: number | undefined, Name: string | undefined }[] = await WebAPI.Type.all().then(x => x);
      let wheelDiameters: { Id: number | undefined, Name: string | undefined }[] = await WebAPI.WheelDiameter.all().then(x => x);

      this.setState
      ({
        ...this.state,
        brands,
        shifters,
        sizes,
        types,
        wheelDiameters
      });
    }

    private form : React.RefObject<Form> = React.createRef<Form>();

    submit = async (): Promise<void> =>
    {
      console.log("SUMBITED");
      const data = {...this.form.current!.state!.values};
      console.log(data);

      const bicucli: BicycleEntity =
        {
          Id: data.id,
          Cikkszam : data.cikkszam,
          MarkaID: data.marka,
          VazmeretID: data.vazmeret,
          FelniAtmeroID: data.felniAtmero,
          ValtoTipus: data.valtoTipus,
          TipusID: data.tipus,
          Ar : data.ar,
          URL: data.kep
        };

      const bicycle = await WebAPI.Bicycle.create(bicucli)
                                         .then(x => x)
                                         .catch();
    }

    render()
    {
        const css = this.props.classes;

        const fields: IFields =
        {
          cikkszam:
          {
            id: FieldTypes.cikkszam,
            label: "Cikszám",
            validation: [ {rule: required} ]
          },
          marka:
          {
            id: FieldTypes.marka,
            label: "Márka",
            editor: "dropdown",
            selectData: this.state ? this.state.brands : [],
            validation: [ {rule: required} ]
          },
          vazmeret:
          {
            id: FieldTypes.vazmeret,
            label: "Váz méret",
            editor: "dropdown",
            selectData: this.state ? this.state.sizes : [],
            validation: [ {rule: required} ]
          },
          felniAtmero:
          {
            id: FieldTypes.felniAtmero,
            label: "Felni átmérő",
            editor: "dropdown",
            selectData: this.state ? this.state.wheelDiameters : [],
            validation: [ {rule: required} ]
          },
          valtoTipus:
          {
            id: FieldTypes.valtoTipus,
            label: "Váltó típus",
            editor: "dropdown",
            selectData: this.state ? this.state.shifters : [],
            validation: [ {rule: required} ]
          },
          tipus:
          {
            id: FieldTypes.tipus,
            label: "Típus",
            editor: "dropdown",
            selectData: this.state ? this.state.types : [],
            validation: [ {rule: required} ]
          },
          ar:
          {
            id: FieldTypes.ar,
            label: "Ár",
            validation: [ {rule: minValue, args: 0}, {rule: required}]
          },
          url:
          {
            id: FieldTypes.url,
            label: "Kép",
          }
        }

        const Body = () =>
        <React.Fragment>
            <Route render={ props => <HeaderComponent {...props}/> }/>
            <Form
                ref={this.form}
                submit={() => this.submit()}
                fields={ fields }
                render={() => 
                (
                    <React.Fragment>
                        <div className="alert alert-info" role="alert">
                            Új kerékpár adatainak felvitele:
                        </div>
                        <Field {...fields.cikkszam} />
                        <Field {...fields.marka} />
                        <Field {...fields.vazmeret} />
                        <Field {...fields.felniAtmero} />
                        <Field {...fields.valtoTipus} />
                        <Field {...fields.tipus} />
                        <Field {...fields.ar} />
                        <Field {...fields.url} />
                    </React.Fragment>
                )}
            />
            <FooterComponent />
        </React.Fragment>

        return Body();
    }
}

const AddProductPage = withRoot(withStyles(styles)(AddProduct));
export default AddProductPage;
