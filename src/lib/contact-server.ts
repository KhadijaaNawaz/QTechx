import { createServerFn } from "@tanstack/react-start";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
}

export const submitContactForm = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: ContactFormData }): Promise<ContactFormResponse> => {
    // Validation
    if (!data.name || data.name.trim().length < 2) {
      throw new Error("Name must be at least 2 characters");
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      throw new Error("Please enter a valid email address");
    }
    if (!data.message || data.message.trim().length < 10) {
      throw new Error("Message must be at least 10 characters");
    }

    // Simulate sending email or storing in database
    // In production, you would integrate with:
    // - Email service (SendGrid, Resend, AWS SES)
    // - Database (Prisma, Drizzle)
    // - CRM (HubSpot, Salesforce)

    console.log("Contact form submission:", data);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success response
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    };
  });
