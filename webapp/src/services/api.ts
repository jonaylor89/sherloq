// Mock API service
export async function sendPrompt(prompt: string): Promise<string> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock response
  return `This is a mock response to: "${prompt}"`;
}
