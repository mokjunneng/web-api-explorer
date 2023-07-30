export function getEnvironmentVariable(variable: string): string {
  const value = process.env[variable];
  if (value === undefined) {
    throw new Error(`Environment variable ${variable} is not set`);
  }
  return value;
}
