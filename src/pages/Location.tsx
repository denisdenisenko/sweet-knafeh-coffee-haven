const Location = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">בקרו אותנו</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">המיקום שלנו</h2>
                <p className="text-gray-600">
                  רחוב הרצל 123<br />
                  תל אביב<br />
                  ישראל
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">שעות פתיחה</h2>
                <div className="space-y-2 text-gray-600">
                  <p>ראשון - חמישי: 08:00 - 21:00</p>
                  <p>שישי: 09:00 - 15:00</p>
                  <p>שבת: סגור</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">צור קשר</h2>
                <p className="text-gray-600">
                  טלפון: 03-1234567<br />
                  אימייל: info@knafeh.co.il
                </p>
              </div>
            </div>
            <div className="h-[400px] bg-gray-100 rounded-lg">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                מפה
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;