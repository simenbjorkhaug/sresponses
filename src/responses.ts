type ResponseParams = Omit<ResponseInit, 'status'>
type Payload =
  | string
  | Blob
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | BufferSource
  | undefined
  | null

/**
 * Returns a 200 OK response with the given data and parameters.
 */
export function ok<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 200,
    ...params,
  })
}

/**
 * Returns a 201 Created response with the given data and parameters.
 */
export function created<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 201,
    ...params,
  })
}

/**
 * Returns a 204 No Content response with the given parameters.
 */
export function noContent(params?: ResponseParams) {
  return new Response(null, {
    status: 204,
    ...params,
  })
}

/**
 * Returns a 400 Bad Request response with the given data and parameters.
 */
export function badRequest<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 400,
    ...params,
  })
}

/**
 * Returns a 401 Unauthorized response with the given data and parameters.
 */
export function unauthorized<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 401,
    ...params,
  })
}

/**
 * Returns a 403 Forbidden response with the given data and parameters.
 */
export function forbidden<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 403,
    ...params,
  })
}

/**
 * Returns a 404 Not Found response with the given data and parameters.
 */
export function notFound<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 404,
    ...params,
  })
}

/**
 * Returns a 405 Method Not Allowed response with the given data and parameters.
 */
export function methodNotAllowed<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 405,
    ...params,
  })
}

/**
 * Returns a 409 Conflict response with the given data and parameters.
 */
export function conflict<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 409,
    ...params,
  })
}

/**
 * Returns a 410 Gone response with the given data and parameters.
 */
export function gone<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 410,
    ...params,
  })
}

/**
 * Returns a 500 Internal Server Error response with the given data and parameters.
 */
export function internalServerError<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 500,
    ...params,
  })
}

/**
 * Returns a 501 Not Implemented response with the given data and parameters.
 */
export function notImplemented<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 501,
    ...params,
  })
}

/**
 * Returns a 502 Bad Gateway response with the given data and parameters.
 */
export function badGateway<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 502,
    ...params,
  })
}

/**
 * Returns a 503 Service Unavailable response with the given data and parameters.
 */
export function serviceUnavailable<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 503,
    ...params,
  })
}

/**
 * Returns a 504 Gateway Timeout response with the given data and parameters.
 */
export function gatewayTimeout<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 504,
    ...params,
  })
}

/**
 * Returns a 505 HTTP Version Not Supported response with the given data and parameters.
 */
export function httpVersionNotSupported<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 505,
    ...params,
  })
}

/**
 * Returns a 506 Variant Also Negotiates response with the given data and parameters.
 */
export function variantAlsoNegotiates<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 506,
    ...params,
  })
}

/**
 * Returns a 507 Insufficient Storage response with the given data and parameters.
 */
export function insufficientStorage<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 507,
    ...params,
  })
}

/**
 * Returns a 508 Loop Detected response with the given data and parameters.
 */
export function loopDetected<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 508,
    ...params,
  })
}

/**
 * Returns a 510 Not Extended response with the given data and parameters.
 */
export function notExtended<T extends Payload>(
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 510,
    ...params,
  })
}

/**
 * Returns a 511 Network Authentication Required response with the given data and parameters.
 */
export function networkAuthenticationRequired<
  T extends Payload,
>(data?: T, params?: ResponseParams) {
  return new Response(data, {
    status: 511,
    ...params,
  })
}

/**
 * Returns a custom HTTP error response with the given status, data, and parameters.
 */
export function httpError<T extends Payload>(
  status: number,
  data?: T,
  params?: ResponseParams,
) {
  return new Response(data, {
    status,
    ...params,
  })
}

/**
 * Returns a redirect response with the given URL and optional status code.
 */
export function redirect(url: string, status = 302) {
  return new Response(null, {
    status,
    headers: {
      location: url,
    },
  })
}

/**
 * Returns a JSON response with the given data and parameters.
 */
export function json<T extends object>(data: T, params?: ResponseParams) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      ...params?.headers,
    },
    ...params,
  })
}

/**
 * Returns an HTML response with the given data and parameters.
 */
export function html(data: string, params?: ResponseParams) {
  return new Response(data, {
    status: 200,
    headers: {
      'content-type': 'text/html',
      ...params?.headers,
    },
    ...params,
  })
}

/**
 * Returns a plain text response with the given data and parameters.
 */
export function text(data: string, params?: ResponseParams) {
  return new Response(data, {
    status: 200,
    headers: {
      'content-type': 'text/plain',
      ...params?.headers,
    },
    ...params,
  })
}

/**
 * Returns a file download response with the given binary data, filename, and parameters.
 */
export function file(
  data: Uint8Array,
  filename: string,
  params?: ResponseParams,
) {
  return new Response(data, {
    status: 200,
    headers: {
      'content-disposition': `attachment; filename="${filename}"`,
      'content-type': 'application/octet-stream',
      ...params?.headers,
    },
    ...params,
  })
}

/**
 * Returns a stream response with the given ReadableStream and parameters.
 */
export function stream(stream: ReadableStream, params?: ResponseParams) {
  return new Response(stream, {
    status: 200,
    ...params,
  })
}

/**
 * Returns a 301 Moved Permanently redirect response with the given URL.
 */
export function redirectPermanent(url: string) {
  return redirect(url, 301)
}

/**
 * Returns a 307 Temporary Redirect response with the given URL.
 */
export function redirectTemporary(url: string) {
  return redirect(url, 307)
}

/**
 * Returns a 303 See Other redirect response with the given URL.
 */
export function redirectSeeOther(url: string) {
  return redirect(url, 303)
}

/**
 * Returns a 302 Found redirect response with the given URL.
 */
export function redirectFound(url: string) {
  return redirect(url, 302)
}

/**
 * Returns a 301 Moved Permanently redirect response with the given URL.
 */
export function redirectMoved(url: string) {
  return redirect(url, 301)
}
