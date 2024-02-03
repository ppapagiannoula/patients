export const validatorMessageMap: Record<string, {title: string, error?: string}> = {
    firstname: {title: 'First Name', error: 'Please provide a first name'},
    lastname: {title: 'Last Name', error: 'Please provide a last name'},
    email: {title: 'Email', error: 'Please provide a valid email'},
    phone: {title: 'Phone'},
    address_street: {title: 'Street'},
    address_number: {title: 'Number'},
    address_postalcode: {title: 'Postal code'},
    address_city: {title: 'City'}
}
