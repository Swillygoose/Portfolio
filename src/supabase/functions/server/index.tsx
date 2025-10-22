import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { Resend } from "npm:resend@4.0.0";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-d1e26aad/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-d1e26aad/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Create unique ID for this submission
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    // Store submission in KV store
    const submissionData = {
      id: submissionId,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };
    
    await kv.set(submissionId, submissionData);
    console.log(`Contact form submission stored: ${submissionId}`);

    // Send email notification if Resend API key is configured
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        
        await resend.emails.send({
          from: "onboarding@resend.dev", // You'll need to change this to your verified domain
          to: "sandra_wilmann@hotmail.com", // Sandra's email
          subject: `Portfolio Contact: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        });
        
        console.log(`Email notification sent for submission: ${submissionId}`);
      } catch (emailError) {
        console.error(`Failed to send email notification: ${emailError}`);
        // Don't fail the request if email fails, submission is still stored
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping email notification");
    }

    return c.json({ 
      success: true, 
      message: "Message sent successfully!",
      submissionId 
    });
    
  } catch (error) {
    console.error(`Error processing contact form: ${error}`);
    return c.json({ 
      error: "Failed to process contact form submission",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);