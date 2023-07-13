export class SignUpController {
    handle(httprequest: any): any {

        if(!httprequest.body.name){
            return { 
                statusCode: 400,
                body: new Error('Missing param: name')
            }
        }
        if(!httprequest.body.name){
            return { 
                statusCode: 400,
                body: new Error('Missing param: email')
            }
        }
    }
}