/* eslint-disable no-useless-constructor */
import React from "react";
import FormGeneral from "./FormGeneral";
import PreviewCard from "./PreviewCard";
import defaultImage from "../images/daenerys.gif";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handlePalette = this.handlePalette.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.activeIcons = this.activeIcons.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.aviableButton = this.avaiableButton.bind(this);

    this.state = {
      userInfo: {
        palette: "1",
        name: "",
        job: "",
        photo: defaultImage,
        phone: "",
        email: "",
        linkedin: "",
        github: "",
      },
      iconsInfo: {
        iconEmail: "opacity",
        iconPhone: "opacity",
        iconLinkedin: "opacity",
        iconGithub: "opacity",
      },
    };
    this.initialState = this.state;
  }

  //FUNCIÓN PARA RECOGER EL VALUE DEL PALETTE

  handlePalette(data) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          palette: data,
        },
      };
    });
  }

  // handlePalette(data) {
  //   this.setState({ palette: data });
  // }

  updateAvatar(img) {
    const { profile } = this.state;
    this.setState((prevState) => {
      let newProfile = { ...profile, photo: img };
      let newUserInfo = prevState.userInfo;

      return {
        profile: newProfile,
        isAvatarDefault: false,
        userInfo: { ...newUserInfo, photo: img },
      };
    });
  }

  //FUNCION PARA ACTIVAR Y DESACTIVAR ICONOS RRSS
  activeIcons(inputName, value) {
    //CAMBIO ICONO EMAIL
    if (inputName === "email") {
      if (value !== "") {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconEmail: "",
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconEmail: "opacity",
            },
          };
        });
      }
    }
    //CAMBIO ICONO TELEFONO
    if (inputName === "phone") {
      if (value !== "") {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconPhone: "",
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconPhone: "opacity",
            },
          };
        });
      }
    }
    //CAMBIO ICONO LINKEDIN
    if (inputName === "linkedin") {
      if (value !== "") {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconLinkedin: "",
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconLinkedin: "opacity",
            },
          };
        });
      }
    }
    //CAMBIO ICONO GITHUB
    if (inputName === "github") {
      if (value !== "") {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconGithub: "",
            },
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            iconsInfo: {
              ...prevState.iconsInfo,
              iconGithub: "opacity",
            },
          };
        });
      }
    }
  }

  //FUNCION PARA RECOGER DATOS DEL INPUT Y ACTUALIZARLOS EN EL ESTADO
  handleInputValue(inputName, inputValue) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputName]: inputValue,
        },
      };
    });
    this.activeIcons(inputName, inputValue);
  }

  //RESET
  resetAll() {
    this.setState(this.initialState);
  }

  //FUNCIÓN PARA DEVOLVER SI EL BOTON ESTA DISPONIBLE O NO
    avaiableButton(){
    const { name, job, file, phone, email, linkedin, github } = this.state;
    // const emailRegex = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    // const phoneRegex = /[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}/;
    // phoneRegex.test(phone) && emailRegex.test(email)

    if (name && job && file && phone && email && linkedin && github) {
      console.log ('true')
      return true;
    } else {
      console.log ('false')
      return false; 
    }
    }

  render() {
    console.log(this.state)
    return (
      <main className="page__home--main container">
        <PreviewCard
          colorPaletteData={this.state.userInfo.palette}
          userName={this.state.userInfo.name}
          userJob={this.state.userInfo.job}
          photo={this.state.userInfo.photo}
          iconEmail={this.state.iconsInfo.iconEmail}
          iconPhone={this.state.iconsInfo.iconPhone}
          iconLinkedin={this.state.iconsInfo.iconLinkedin}
          iconGithub={this.state.iconsInfo.iconGithub}
          resetAll={this.resetAll}
        />

        <FormGeneral
          paletteHandler={this.handlePalette}
          colorPaletteData={this.state.userInfo.palette}
          userName={this.state.userInfo.name}
          userJob={this.state.userInfo.job}
          photo={this.state.userInfo.photo}
          isAvatarDefault={this.isAvatarDefault}
          updateAvatar={this.updateAvatar}
          emailValue={this.state.userInfo.email}
          phoneValue={this.state.userInfo.phone}
          linkedinValue={this.state.userInfo.linkedin}
          githubValue={this.state.userInfo.github}
          handleInputValue={this.handleInputValue}
          avaiableButton={this.avaiableButton}
        />
      </main>
    );
  }
}

export default Main;
