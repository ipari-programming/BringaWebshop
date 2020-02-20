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
    cikkszam: string;
    markaId: number;
    vazmeretId: number;
    felniAtmeroId: number;
    valtoTipus: number;
    tipusId: number;
    ar: number;
    url: string;
}

interface IProps
{}

class AddProduct extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        this.state =
        {
            cikkszam : "",
            markaId : 0,
            vazmeretId : 0,
            felniAtmeroId: 0,
            valtoTipus: 0,
            tipusId: 0,
            ar: 0,
            url: ""
        }
    }

    isFormFilled = (): boolean =>
    {
        return this.state.cikkszam.length == 16 &&
               this.state.markaId !=0 &&
               this.state.vazmeretId !=0 &&
               this.state.felniAtmeroId !=0 &&
               this.state.valtoTipus !=0 &&
               this.state.tipusId !=0 &&
               this.state.ar > 0 &&
               this.state.url != "";
    }

    onTextChanged = (e: React.ChangeEvent<HTMLInputElement>): void =>
    {
      e.preventDefault();
      this.setState
      ({
          [e.target.name]: e.target.value
      });
    }

    onAddProductClickHandler = async (): Promise<void> =>
    {
        const data: BicycleEntity =
        {
            Ar : this.state.ar,
            Cikkszam : this.state.cikkszam,
            FelniAtmeroID: this.state.felniAtmeroId,
            MarkaID: this.state.markaId,
            TipusID: this.state.tipusId,
            URL: this.state.url,
            ValtoTipus: this.state.valtoTipus,
            VazmeretID: this.state.vazmeretId
        };

        const bicycle = await WebAPI.Bicycle.create(data)
                                         .then(x => x)
                                         .catch();

        console.log(bicycle);
        
        if (bicycle)
        {
            alert("kész tes");
        }
        else alert("rip");
    }

    render()
    {
        const css = this.props.classes;

        const loginButton = this.isFormFilled() ?
        <Button variant="contained" color="primary"
            onClick={this.onAddProductClickHandler}>
            FELVITEL
        </Button> :
        <Button variant="contained" disabled>
            FELVITEL
        </Button>

        const Body = () =>
            <div className={css.container}>
            <h1 className={css.hText}>Add Products</h1>
            <Route render={ props => <HeaderComponent {...props}/> }/>
              <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        name="cikkszam"
                        id="outlined-basic"
                        label="Cikkszám"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        type="number"
                        name="markaId"
                        id="outlined-basic"
                        label="Márka ID"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        type="number"
                        name="vazmeretId"
                        id="outlined-basic"
                        label="Vázméret ID"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        type="number"
                        name="felniAtmeroId"
                        id="outlined-basic"
                        label="Felni átmérő ID"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        type="number"
                        name="valtoTipus"
                        id="outlined-basic"
                        label="Váltó típus"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        type="number"
                        name="tipusId"
                        id="outlined-basic"
                        label="Típus ID"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        type="number"
                        name="ar"
                        id="outlined-basic"
                        label="Ár"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                <TextField InputLabelProps={{
                          classes: {
                            root: css.textFieldLabel,
                            focused: css.textFieldFocused
                          }
                        }}
                        InputProps={{
                          classes: {
                            root: css.textFieldOutlinedInput,
                            focused: css.textFieldFocused,
                            notchedOutline: css.textFieldNotchedOutline,
                            input: css.textFieldFocused
                          },
                        }}
                        className={css.textField}
                        name="url"
                        id="outlined-basic"
                        label="Kép URL"
                        variant="outlined"
                        onChange={this.onTextChanged}/>
                {loginButton}
            <FooterComponent />
            </div>

        return Body();
    }
}

const AddProductPage = withRoot(withStyles(styles)(AddProduct));
export default AddProductPage;