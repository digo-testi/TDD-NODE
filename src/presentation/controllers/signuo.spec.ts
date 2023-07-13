import { SignUpController } from './signup'

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provided", () => {
    const sut = new SignUpController()
    const httpRequest = {
        body: {
            name: 'any_name',
            email: 'any_email',
            passwoed: 'any_password',
            passwordConfirmation: 'any_password'
        }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    sut.handle(httpRequest)
})
})