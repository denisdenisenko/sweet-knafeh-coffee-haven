const Location = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Visit Us</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <p className="text-gray-600">
                  123 Sweet Street<br />
                  Los Angeles, CA 90012<br />
                  United States
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 9:00 PM</p>
                  <p>Saturday: 9:00 AM - 10:00 PM</p>
                  <p>Sunday: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-gray-600">
                  Phone: (555) 123-4567<br />
                  Email: info@knafehhaven.com
                </p>
              </div>
            </div>
            <div className="h-[400px] bg-gray-100 rounded-lg">
              {/* Placeholder for map - in a real application, you would integrate with a mapping service */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Map View
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;