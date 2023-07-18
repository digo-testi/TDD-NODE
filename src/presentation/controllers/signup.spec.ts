import { SignupController } from './signup'

describe('Signup controller', () => { 
    test('Shoud return 400 if no name is provided', () => { 
        const sut = new SignupController()
        const httpRequest = {
            body: {
                email: 'any_email@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'

            }
        }
        const httpResponse = sut.handle(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
     })
})