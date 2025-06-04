import React from "react";
import { Book, Globe, FileText } from "lucide-react";

export default function Manbalar() {
  const sources = [
    {
      category: "Ilmiy maqolalar",
      icon: <FileText className="h-5 w-5" />,
      items: [
        {
          title: "Artificial Intelligence in Retail: Applications and Implications",
          author: "McKinsey Global Institute",
          year: "2025",
          url: "#",
        },
        {
          title: "Machine Learning for Customer Segmentation in E-commerce",
          author: "Journal of Business Research",
          year: "2024",
          url: "#",
        },
        {
          title: "Deep Learning Applications in Supply Chain Management",
          author: "International Journal of Production Economics",
          year: "2024",
          url: "#",
        },
      ],
    },
    {
      category: "Kitoblar",
      icon: <Book className="h-5 w-5" />,
      items: [
        {
          title: "Hands-On Machine Learning with Scikit-Learn and TensorFlow",
          author: "Aurélien Géron",
          year: "2023",
          url: "#",
        },
        {
          title: "The AI Advantage: How to Put the Artificial Intelligence Revolution to Work",
          author: "Thomas H. Davenport",
          year: "2024",
          url: "#",
        },
        {
          title: "Pattern Recognition and Machine Learning",
          author: "Christopher M. Bishop",
          year: "2023",
          url: "#",
        },
      ],
    },
    {
      category: "Onlayn manbalar",
      icon: <Globe className="h-5 w-5" />,
      items: [
        {
          title: "Online Retail II Dataset",
          author: "UCI Machine Learning Repository",
          year: "2024",
          url: "https://archive.ics.uci.edu/ml/datasets/Online+Retail+II",
        },
        {
          title: "TensorFlow Documentation",
          author: "Google",
          year: "2025",
          url: "https://www.tensorflow.org/",
        },
        {
          title: "Scikit-learn User Guide",
          author: "Scikit-learn Developers",
          year: "2025",
          url: "https://scikit-learn.org/",
        },
      ],
    },
  ];

  const reports = [
    {
      title: "AI in Retail Market Report 2025",
      organization: "Forrester Research",
      description: "Chakana savdo sohasida AI texnologiyalarining joriy holati va kelajak prognozlari",
    },
    {
      title: "Global AI Survey 2024",
      organization: "PwC",
      description: "Dunyodagi AI qo'llanilishi va biznesga ta'siri bo'yicha keng qamrovli tadqiqot",
    },
    {
      title: "Machine Learning in Business 2025",
      organization: "Accenture",
      description: "Biznes jarayonlarida mashinali o'rganish texnologiyalarining amaliy qo'llanilishi",
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in-up">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Manbalar
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Loyihada foydalanilgan ilmiy manbalar, kitoblar va onlayn resurslar
        </p>
      </section>

      {sources.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-3">
              {React.cloneElement(category.icon, { className: "h-5 w-5 text-white" })}
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {category.category}
            </h2>
          </div>
          <ul className="space-y-4">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <a
                  href={item.url}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.author} ({item.year})
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          Hisobotlar
        </h2>
        <ul className="space-y-4">
          {reports.map((report, reportIndex) => (
            <li key={reportIndex} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {report.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{report.organization}</p>
              <p className="text-gray-500 dark:text-gray-400">{report.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}