const mapping: Record<string, string> = {
  clubs: 'club',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
