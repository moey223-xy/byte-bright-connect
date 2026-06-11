import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

interface FormData {
  name: string;
  email: string;
  business: string;
  message: string;
}

const emptyForm: FormData = { name: "", email: "", business: "", message: "" };

const inputClasses =
  "mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-base focus:border-[#2978F2] focus:outline-none focus:ring-1 focus:ring-[#2978F2]";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setIsSubmitted(true);
      setFormData(emptyForm);
    } catch (err) {
      console.error("Error sending message:", err);
      setError(
        "Failed to send your message. Please try again or contact us directly at info@bigbytetech.com.au."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Send us a message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="text-[#1F1F1F] font-semibold text-sm">
              Name *
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[#1F1F1F] font-semibold text-sm">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="business" className="text-[#1F1F1F] font-semibold text-sm">
            Business Name
          </label>
          <input
            id="business"
            name="business"
            value={formData.business}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="text-[#1F1F1F] font-semibold text-sm">
            Brief IT Need *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={inputClasses}
            placeholder="Tell us about your IT challenges or goals..."
            required
          />
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center bg-[#2978F2] hover:bg-[#1F5FD4] text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
