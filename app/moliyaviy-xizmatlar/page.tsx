import { LineChart, PieChart, BarChart, TrendingUp, Shield, AlertTriangle } from "lucide-react"

export default function MoliyaviyXizmatlar() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Moliyaviy Xizmatlarda AI</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Sun'iy intellekt moliyaviy xizmatlar sohasida katta o'zgarishlar yaratmoqda. Banklar, sug'urta kompaniyalari
          va investitsiya fondlari AI texnologiyalaridan foydalanib, o'z operatsiyalarini optimallashtirib, xavfsizlikni
          oshirib va mijozlarga yangi xizmatlarni taklif qilmoqda.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <LineChart className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Moliyaviy Tahlil</h3>
          <p className="text-gray-600 text-center">
            AI algoritmlari katta hajmdagi moliyaviy ma'lumotlarni tahlil qilib, investitsiya imkoniyatlarini aniqlashda
            yordam beradi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <PieChart className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Risk Boshqaruvi</h3>
          <p className="text-gray-600 text-center">
            AI kredit riskini baholash, firibgarlikni aniqlash va moliyaviy xavfsizlikni ta'minlashda qo'llaniladi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <BarChart className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Mijozlar Xizmati</h3>
          <p className="text-gray-600 text-center">
            Chatbotlar va virtual assistentlar mijozlarga 24/7 xizmat ko'rsatib, moliyaviy maslahatlar beradi.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-green-50 p-8 rounded-xl">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-green-800">Afzalliklari</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Xarajatlarni kamaytirish va operatsion samaradorlikni oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Firibgarlikni aniqlash va oldini olish imkoniyatlarini kuchaytirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Mijozlarga shaxsiylashtirilgan moliyaviy maslahatlar berish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Kredit qarorlarini tezroq va aniqroq qabul qilish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Bozor tendensiyalarini oldindan bashorat qilish imkoniyati</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 p-8 rounded-xl">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-red-800">Kamchiliklari</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Ma'lumotlar xavfsizligi va maxfiylik bilan bog'liq muammolar</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Algoritmlardagi noto'g'ri xulosalar va bias muammolari</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Yuqori boshlang'ich investitsiya xarajatlari</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Regulyativ va huquqiy cheklovlar</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Ish o'rinlarining qisqarishi va ijtimoiy ta'sir</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-xl mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Moliyaviy Xizmatlarda AI Qo'llanilishi</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Moliyaviy xizmatlar sohasida AI texnologiyalari keng qo'llanilmoqda. Masalan, mashinali o'rganish
            algoritmlari kredit skoringda, firibgarlikni aniqlashda va investitsiya strategiyalarini ishlab chiqishda
            qo'llaniladi.
          </p>
          <p>
            Chatbotlar va virtual assistentlar mijozlarga 24/7 xizmat ko'rsatib, oddiy operatsiyalarni avtomatlashtiradi
            va mijozlar tajribasini yaxshilaydi. Shuningdek, AI-asoslangan tahlil tizimlari moliyaviy bozorlardagi
            tendensiyalarni bashorat qilishda yordam beradi.
          </p>
          <p>
            Robo-advisorlar kichik investorlar uchun arzon va samarali investitsiya maslahatlarini taqdim etadi, bu esa
            moliyaviy xizmatlarni keng ommaga ochib beradi.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-6">
        <Shield className="h-16 w-16 text-blue-200" />
      </div>
    </div>
  )
}
