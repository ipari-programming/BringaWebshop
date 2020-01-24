import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { StorageService } from "./../../services/client/storage.service";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { CustomColors } from "./../../style/colors";
import { LocalImages } from "./../../staticFiles/images";
import { Validation } from "./../../validators";
import { WebAPI } from "./../../services/webAPI";
import { LoginRequest } from "./../../services/client/securityService";
import { StorageKeys } from "./../../settings/constats";
import FooterComponent from "../footer/footer";

const styles = (theme: Theme) =>
  createStyles
    ({
      container:
      {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        backgroundColor: CustomColors.background1,
        color: CustomColors.foreground
      },
      content:
      {
        display: "flex",
        flexGrow: 1,
        flexDirection: "row"
      },
      logoContainer:
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      loginContainer:
      {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%"
      },
      bottom:
      {
        ...theme.typography.button,
        padding: theme.spacing.unit.toFixed(),
        backgroundColor: CustomColors.background1,
        color: CustomColors.foreground,
        justifyContent: "center",
        textAlign: "center",
        fontSize: 32
      },
      textField:
      {
        borderColor: CustomColors.background2 + '!important',
        color: CustomColors.foreground + '!important',
        padding: 10
      },
      typography:
      {
        color: CustomColors.foreground + '!important'
      }
    });

interface IState {
  email : string;
  password : string;
}

interface IProps { }

class Home extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
  storageService: StorageService = new StorageService();

  constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillMount() {
    const storage : StorageService = new StorageService();
    const token: string | undefined = storage.read<string>(StorageKeys.JWT)

    if (token) {
      // TODO navigate to products
    }
  }

  isFormFilled = () : boolean => {
    return this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      Validation.IsEmail(this.state.email);
  }

  onTextChanged = (e : React.ChangeEvent<HTMLInputElement>) : void => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onLoginClick = async () : Promise<void> => {
    const data : LoginRequest = { email: this.state.email, jelszo: this.state.password }
    const token = WebAPI.Security.login(data).then(x => x.Token);

    if (!token) return;

    const storage: StorageService = new StorageService();
    storage.write(StorageKeys.JWT, token);

    // todo: navigate to products page
  }

  render() {
    const css = this.props.classes;

    const loginbutton = this.isFormFilled() ?
      <Button variant="contained" color="primary">BELÉPÉS</Button> :
      <Button variant="contained" color="primary" disabled>BELÉPÉS</Button>;

    const Body = () =>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.logoContainer}>
            <img src={LocalImages.images('./bringawebshop.jpg')} alt="" />
          </div>
          <div className={css.loginContainer}>
            <Typography className={css.typography} variant="h5">BEJELENTKEZÉS</Typography>
            <Typography className={css.typography} variant="overline">Email</Typography>
            <TextField
              className={css.textField}
              InputProps={{classes:{notchedOutline: css.textField, input: css.typography }}}
              id="outlined-basic" variant="outlined" name="email"
              onChange={this.onTextChanged} />
            <Typography className={css.typography} variant="overline">Jelszó</Typography>
            <TextField
              className={css.textField}
              InputProps={{classes:{notchedOutline: css.textField, input: css.typography }}}
              id="outlined-basic" variant="outlined" name="password"
              onChange={this.onTextChanged}
              type="password" />
            {loginbutton}
          </div>
        </div>
        <div className={css.bottom}>
          TEKERJ VELÜNK A ZÖLDEBB JÖVŐÉRT!
        </div>
        <FooterComponent/>
      </div>
    return Body();
  }
}

const HomePage = withRoot(withStyles(styles)(Home));
export default HomePage;