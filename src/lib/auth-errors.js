// Utility to map Supabase auth errors to friendly, human-readable messages.

export function getFriendlyAuthError(error) {
  if (!error) return "An unexpected error occurred.";

  const message = error.message?.toLowerCase() || "";

  // Rate Limiting & Overload
  if (message.includes("rate limit") || error.status === 429) {
    return "Our security systems detected too many requests. Please wait a few minutes and try again.";
  }
  if (message.includes("too many requests")) {
    return "Please wait a moment before requesting another action.";
  }

  // Invalid Credentials
  if (message.includes("invalid login credentials")) {
    return "Invalid email or password. Please verify your credentials and try again.";
  }

  // User/Email Existence
  if (message.includes("user already exists") || message.includes("email address already in use")) {
    return "An account with this email already exists. Try signing in or resetting your password.";
  }
  if (message.includes("user not found")) {
    return "No account found with this email. Please check the spelling or sign up.";
  }

  // Email Verification
  if (message.includes("email not confirmed")) {
    return "Security Check: Please verify your email address before logging in. Check your inbox for the verification link.";
  }
  if (message.includes("verification required")) {
    return "Additional verification is required to proceed.";
  }

  // Tokens & Links
  if (message.includes("token has expired") || message.includes("link is invalid")) {
    return "Your verification link has expired. Please request a new one.";
  }

  // Passwords
  if (message.includes("password should be at least")) {
    return "For your security, your password must be at least 6 characters long.";
  }

  // Network & Server
  if (message.includes("failed to fetch") || message.includes("network error")) {
    return "Network connection failed. Please check your internet connection and try again.";
  }
  if (error.status >= 500) {
    return "Our authentication server is temporarily busy. Please try again in a few moments.";
  }

  // Fallback
  return "An error occurred during authentication. Please try again later.";
}
