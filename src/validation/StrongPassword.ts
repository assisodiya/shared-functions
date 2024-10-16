export function isStrongPassword(password: string): boolean {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    return strongPasswordRegex.test(password);
  }