import React from "react";

const Content = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-20 py-12 space-y-12">
      {/* Main Featured Image */}
      <img
        src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049000860/original/SGS07HNVc5ZpC_2oIXyh9FHnTWzHINl9zw.png?1751036732"
        alt="Main Featured"
        className="w-full rounded-lg mb-8"
      />

      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          What is the Summer of AI Promo?
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          The Summer of AI Promo provides every subaccount a single 30-day free trial of the Unlimited AI Employee plan. After the trial, billing automatically begins at $97/month (either agency-billed or subaccount-billed). The promo is visible only if enabled by the agency.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Key Benefits of the Summer of AI Promo</h2>
        <p className="text-gray-700">This promotional offer enables users to experience the full capabilities of the AI Employee plan risk-free, while offering flexible control to agencies.</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>One-time 30-day free trial per subaccount</li>
          <li>No immediate billing on opt-in</li>
          <li>Managed centrally by agency</li>
          <li>Supports both agency or subaccount billing models</li>
          <li>Easily toggle feature visibility for subaccounts</li>
          <li>Direct access to onboarding resources</li>
        </ul>
        <img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023597953/original/Echwbe8bRzMEmBZjEvePF4vON7g_NvyO2g.png?1711546806" alt="Key Benefits" className="w-2/3 ounded-lg mt-4" />
      </section>

      {/* How to Opt In */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">How To Opt In a Subaccount</h2>
        <p className="text-gray-700">Learn the various ways to activate the trial, whether from agency settings or within a specific subaccount.</p>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>From inside the subaccount: Use the “Opt-in to Unlimited Plan” button available in the AI Agents Panel.</li>
          <li>From Manage Clients page: Deploy the Unlimited plan directly. The interface updates based on promo status (enabled or disabled).</li>
          <li>From Agency AI Employee Settings: Use bulk actions or the 3-dot menu for individual subaccounts.</li>
        </ul>
        {/* Image placeholder */}
        <img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023597945/original/EE6zNxIVmNuKyuVW72LLENwVhPEv5tQcEg.png?1711546805" alt="Opt-in Methods" className="w-2/3 rounded-lg mt-4" />
      </section>

      {/* Agency Controls */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Agency-Level Controls</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Enable/disable Summer of AI offer visibility</li>
          <li>Opt in multiple subaccounts at once</li>
          <li>Switch between agency or subaccount billing</li>
          <li>Cancel or upgrade AI Employee plan</li>
          <li>Adjust resale price for subaccounts</li>
          <li>View and apply affiliate codes</li>
        </ul>
        {/* Image placeholder */}
        <img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023621400/original/9aSCBqWJz2EOpBlkJku-hlJHhfqs4THJKQ.png?1711571174" alt="Agency Controls" className="w-2/3 rounded-lg mt-4" />
      </section>

      {/* Global Management */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Global Management via Landing Page</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Bulk opt-in for subaccounts</li>
          <li>Navigate quickly to individual subaccount settings</li>
          <li>Access Zoom links for onboarding and support</li>
        </ul>
        {/* Optional image */}
        <img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155023597947/original/80wZ--lQ1nl7MP77pK6Yjr_et9Zs24WRoA.png?1711546806" alt="Global Management" className="w-2/3 rounded-lg mt-4" />
      </section>

      {/* Subaccount User Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Subaccount User Experience</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>A dedicated landing page appears in the AI Agents Panel</li>
          <li>Highlights promo benefits and includes a clear CTA button</li>
          <li>Visibility is dependent on agency configuration and current plan status</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-800">Q: Can I cancel and rejoin to get another free trial?</p>
            <p className="text-gray-700">A: No. Each subaccount is eligible for one 30-day trial only.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Q: Can I switch from agency billing to subaccount billing after the trial starts?</p>
            <p className="text-gray-700">A: Yes, this can be managed from the AI Employee settings.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Q: What happens if a subaccount is already on Unlimited?</p>
            <p className="text-gray-700">A: They are not eligible for the Summer of AI promo.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Q: Can subaccounts see the promo if it’s disabled?</p>
            <p className="text-gray-700">A: No, visibility is controlled by the agency.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Q: How is pricing handled after the trial ends?</p>
            <p className="text-gray-700">A: Billing resumes at $97/month under the selected billing model.</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Next Steps</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Enable visibility of the Summer of AI promo for subaccounts</li>
          <li>Opt in active subaccounts to the free trial</li>
          <li>Configure billing and resale pricing</li>
          <li>Share onboarding resources with subaccount users</li>
        </ul>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
        <ul className="list-disc list-inside text-blue-600 space-y-2">
          <li>Season of AI Promotion Ending Information & FAQ's</li>
          <li>AI Employee Overview</li>
          <li>HighLevel Pricing Guide</li>
          <li>Pricing and Rebilling Conversation AI</li>
          <li>Introduction to Ask AI Assistant</li>
          <li>Auto-Pilot Mode in Conversation AI for Efficient Communication</li>
        </ul>
      </section>
    </div>
  );
};

export default Content;
