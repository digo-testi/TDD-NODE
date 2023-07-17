import { HttpResponse } from "../protocols/http"

export const badRequest = (error): HttpResponse => {
    return{ 
        statusCode: 400,
        body: error
    }
}