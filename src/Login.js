import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import logo from "./brid-logo-complete.svg";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#43a047"
    },
    secondary: {
      main: "#fdd835"
    }
  }
});

const logoStyle = {
  height: "20vmin"
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Login(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        direction="row-reverse"
      >
        <Grid container justify="center">
          <img src={logo} className="Brid-logo-complete" style={logoStyle} />
        </Grid>
        <Grid container justify="center">
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
              Entre na sua conta
            </Typography>
            <Grid container>
              <TextField
                id="identity"
                label="RG ou CPF"
                // className={classes.textField}
                // value={this.state.name}
                // onChange={this.handleChange('name')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid container>
              <TextField
                id="outlined-password-input"
                label="Password"
                // className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid container justify="center">
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
