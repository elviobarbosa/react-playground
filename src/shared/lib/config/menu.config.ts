import {
  IconCamera,
  IconFileDescription,
  IconFileWord,
  IconUserPlus,
} from "@tabler/icons-react";

export const MENU_LEFT = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "O Projeto",
      icon: IconFileDescription,
      url: "about",
    },
    {
      title: "Cadastro",
      url: "/register-user",
      icon: IconUserPlus,
    },
    {
      title: "Filmes",
      url: "/movies",
      icon: IconCamera,
    },
    {
      title: "Currículo",
      icon: IconFileWord,
      url: "curriculum",
    },
  ],
};
