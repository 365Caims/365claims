export default function TermsPage() {
  return (
    <div className="bg-[#F2F6FC] text-slate-900 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ============================================================
           PAGE HEADER
        ============================================================ */}
        <div className="mb-14">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            These Terms & Conditions explain how 365Claims (“we”, “us”, “our”)
            provides accident management and related services across the United
            Kingdom. By contacting us or using our services, you agree to these
            terms.
          </p>
        </div>

        {/* ============================================================
           CONTENT
        ============================================================ */}

        <Section title="1. Our services">
          <p>
            365Claims provides non-fault accident support services, which may include:
          </p>
          <BulletList
            items={[
              "Initial accident assessment and guidance",
              "Vehicle recovery and storage arrangements",
              "Coordination of repairs through approved garages",
              "Like-for-like replacement vehicles where eligible",
              "Liaison with insurers, engineers and third parties",
              "Referral to legal partners where appropriate",
            ]}
          />
          <p>
            You are under no obligation to proceed with any service until you have
            reviewed and agreed to the relevant documentation.
          </p>
        </Section>

        <Section title="2. Eligibility for non-fault services">
          <p>
            Certain services, including replacement hire vehicles, are only available
            where:
          </p>
          <BulletList
            items={[
              "You were not at fault for the accident",
              "The third-party driver can be identified or is insured",
              "You provide accurate and complete information",
              "You meet the criteria of suppliers such as hire providers or insurers",
            ]}
          />
          <p>
            Eligibility is assessed on a case-by-case basis and may depend on
            third-party acceptance.
          </p>
        </Section>

        <Section title="3. Your responsibilities">
          <p>By using our services, you agree to:</p>
          <BulletList
            items={[
              "Provide accurate and complete information about your accident",
              "Notify us promptly of any changes to circumstances",
              "Cooperate with insurers, repairers and hire companies where required",
              "Use any replacement hire vehicle responsibly and in accordance with its terms",
            ]}
          />
        </Section>

        <Section title="4. No legal or financial advice">
          <p>
            Information provided via our website, messaging or telephone is intended
            as general guidance only and should not be considered legal or financial
            advice.
          </p>
          <p>
            Where specialist advice is required, we may refer you to authorised and
            regulated partners.
          </p>
        </Section>

        <Section title="5. Working with third-party partners">
          <p>
            To deliver our services, we may work with recovery agents, repair garages,
            hire companies, insurers and legal representatives.
          </p>
          <p>
            Each third-party partner operates under its own terms and conditions,
            which you may be required to review and accept separately.
          </p>
        </Section>

        <Section title="6. Limitation of liability">
          <p>
            We take reasonable care in providing our services. However, we are not
            responsible for:
          </p>
          <BulletList
            items={[
              "Losses arising from inaccurate or incomplete information you provide",
              "Delays or decisions made by insurers, hire providers or repair partners",
              "Losses arising from circumstances beyond our reasonable control",
            ]}
          />
          <p>
            Nothing in these terms limits liability where it cannot legally be
            excluded.
          </p>
        </Section>

        <Section title="7. How we use your personal data">
          <p>
            We process personal data in accordance with our Privacy Policy. By using
            our services, you acknowledge and agree to this processing.
          </p>
        </Section>

        <Section title="8. Website content">
          <p>
            Content on this website is provided for general information purposes only.
            While we aim to keep content accurate and up to date, we make no
            guarantees regarding completeness, accuracy or suitability.
          </p>
        </Section>

        <Section title="9. Complaints">
          <p>
            If you are unhappy with any aspect of our service, please contact us:
          </p>

          <div className="mt-4 rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-5 shadow-sm">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>365Claims Customer Team</strong><br />
              Email: help@365claims.uk<br />
              Freephone: +44 7440 138946
            </p>
          </div>
        </Section>

        <Section title="10. Governing law">
          <p>
            These Terms & Conditions are governed by the laws of England and Wales.
            Any disputes shall be subject to the exclusive jurisdiction of the courts
            of England and Wales.
          </p>
        </Section>

        <p className="mt-14 text-xs text-slate-500">
          These Terms & Conditions were last updated: {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   REUSABLE HELPERS — MATCHES PRIVACY POLICY
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
