export class SignUpController {
    handle(httprequest: any): any {
        return { 
            statusCode: 400,
            body: new Error('Missing param: name')
        }
    }
}