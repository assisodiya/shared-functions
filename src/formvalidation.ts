/**
 * Validates input based on specified type.
 * @param input - The input string to validate.
 * @param type - The type of validation to perform ("email", "password", "phone").
 * @returns true if valid, false otherwise.
 */
export function validateInput(input: string, type: 'email' | 'password' | 'phone'): boolean {
    let regex: RegExp;

    switch (type) {
        case 'email':
            // Basic email validation regex
            regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            break;

        case 'password':
            // Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character
            regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            break;

        case 'phone':
            // Simple phone number validation (10 digits)
            regex = /^\d{10}$/;
            break;

        default:
            throw new Error('Invalid validation type');
    }

    return regex.test(input);
}
