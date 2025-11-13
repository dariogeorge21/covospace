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
    { id: "section-1", title: "1. This Agreement" },
    { id: "section-2", title: "2. Identification Documents" },
    { id: "section-3", title: "3. Monthly Fees, Services Fees and Payments" },
    { id: "section-4", title: "4. Renewal" },
    { id: "section-5", title: "5. Invoices" },
    { id: "section-6", title: "6. Security Deposit" },
    { id: "section-7", title: "7. Use" },
    { id: "section-8", title: "8. Access" },
    { id: "section-9", title: "9. Termination of the Agreement" },
    { id: "section-10", title: "10. Handing over of the Premises" },
    { id: "section-11", title: "11. Virtual Office Agreement (VO)" },
    { id: "section-12", title: "12. Force Majeure" },
    { id: "section-13", title: "13. Liability and Disclaimer" },
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
            Business centre agreement between the Client and CovSpace
            (Co-working Space). This page provides the full terms; click any
            section in the table of contents to jump there.
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
            <SectionCard id="section-1" title="1. This Agreement">
              <p>
                <strong>a. Nature of this agreement:</strong> This business
                centre agreement is a mere permission for the Client to use the
                Premises and other facilities of the Centre. The whole of the
                Centre remains in CovSpace possession and control. No tenancy or
                other right, title or interest and/or possession whatsoever is
                created or intended to be created by this agreement in favour of
                the Client. CovSpace is giving the client the right to share
                with CovSpace the use of the Centre on these terms and
                conditions, so that CovSpace can provide services to the Client.
                The client agrees not to assign or sub-let or part with
                possession of the Premises or attempt transfer of this
                Agreement.
              </p>

              <p>
                <strong>b. Duration:</strong> This agreement lasts for the
                period stated in it and can be extended automatically for
                successive periods, until brought to an end by the Client or
                CovSpace. The fees on any renewal will be at the then prevailing
                market rate, until and unless otherwise agreed by CovSpace in
                writing.
              </p>

              <p>
                <strong>c. Term Commencement date:</strong> The obligations as
                per this agreement will commence from the Term Commencement
                Date, and to clarify, these obligations are independent of
                actual occupation use of the premises by the Client or its
                representatives.
              </p>

              <p>
                <strong>d. Confidentiality:</strong> The terms of this Agreement
                are confidential. Neither the Client nor CovSpace may disclose
                them without the other’s consent unless required to do so by law
                or an official authority. This obligation continues after this
                Agreement ends.
              </p>

              <p>
                <strong>e. Jurisdiction:</strong> Civil Courts of the city in
                which CovSpace is located shall have exclusive jurisdiction in
                the event any disputes or differences arise in respect of, out
                of, relating to and/or touching this Agreement. This agreement
                is interpreted and enforced in accordance with the law of the
                place where the relevant Centre is located.
              </p>

              <p>
                <strong>f. Costs:</strong> The Client must also pay all
                reasonable costs relating to this Agreement, including any legal
                costs whatsoever, and any Bank charges payable by CovSpace in
                respect of the Fee and other amounts received by CovSpace from
                the Client pursuant to this Agreement.
              </p>

              <div>
                <p>
                  <strong>g. Notices:</strong> All formal notices must be in
                  writing and:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>i.</strong> Shall be deemed to have been served on
                    the Client if delivered to the Premises or posted to the
                    last known address of the Client and in the latter case
                    shall be deemed to have been served on the third working day
                    after posting. It is expected of the Client that they keep
                    their communication address updated with CovSpace at all
                    times.
                  </li>
                  <li>
                    <strong>ii.</strong> Shall be deemed to have been served on
                    CovSpace if delivered to the Centre Manager of the Centre
                    where the Client has taken premises or posted to the address
                    of the Centre and in latter case shall be deemed to have
                    been served on the third working day after posting.
                  </li>
                </ul>
              </div>

              <p>
                <strong>h. Inspection and Maintenance:</strong> CovSpace may
                need to enter the Client’s premises and may do so at any time.
                However, unless there is an emergency, CovSpace will attempt to
                notify the Client verbally or electronically in advance when
                CovSpace needs to access to carry out testing, repair or works
                other than routine inspection, cleaning and maintenance.
                CovSpace will also endeavour to respect reasonable security
                procedures to protect the confidentiality of client’s business.
              </p>

              <p>
                <strong>i. Taxes:</strong> The Client shall be liable to bear
                and promptly pay all Local and other Government taxes (as may be
                levied at present and/or which may be levied at any future date)
                in respect of the Monthly Fee and/or services (including but not
                limited to Service Tax and GST). All amounts mentioned in this
                Agreement as payable by the client to CovSpace, are exclusive of
                such taxes.
              </p>

              <p>
                <strong>j. Insurance:</strong> It is the Client’s responsibility
                to arrange insurance of its own property which it brings in to
                the Centre and for its own liability to its employees and to
                third parties.
              </p>

              <div>
                <p>
                  <strong>k. Head Lease:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>i.</strong> The Client acknowledges that Agreement
                    is subject to the Head-lease / Licence under which CovSpace
                    holds the Centre and the Client further acknowledges that it
                    is aware of the provisions of the Head-lease / Licence and
                    will observe and obey all the terms covenants and conditions
                    contained in the Head-lease / Licence.
                  </li>
                  <li>
                    <strong>ii.</strong> The parties agree that this Agreement
                    is dependent and conditional upon the Head-lease/ Licence
                    and that if the Head-lease / Licence is terminated for any
                    reason, this Agreement shall also immediately terminate
                    without prejudice to any antecedent rights.
                  </li>
                </ul>
              </div>
            </SectionCard>

            {/* Section 2 */}
            <SectionCard id="section-2" title="2. Identification Documents">
              <p>
                The Client agrees to provide all documents, pertaining to the
                identification of the Company (mentioned in the agreement) and
                of the person (executing the agreement), as deemed relevant by
                CovSpace, for the purpose of verification of legitimate
                existence of the business. Client authorizes CovSpace to conduct
                verification of legitimate existence of Client’s business and/or
                standard business verification to execute the agreement.
              </p>
            </SectionCard>

            {/* Section 3 */}
            <SectionCard
              id="section-3"
              title="3. Monthly Fees, Services Fees and Payments"
            >
              <p>
                <strong>a. Monthly Fee:</strong> The Monthly Fee, per month,
                shall be payable monthly in advance, on the first day of each
                and every month, to CovSpace; and in respect of any broken
                period a pro-rata adjustment shall be made.
              </p>

              <p>
                <strong>b. Standard Services:</strong> Standard Recurring
                services requested by the Client are payable monthly in advance.
                Unless otherwise agreed in writing, these recurring services
                will be provided at the specified rates for the duration of this
                Agreement (including any renewal). The Client must provide 1
                (one) month notice to CovSpace in writing to terminate such
                standard recurring services.
              </p>

              <p>
                <strong>c. Additional Variable Services:</strong> CovSpace may
                provide additional Services directly or through a business
                affiliate. Such Services will be billed in arrears at the end of
                the month, as per usage, and are due within 7 days from the date
                of the invoice. Fees for such Services, plus applicable taxes,
                will be applicable in accordance with CovSpace published rates
                which may change from time to time.
              </p>
            </SectionCard>

            {/* Section 4 */}
            <SectionCard id="section-4" title="4. Renewal">
              <p>
                CovSpace will increase the monthly office fee each and every
                anniversary of the start date of this agreement by a percentage
                amount discussed and mutually agreed upon by the Client and
                CovSpace. This will not apply to agreements that have an
                original start date and an end date constituting more than a 12
                months term. Renewals will be renewed as per clause 1.2 above
                and only those renewals with a start and end date constituting a
                term of over 12 months will have the same increase applied.
              </p>
            </SectionCard>

            {/* Section 5 */}
            <SectionCard id="section-5" title="5. Invoices">
              <p>
                CovSpace will send all invoices electronically (where allowed by
                law). Notification of invoices shall constitute a demand for
                payment.
              </p>

              <p>
                <strong>a. Invoice disputes:</strong> In case of any dispute in
                any charges levied under “Standard Services” or “Additional
                Variable Services”, the Client must notify CovSpace in writing
                of such disputed amount and the reasons for it within 7 days of
                the date of the invoice. The Client must pay the amount not in
                dispute by the due date or be subject to late fees. CovSpace and
                the Client will endeavour to resolve, by mutual discussion, the
                disputed portion of the charges for Services within one week of
                receiving a notice from the Client.
              </p>

              <p>
                <strong>b. Late Payment:</strong> In the event of delay in
                making payment of the Monthly Fee or Services, the Client shall
                be liable to pay “default-interest” on the amount due at the
                rate of 5% per month. Declined Credit cards and dishonour of
                cheques, will attract a fee equivalent to INR 1,500. The Client
                shall bear all bank charges. CovSpace also reserves the right to
                withhold services (including for the avoidance of doubt, denying
                the Client access to its premises, where applicable) while there
                are any outstanding fees and/or interest or the Client is in
                breach of this Agreement.
              </p>
            </SectionCard>

            {/* Section 6 */}
            <SectionCard id="section-6" title="6. Security Deposit">
              <p>
                <strong>a. Deposit:</strong> The Client must pay a security
                deposit equivalent to Three (3) Month of the Monthly Fee (plus
                taxes where applicable) upon entering into this Agreement,
                unless a greater amount is specified on the front of this
                agreement. CovSpace shall not be liable to pay to the Client any
                interest on such Security Deposit. This will be held by CovSpace
                as security for performance of all the Client’s obligations
                under this agreement.
              </p>

              <p>
                <strong>b. Deposit Refund:</strong> The security deposit, or any
                balance after deducting outstanding fees and other costs due to
                CovSpace, or any of CovSpace affiliates or vendors, under this
                agreement, will be returned to the Client within 3 business
                days, after the Client has settled their account and has
                fulfilled all obligations under this agreement.
              </p>

              <p>
                <strong>c. Increase in Deposit:</strong> CovSpace may require
                the Client to pay an increased deposit if outstanding fees
                exceed by 50% of the deposit held and/or the Client frequently
                fail to pay CovSpace fees when due.
              </p>
            </SectionCard>

            {/* Section 7 */}
            <SectionCard id="section-7" title="7. Use">
              <p>
                <strong>a. The Client’s name and address:</strong> The Client
                may only carry on that business in its name or some other name
                that CovSpace previously agrees. Should the Client choose to use
                the services, provided by CovSpace, for an additional company,
                an additional charge per month and per company name may apply.
              </p>

              <p>
                <strong>b. Use of Centre Address:</strong> The Client may use
                the Centre address as its business address only. Any other uses
                are prohibited without CovSpace prior written consent.
              </p>

              <p>
                <strong>c. Installations in the Premises:</strong> The Client
                must not install any cabling, IT or telecom connections without
                CovSpace prior written consent. As a condition to such consent,
                the Client must permit CovSpace to oversee any installations and
                to verify that such installations do not interfere with the use
                of premises by other Clients or CovSpace.
              </p>

              <p>
                <strong>d. Alternations to the Premises:</strong> The Client
                shall not make any alterations or additions in the Premises
                without prior written consent of CovSpace.
              </p>

              <p>
                <strong>e. Non-Compete Business:</strong> The Client must not
                carry on a business that directly or indirectly competes with
                CovSpace or any company affiliated with CovSpace.
              </p>
            </SectionCard>

            {/* Section 8 */}
            <SectionCard id="section-8" title="8. Access">
              <p>
                The Client will have access to the premises from 9 am to 9 pm;
                however, the Services and the facility of central
                air-conditioning and other similar facilities will be available
                to the Client only from Monday to Saturday between 09:00 am and
                9:00 pm; the Services and the facility of central
                air-conditioning and other similar facilities will not be
                available on Bank Holidays and Public Holidays.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>a.</strong> The Client is required to disclose the
                  number and names of persons who will work in the premises.
                </li>
                <li>
                  <strong>b.</strong> The Client agrees not to smoke in the
                  office nor consume alcoholic beverages in the premises and/or
                  elsewhere in the Centre or any part thereof.
                </li>
                <li>
                  <strong>c.</strong> The Client shall utilize, and shall ensure
                  that its employees utilize, the equipment and facilities
                  provided in the premises and in the Centre with due care and
                  caution; the Client will be liable for all damage or
                  destruction caused by it or its employees to the equipment and
                  facilities provided in the Centre and in the premises in
                  particular.
                </li>
                <li>
                  <strong>d.</strong> The Client must comply with all relevant
                  laws and regulations in the conduct of its business. The
                  Client must do nothing illegal in connection with its use of
                  the Centre. The Client must not do anything that may interfere
                  with the use of the Centre by CovSpace or by others, cause of
                  nuisance or annoyance, increase of the insurance premiums that
                  CovSpace has to pay, or cause loss or damage to CovSpace
                  (including damage to reputation) or to the owner of any
                  interest in the building which contains the centre the Client
                  is using.
                </li>
                <li>
                  <strong>e.</strong> The client is liable for any damage caused
                  by it or by those in the Centre with the Client’s permission
                  or at the Client’s invitation whether express or implied,
                  including but not limited to all employees, contractors,
                  agents or other persons present on the premises. The Client
                  agrees to repair in a proper way any such damage and if the
                  Client fails to do so CovSpace may do so at the Client’s
                  expense.
                </li>
              </ul>
            </SectionCard>

            {/* Section 9 */}
            <SectionCard id="section-9" title="9. Termination of the Agreement">
              <p>
                <strong>a.</strong> Either CovSpace or the client can terminate
                this agreement at the end date stated in it, or at the end of
                any extension or renewal period, by giving at least three months
                written notice to the other. However, if this agreement,
                extension or renewal, is for three months or less, the notice
                period is for one month. To clarify, the Client shall not be
                entitled to terminate this Agreement prior to the expiry of its
                term (initial, extension or renewal).
              </p>

              <p>
                <strong>b.</strong> CovSpace may put an end to this agreement
                immediately, to withhold Services and renter the Premises by
                giving the Client notice and without need to follow any
                additional procedure, if
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>i.</strong> The Client becomes insolvent, bankrupt,
                  goes into liquidation or becomes unable to pay its debts as
                  they fall due, or
                </li>
                <li>
                  <strong>ii.</strong> The Client is in its breach of one of its
                  obligations, including but not limited to payment of monthly
                  Fees and Services Due, which cannot be put right or CovSpace
                  have given the client notice to put right and which the Client
                  has failed to put right within seven days (7) of that notice,
                  or
                </li>
                <li>
                  <strong>iii.</strong> Its conduct or that of someone at the
                  Centre with its permission or invitation, is incompatible with
                  ordinary office use. If CovSpace puts an end to the agreement
                  for any of these reasons it does not put an end to any
                  outstanding obligations, including additional services used
                  and the monthly fee for the remainder of the period for which
                  this agreement would have lasted if CovSpace had not ended it.
                </li>
              </ul>
            </SectionCard>

            {/* Section 10 */}
            <SectionCard
              id="section-10"
              title="10. Handing over of the Premises"
            >
              <p>
                <strong>a.</strong> The Client shall cease to use and occupy the
                premises on the expiry or sooner termination of this Agreement;
                remove all its equipment, belongings, articles and things and
                its employees / personnel and to vacate and hand back the
                premises and at the same time hand over all keys and access
                cards.
              </p>

              <p>
                <strong>b.</strong> The Client shall remove from the premises
                their fixtures and equipment provided that any damage or
                defacement is occasioned to any part of the Premises in the
                course of such removal, the same shall be remedied by the Client
                immediately and at their own expense. If the Client fails to do
                so, CovSpace may do so at the Client’s expense. If the Client
                leaves any property in the Centre, CovSpace may dispose of at
                the Client’s cost in any way CovSpace chooses without owing the
                Client any responsibility for it or any proceeds of sale.
              </p>

              <p>
                <strong>c.</strong> The Client must leave the premises in the
                same condition as it was when the Client took it. CovSpace
                reserves the right to charge additional reasonable fees for any
                repairs needed above and beyond normal wear and tear.
              </p>
            </SectionCard>

            {/* Section 11 */}
            <SectionCard
              id="section-11"
              title="11. Virtual Office Agreement (VO)"
            >
              <p>
                The Client will be automatically entered into a Virtual Office
                Agreement (“VO”) with CovSpace on standard terms:
              </p>
              <p>
                <strong>a.</strong> If the Client defaults in vacating the
                premises when this agreement has ended the Client is responsible
                for any loss, claim or liability CovSpace incurs as a result of
                the Client’s failure to vacate on time. CovSpace will also be at
                liberty to remove the articles and belongings of the Client from
                the premises at the risk and cost of the Client.
              </p>
            </SectionCard>

            {/* Section 12 */}
            <SectionCard id="section-12" title="12. Force Majeure">
              <p>
                In the event the Centre or the premises are destroyed or
                damaged, at any time, by any event falling within the term
                “force majeure”, this Agreement shall come to an end on CovSpace
                giving to the Client notice in writing to that effect. CovSpace
                shall within two weeks of giving notice that this Agreement has
                come to an end for the reasons aforesaid refund to the Client
                the Security Deposit and the monthly fees paid by the Client
                after adjusting therefrom all dues under any head for the past
                period up to the date of occurrence of the event of force
                majeure and payable by the Client under this Agreement.
              </p>
            </SectionCard>

            {/* Section 13 */}
            <SectionCard id="section-13" title="13. Liability and Disclaimer">
              <p>
                <strong>a.</strong> CovSpace will not in any circumstances have
                any liability for loss of business, loss of profits, loss of
                anticipated savings, loss of or damage to data, third party
                claims or any consequential loss unless CovSpace otherwise
                agrees in writing.
              </p>

              <p>
                <strong>b.</strong> Subject to gross negligence and deliberate
                misconduct, CovSpace, its employees and agents shall not be held
                responsible for any theft, loss or damage from the Premises or
                for any damage done to the furniture or other effects of any
                Client in the Premises by the caretaker or cleaners or any
                employees, agents or invitees of CovSpace.
              </p>

              <p>
                <strong>c.</strong> CovSpace shall not be responsible for any
                loss, damage, corruption of data or any loss of information
                whether from hardware, software or internet damage that may
                occur to the Client during the term of this agreement. CovSpace
                shall not be responsible for any loss, damage or loss of
                information resulting from communications or data failure
                including voice, communication and the internet.
              </p>

              <p>
                <strong>d.</strong> Subject to gross negligence and deliberate
                misconduct, CovSpace is not liable for any loss as a result of
                CovSpace failure to provide a service as a result of mechanical
                breakdown, strike, termination of CovSpace interest in the
                building containing the Centre or otherwise.
              </p>

              <p>
                <strong>e.</strong> In no event shall CovSpace be liable for any
                loss or damage until the Client provides written notice and
                gives CovSpace a reasonable time to put it right.
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