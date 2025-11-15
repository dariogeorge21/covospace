import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const original = document.documentElement.style.scrollBehavior;
    const originalScrollRestoration =
      typeof window !== "undefined" && "scrollRestoration" in window.history
        ? window.history.scrollRestoration
        : undefined;
    try {
      if (
        typeof window !== "undefined" &&
        "scrollRestoration" in window.history
      ) {
        window.history.scrollRestoration = "manual";
      }
      document.documentElement.style.scrollBehavior = "smooth";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch (e) {}
    return () => {
      document.documentElement.style.scrollBehavior = original || "";
      if (
        typeof window !== "undefined" &&
        originalScrollRestoration !== undefined
      ) {
        window.history.scrollRestoration = originalScrollRestoration;
      }
    };
  }, []);

  const sections = [
    { id: "section-1", title: "1. Services" },
    { id: "section-2", title: "2. Responsibilities" },
    { id: "section-3", title: "3. Confidentiality" },
    { id: "section-4", title: "4. Fees and Payments" },
    { id: "section-5", title: "5. Limitations" },
    { id: "section-6", title: "6. Compliance" },
    { id: "section-7", title: "7. Liability" },
    { id: "section-8", title: "8. Termination" },
    { id: "section-9", title: "9. Governing Law" },
    { id: "section-10", title: "10. Amendments" },
  ];

  const SectionCard = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <section
      id={id}
      className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 lg:p-10"
    >
      <div className="flex items-start gap-4">
        <div className="hidden md:block w-1.5 h-10 rounded-full bg-lime-600 mt-1" />
        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
            {title}
          </h3>
          <div className="space-y-4 text-base lg:text-lg leading-7 text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div id="top" className="min-h-screen bg-gray-50 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            CovSpace — Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">
            Welcome to Covspace. By using our services, you agree to these terms.
            This page provides the full terms; click any section in the table of contents to jump there.
          </p>
        </header>

        <div className="md:grid md:grid-cols-12 md:gap-8">
          {/* Table of Contents */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-24">
              <div className="block md:hidden mb-4">
                <button
                  onClick={() => setTocOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm"
                  aria-expanded={tocOpen}
                >
                  <span className="font-medium text-gray-900">
                    On this page
                  </span>
                  <span className="text-sm text-gray-500">
                    {tocOpen ? "Hide" : "Show"}
                  </span>
                </button>
                {tocOpen && (
                  <nav className="mt-3 bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
                    <ul className="space-y-2">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="text-gray-700 hover:text-lime-600 block pl-2"
                            onClick={() => setTocOpen(false)}
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>

              <div className="hidden md:block">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Contents
                  </h4>
                  <nav>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="block hover:text-lime-600 transition-colors pl-1"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-600">
                    <div className="mb-2">Need help?</div>
                    <Link
                      to="/contact"
                      className="text-lime-600 font-medium hover:underline"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="md:col-span-8 lg:col-span-9">
            {/* Section 1 */}
            <SectionCard id="section-1" title="1. Services">
              <p>
                Covspace provides recruitment services to connect employers and candidates based on business requirements.
              </p>
            </SectionCard>

            {/* Section 2 */}
            <SectionCard id="section-2" title="2. Responsibilities">
              <p>
                <strong>Employers:</strong> Provide accurate job details and comply with employment laws.
              </p>
              <p>
                <strong>Candidates:</strong> Submit accurate information and participate actively in the recruitment process.
              </p>
            </SectionCard>

            {/* Section 3 */}
            <SectionCard id="section-3" title="3. Confidentiality">
              <p>
                All shared information is kept confidential and used only for recruitment purposes.
              </p>
            </SectionCard>

            {/* Section 4 */}
            <SectionCard id="section-4" title="4. Fees and Payments">
              <p>
                Employers must pay agreed fees promptly. Refund policies, if applicable, are outlined in the agreement.
              </p>
            </SectionCard>

            {/* Section 5 */}
            <SectionCard id="section-5" title="5. Limitations">
              <p>
                Covspace does not guarantee perfect matches or candidate performance. Disputes post-hiring are not our responsibility.
              </p>
            </SectionCard>

            {/* Section 6 */}
            <SectionCard id="section-6" title="6. Compliance">
              <p>
                All parties must comply with applicable laws, including labor and data protection regulations.
              </p>
            </SectionCard>

            {/* Section 7 */}
            <SectionCard id="section-7" title="7. Liability">
              <p>
                Covspace is not liable for damages arising from the use of our services. Employers and candidates bear responsibility for their decisions.
              </p>
            </SectionCard>

            {/* Section 8 */}
            <SectionCard id="section-8" title="8. Termination">
              <p>
                Services can be terminated with prior notice. Outstanding obligations must be settled upon termination.
              </p>
            </SectionCard>

            {/* Section 9 */}
            <SectionCard id="section-9" title="9. Governing Law">
              <p>
                These terms are governed by the laws of Jurisdiction.
              </p>
            </SectionCard>

            {/* Section 10 */}
            <SectionCard id="section-10" title="10. Amendments">
              <p>
                Covspace reserves the right to update and modify these Terms & Conditions. Any changes will be posted on our website with an updated effective date.
              </p>
            </SectionCard>

            {/* Footer of terms */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-sm text-gray-600">
                  For any questions about these terms:
                </div>
                <div className="mt-2">
                  <Link
                    to="/contact"
                    className="text-lime-600 font-medium hover:underline"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <a href="#top" className="hover:text-lime-600">
                  Back to top
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}