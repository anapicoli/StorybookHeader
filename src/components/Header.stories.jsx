import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

export const LoggedOut = {
  args: {
    title: "Meu Sistema",
    user: null,
    onLogin: () => console.log("Login clicado"),
  },
};

export const LoggedIn = {
  args: {
    title: "Meu Sistema",
    user: "Ana",
    onLogout: () => console.log("Logout clicado"),
  },
};