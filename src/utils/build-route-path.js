
// /user/:id 

export function buildRoutPath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    console.log(path.matchAll(routeParametersRegex));
}