const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8 text-center">Effective Date: April 2025</p>

        <div className="prose prose-green max-w-none">
          <p className="text-gray-700 mb-6">
            At Nutribean India, accessible from www.nutribeanIndia.com, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              When you visit or use our website, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Personal Information:</span> such as your name, email address, phone number, and delivery address (when you place an order or contact us).
              </li>
              <li>
                <span className="font-medium">Usage Data:</span> including your IP address, browser type, pages visited, and time spent on the site.
              </li>
              <li>
                <span className="font-medium">Cookies:</span> to enhance your user experience and remember your preferences.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the collected data to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process orders and deliver products.</li>
              <li>Respond to your inquiries or customer service requests.</li>
              <li>Improve our website and offerings.</li>
              <li>Send updates, promotions, or newsletters (only with your consent).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing of Information</h2>
            <p className="text-gray-700">
              We do not sell, rent, or trade your personal information. We may share your data with trusted third-party service providers (such as delivery partners or payment processors) only as necessary to complete transactions or provide services on our behalf.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access and review the personal data we hold about you.</li>
              <li>Request corrections or deletions.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise any of these rights, please contact us at support@nutribeanIndia.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. External Links</h2>
            <p className="text-gray-700">
              Our website may contain links to other websites. We are not responsible for the privacy practices or content of those external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns regarding this Privacy Policy, please contact:
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900">Nutribean India</p>
              <p className="text-gray-700">Email: support@nutribeanIndia.com</p>
              {/* <p className="text-gray-700">Website: www.nutribeanIndia.com</p> */}
              <p className="text-gray-700">Location: Sehore, Madhya Pradesh, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 