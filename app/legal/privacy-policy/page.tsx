export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F2F6FC] text-slate-900 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ============================================================
           PAGE HEADER
        ============================================================ */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            This Privacy Policy explains how 365Claims (“we”, “us”, “our”) collects,
            uses and protects your personal information in accordance with UK GDPR
            and the Data Protection Act 2018.
          </p>
        </div>

        {/* ============================================================
           CONTENT
        ============================================================ */}

        <Section title="1. Who we are">
          <p>
            365Claims provides accident support services including recovery, repair
            coordination, replacement vehicles and assistance with non-fault claims.
            We act as a data controller for the personal information you provide to us.
          </p>
        </Section>

        <Section title="2. Personal data we collect">
          <p>We may collect and process the following categories of information:</p>
          <BulletList
            items={[
              "Name, address and contact details",
              "Accident circumstances and location",
              "Vehicle information (make, model, registration)",
              "Insurance details (yours and the third party’s)",
              "Photographs, documentation or evidence you provide",
              "Information required by recovery, repair or hire partners",
              "Communications between you and our team",
            ]}
          />
        </Section>

        <Section title="3. How we use your information">
          <p>
            We only use your personal data where necessary to provide our services,
            including:
          </p>
          <BulletList
            items={[
              "Assessing your enquiry or accident circumstances",
              "Arranging vehicle recovery and repairs",
              "Supplying a like-for-like replacement vehicle where eligible",
              "Liaising with insurers, engineers and legal representatives",
              "Providing updates and communicating progress",
              "Meeting legal or regulatory obligations",
            ]}
          />
        </Section>

        <Section title="4. Lawful bases for processing">
          <p>Under UK GDPR, we rely on the following lawful bases:</p>
          <BulletList
            items={[
              "Contract – processing necessary to provide our services to you",
              "Legitimate interests – including verification, fraud prevention and service improvement",
              "Consent – where you voluntarily provide information for an enquiry",
              "Legal obligation – where required by law or regulators",
            ]}
          />
        </Section>

        <Section title="5. Who we share your data with">
          <p>
            We only share your information where necessary to deliver our services,
            including with:
          </p>
          <BulletList
            items={[
              "Vehicle recovery operators",
              "Approved repairers and engineers",
              "Replacement hire vehicle providers",
              "Insurance companies and third-party insurers",
              "Legal partners where representation is requested",
              "IT, communication or hosting providers supporting our systems",
            ]}
          />
          <p className="pt-2">
            We do <strong>not</strong> sell or rent your data to unrelated third parties.
          </p>
        </Section>

        <Section title="6. Data retention">
          <p>
            We retain personal data only for as long as necessary to fulfil the purpose
            for which it was collected, including legal, regulatory and audit
            requirements. Typical retention periods range between 3 and 6 years,
            depending on the nature of the claim.
          </p>
        </Section>

        <Section title="7. How we protect your information">
          <p>
            We apply appropriate technical and organisational measures to safeguard
            your information, including secure systems, access controls and encrypted
            data storage. While no system is entirely risk-free, we regularly review
            our security practices.
          </p>
        </Section>

        <Section title="8. Your rights under UK GDPR">
          <p>You have the following rights, subject to certain conditions:</p>
          <BulletList
            items={[
              "Right of access to your personal data",
              "Right to rectification of inaccurate information",
              "Right to erasure (“right to be forgotten”)",
              "Right to restrict processing",
              "Right to data portability",
              "Right to object to certain processing",
              "Right to withdraw consent at any time",
            ]}
          />
        </Section>

        <Section title="9. Cookies & website analytics">
          <p>
            Our website may use basic cookies or analytics tools to improve performance
            and understand how visitors use the site. You can manage or disable cookies
            through your browser settings.
          </p>
        </Section>

        <Section title="10. International data transfers">
          <p>
            Where data is transferred outside the UK, we ensure appropriate safeguards
            are in place, such as Standard Contractual Clauses or equivalent protections.
          </p>
        </Section>

        <Section title="11. How to contact us">
          <p>
            For questions about this Privacy Policy or your data rights, please contact:
          </p>

          <div className="mt-4 rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-5 shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>365Claims Data Protection Team</strong><br />
              Email: help@365claims.uk<br />
              Freephone: +44 7440 138946
            </p>
          </div>
        </Section>

        <Section title="12. Complaints">
          <p>
            If you are unhappy with how we handle your personal data, please contact us
            first. You also have the right to complain to the UK Information
            Commissioner’s Office (ICO).
          </p>
        </Section>

        <p className="mt-14 text-xs text-slate-500">
          This Privacy Policy was last updated: {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   REUSABLE HELPERS — AGENCY STANDARD
============================================================ */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-lg sm:text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-slate-600 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
