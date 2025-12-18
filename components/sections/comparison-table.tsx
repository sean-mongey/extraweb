'use client';

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Process Comparison
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Compare ExtraAcid and ExtraAlk processes
          </p>
        </div>

        <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="200">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Feature
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  ExtraAcid
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  ExtraAlk
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Process Type
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Acid-based
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  Alkaline-based
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Application
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  TBD
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  TBD
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Benefits
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  TBD
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  TBD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

