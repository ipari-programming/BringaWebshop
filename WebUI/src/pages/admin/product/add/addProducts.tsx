import * as React from "react";
import { Connected } from "./../../../../lib/store/connected.mixin";
import { RouteComponentProps, Route } from "react-router";
import { AppStore } from "./../../../../lib/appStore";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../../../withRoot";
import { Routes } from "./../../../../routing/urls";
import { CustomColors } from "./../../../../style/colors";
import HeaderComponent from "./../../../../pages/header/header";
import FooterComponent from "./../../../../pages/footer/footer";
import { BicycleEntity } from "./../../../../services/client/bicycleService";
import { WebAPI } from "./../../../../services/webAPI";
import { Form } from "./../../../../components/Form/Form";
import { Field } from "./../../../../components/Form/component/Field";
import { IFields } from "./../../../../components/Form/interfaces/IFields";
import { required } from "./../../../../components/Form/validators/required";
import { minLength } from "./../../../../components/Form/validators/minLength";
import { BrandEntity } from "./../../../../services/client/brandService";
import { async } from "q";

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
{}

interface IProps
{}

enum FieldTypes
{ 
  cikkszam = "Cikkszam",
  marka = "Marka",
  vazmeret = "Vaz meret",
  felniAtmero = "Felni Atmero",
  valtoTipus = "Valto Tipus",
  tipus = "Tipus",
  ar = "Ar",
  url ="Url"
}

class AddProduct extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    private form : React.RefObject<Form> = React.createRef<Form>();

    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        this.state =
        {}
    }

    getBrands = async (): Promise<BrandEntity[]> =>
    {
      const brands: BrandEntity[] = await WebAPI.Brand.all().then(x => x);
      return brands;
    }

    private fields: IFields =
    {
        cikkszam:
        {
            id: FieldTypes.cikkszam.toString(),
            label: "Cikkszám",
            validation: [{ rule: required }]
        },
        marka:
        {
            id: FieldTypes.marka.toString(),
            label: "Márka",
            editor: "dropdown",
            selectData: this.getBrands().then(x => x)
        },
        vazmeret:
        {
            id: FieldTypes.vazmeret.toString(),
            label: "Váz méret",
            editor: "dropdown",
            selectData: []
        },
        felniAtmero:
        {
          id: FieldTypes.felniAtmero.toString(),
          label: "Felni átmérő",
          editor: "dropdown",
          selectData: []
        },
        valtoTipus:
        {
          id: FieldTypes.valtoTipus.toString(),
          label: "Valto típus",
          editor: "dropdown",
          selectData: []
        },
        tipus:
        {
          id: FieldTypes.tipus.toString(),
          label: "Típus",
          editor: "dropdown",
          selectData: []
        },
        ar:
        {
          id: FieldTypes.ar.toString(),
          label: "Ár",
          validation: [{ rule: minLength, args: 1000}]
        },
        url:
        {
            id: FieldTypes.url.toString(),
            label: "Kép",
        },
    };

    submit = async (): Promise<void> =>
    {
        //TODO: delete console.log
        const data = {...this.form.current!.state!.values};
        console.log(data);
    }

    render()
    {
        const css = this.props.classes;

        const Body = () =>
          <React.Fragment>
          <Route render={ props => <HeaderComponent {...props}/> }/>
          <Form
              ref={this.form}
              submit={() => this.submit()}
              fields={ this.fields }
              render={() => 
              (
                  <React.Fragment>
                      <div className="alert alert-info" role="alert">
                          Enter the information below and we'll get back to you as soon as we can.
                      </div>
                          <Field {...this.fields.cikkszam} />
                          <Field {...this.fields.marka} />
                          <Field {...this.fields.vazmeret} />
                          <Field {...this.fields.felniAtmero} />
                          <Field {...this.fields.valtoTipus} />
                          <Field {...this.fields.tipus} />
                          <Field {...this.fields.ar} />
                          <Field {...this.fields.url} />
                  </React.Fragment>
              )}
          />
      </React.Fragment>

        return Body();
    }
}

const AddProductPage = withRoot(withStyles(styles)(AddProduct));
export default AddProductPage;