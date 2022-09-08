export const myMiddleware = (request, response, next) => {
  response.locals.umaVariavelLocal = 'Este é o valor da váriavel local';
  next();
}

export const checkCSRFError = (error, request, response, next) => {
  if (error && error.code === 'EBADCSRFTOKEN') {
    return response.render('404');
  }
}

export const CSRFMiddleware = (request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  next();
}