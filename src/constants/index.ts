interface NavLink {
  imgURL: string;
  route: string;
  label: string;
  requiresAuth?: boolean;
  imgURLActive?: string;
}

export const sidebarLinks: NavLink[] = [
  {
    imgURL: "/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: "/bookmark.svg",
    route: "/saved",
    label: "Saved",
    requiresAuth: true,
  },
  {
    imgURL: "/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
    requiresAuth: true,
  },
];

export const bottombarLinks: NavLink[] = [
  {
    imgURL: "/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/bookmark.svg",
    route: "/saved",
    label: "Saved",
    requiresAuth: true,
  },
  {
    imgURL: "/gallery-add.svg",
    route: "/create-post",
    label: "Create",
    requiresAuth: true,
  },
];