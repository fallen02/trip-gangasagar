import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layout.tsx", [
        index("pages/home.tsx"),
        route("/about", "pages/about.tsx"),
        route("/hotels", "pages/hotels.tsx"),
        route("/contact", "pages/contact.tsx")
    ])
] satisfies RouteConfig;
