"use client";

import { useState } from "react";
import { useLanguage } from "~/contexts/LanguageContext";
import { SocialMediaButton } from "~/components/SocialMediaButton";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "~/components/ui/button";
import { PrimaryButton } from "~/components/PrimaryButton";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contact: z.string().min(5, {
    message: "Email or phone must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
  const { translations, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // In a real implementation, this would send an email
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Email subject would be: `${values.name}: Contact from personal portfolio`
      // Email body would be:
      // Name: ${values.name}
      // Email or phone: ${values.contact}
      // Message: ${values.message}
      
      // In a real implementation, we would use a service like EmailJS, SendGrid, or a serverless function
      // to send an email to paiva240@gmail.com with the form data
      
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        {translations.navbar.contact}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Reach Out component with social media links */}
        <div className="space-y-6 order-1">
          <h3 className="text-xl font-semibold">
            {language === 'en' ? 'Reach Out' : language === 'es' ? 'Contáctame' : 'Entre em Contato'}
          </h3>
          <div className="flex flex-col space-y-6">
            <SocialMediaButton
              href="mailto:paiva240@gmail.com"
              icon={Mail}
              label="Email"
              description={translations.social.descriptions.email}
            />
            <SocialMediaButton
              href="https://www.linkedin.com/in/paiva240/"
              icon={Linkedin}
              label={translations.social.linkedin}
              description={translations.social.descriptions.linkedin}
            />
            <SocialMediaButton
              href="https://github.com/Alexaandrepaiva"
              icon={Github}
              label={translations.social.github}
              description={translations.social.descriptions.github}
            />
            <SocialMediaButton
              href="https://x.com/Alexaandrepaiva"
              icon={Twitter}
              label={translations.social.twitter}
              description={translations.social.descriptions.twitter}
            />
          </div>
        </div>

        {/* Right Column - Contact Form - hidden on mobile */}
        <div className="space-y-6 order-2 hidden md:block">
          <h3 className="text-xl font-semibold">
            {language === 'en' ? 'Contact Me' : language === 'es' ? 'Formulario de Contacto' : 'Formulário de Contato'}
          </h3>
          
          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <p className="text-green-800">
                {language === 'en' 
                  ? 'Thank you for your message! I\'ll get back to you soon.' 
                  : language === 'es' 
                    ? '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.' 
                    : 'Obrigado pela sua mensagem! Entrarei em contato em breve.'}
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === 'en' ? 'Name' : language === 'es' ? 'Nombre' : 'Nome'}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={language === 'en' ? 'Your name' : language === 'es' ? 'Tu nombre' : 'Seu nome'} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === 'en' ? 'Email or Phone' : language === 'es' ? 'Email o Teléfono' : 'Email ou Telefone'}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={language === 'en' ? 'Your email or phone number' : language === 'es' ? 'Tu email o número de teléfono' : 'Seu email ou número de telefone'} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {language === 'en' ? 'Message' : language === 'es' ? 'Mensaje' : 'Mensagem'}
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={language === 'en' ? 'Your message' : language === 'es' ? 'Tu mensaje' : 'Sua mensagem'} 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <PrimaryButton 
                    type="submit" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (language === 'en' ? 'Sending...' : language === 'es' ? 'Enviando...' : 'Enviando...') 
                      : (language === 'en' ? 'Send Message' : language === 'es' ? 'Enviar Mensaje' : 'Enviar Mensagem')}
                  </PrimaryButton>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}