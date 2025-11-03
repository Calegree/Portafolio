import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section id="contact" className="w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-black flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-left">&lt;Contact/&gt;</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna de Información de Contacto */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind? Let's talk about it.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">your@email.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Formulario */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Fill out the form and I'll get back to you soon.</p>
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
                  <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
                  <input type="email" name="email" id="email" placeholder="your@email.com" className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="What's this about?" className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
                <textarea name="message" id="message" rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}