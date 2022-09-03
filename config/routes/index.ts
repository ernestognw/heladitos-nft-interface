const routes = {
  create: () => {
    // Whenever we're already on the create page
    // we keep the search params
    if (typeof window !== "undefined" && window.location.pathname === "/create")
      return "/create" + window.location.search;

    return "/create";
  },
};

const endpoints = {
  render: "/api/render",
  traits: "/api/traits",
};

export { routes, endpoints };
