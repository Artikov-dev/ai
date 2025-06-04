import Link from "next/link"
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      <section className="text-center py-12 border-b border-gray-200/50 dark:border-gray-700/50 pb-12">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent mb-4 animate-pulse-glow">
            AI
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-slide-in-left">Artikov Rozimuhammad</p>

        <div className="max-w-3xl mx-auto mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            BTEC Learner Assessment Submission and Declaration
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Learner ID:</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">506241100373</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Assessor Name:</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Vahobjon Najmiddinov</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">BTEC Programme Title:</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Pearson BTEC International Level 3 Foundation Diploma in Information Technology
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Unit or Component Number and Title:</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">Unit X: Information Technology System</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Date Assignment Submitted:</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">02.06.2025</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">Guruh IDsi:</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">24-213</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8">
          Mundarija
        </h2>
        <div className="space-y-4 stagger-animation">
          {[
            { name: "Mundarija", href: "/", page: "3" },
            { name: "Kirish", href: "/kirish", page: "4" },
            {
              name: "Topshiriq A",
              href: "/topshiriq-a",
              page: "5-9",
              subItems: [
                { name: "A.P1", href: "/topshiriq-a#p1", page: "5" },
                { name: "A.P2", href: "/topshiriq-a#p2", page: "6" },
                { name: "A.M1", href: "/topshiriq-a#m1", page: "7" },
                { name: "A.D1", href: "/topshiriq-a#d1", page: "8" },
              ],
            },
            {
              name: "Topshiriq B",
              href: "/topshiriq-b",
              page: "10-15",
              subItems: [
                { name: "B.P3", href: "/topshiriq-b#p3", page: "10" },
                { name: "B.P4", href: "/topshiriq-b#p4", page: "11" },
                { name: "B.M2", href: "/topshiriq-b#m2", page: "12" },
                { name: "B.D1", href: "/topshiriq-b#d1", page: "15" },
              ],
            },
            {
              name: "Topshiriq C",
              href: "/topshiriq-c",
              page: "16-20",
              subItems: [
                { name: "C.P5", href: "/topshiriq-c#p5", page: "16" },
                { name: "C.M3", href: "/topshiriq-c#m3", page: "18" },
                { name: "C.D3", href: "/topshiriq-c#d3", page: "20" },
              ],
            },
            { name: "Xulosa", href: "/xulosa", page: "21" },
            { name: "Foydalanilgan manbalar", href: "/manbalar", page: "22" },
          ].map((item, index) => (
            <div
              key={item.name}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
            >
              <Link href={item.href} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {item.page}
                </span>
              </Link>
              {item.subItems && (
                <div className="ml-16 mt-4 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-2 group/sub"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 group-hover/sub:text-blue-500 transition-colors duration-300" />
                      <span className="group-hover/sub:font-medium transition-all duration-300">{subItem.name}</span>
                      <span className="ml-auto text-gray-400 dark:text-gray-500 text-xs">{subItem.page}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl mt-12 shadow-xl border border-gray-200/50 dark:border-gray-600/50 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          Kirish
        </h2>
        <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none space-y-4">
          <p className="leading-relaxed">
            Ushbu hisobotda sun’iy intellekt (AI) texnologiyasining asosiy turlari, yo‘nalishlari va ularning turli
            sohalardagi qo‘llanilishi batafsil o‘rganiladi. AI tizimlarining afzalliklari bilan bir qatorda, ehtimoliy
            xavflari, cheklovlari, shuningdek, axloqiy va huquqiy jihatlari ham chuqur tahlil qilinadi. Mazkur
            tahlil orqali sun’iy intellektni tashkilotlar faoliyatiga tatbiq etishda e’tiborga olinishi zarur bo‘lgan
            asosiy omillar aniqlanadi.n “Online Retail II” ma’lumotlar to‘plamidan foydalangan holda
            mijozlarni segmentatsiyalash

          </p>
          <p className="leading-relaxed">
            Hisobotning amaliy qismida esa UCI Machine Learning Repository’dan olinga, mahsulot tavsiya
            tizimini ishlab chiqish, savdo hajmini prognozlash hamda g‘ayrioddiy holatlarni aniqlashga
            qaratilgan sun’iy intellekt yechimi ishlab chiqildi. Ushbu yechim Python dasturlash tilida, ayniqsa
            statsmodels kutubxonasi asosida qurilgan bo‘lib, chiziqli va logistik regressiya modellaridan
            samarali foydalanildi. Modellar aniqlik, xatolik va prognozlash ko‘rsatkichlari asosida baholanib,
            keyingi bosqichlarda takomillashtirildi.

          </p>
          <p className="leading-relaxed">
            Mazkur loyiha nafaqat texnik jihatdan AI modellarini yaratish ko‘nikmasini rivojlantiradi, balki
            ularning real biznesdagi foydaliligi, ma’lumotlar sifati, shuningdek, foydalanuvchilarga ta’siri nuqtai
            nazaridan ham chuqur tahlil imkonini beradi. Bu hisobot orqali sun’iy intellektni amaliyotga joriy
            qilishda zarur bo‘lgan nazariy bilimlar va amaliy tajriba uyg‘unlashgan holda yoritiladi.
          </p>
        </div>
      </section>

      <div className="flex justify-center mt-12">
        <Link
          href="/topshiriq-a"
          className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
          <span className="relative z-10">Topshiriq A</span>
          <ArrowRight className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
}
