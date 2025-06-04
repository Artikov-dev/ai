import { ShoppingCart, Tag, Users, TrendingUp, AlertTriangle, BarChart4 } from "lucide-react"

export default function ChakanaSavdo() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Chakana Savdoda AI</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Sun'iy intellekt chakana savdo sohasida mijozlar tajribasini yaxshilash, inventarni boshqarish va marketing
          strategiyalarini optimallashtirishda muhim rol o'ynamoqda.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <ShoppingCart className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Personalizatsiya</h3>
          <p className="text-gray-600 text-center">
            AI mijozlarning xarid tarixini tahlil qilib, shaxsiylashtirilgan tavsiyalar beradi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Tag className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Narxlash Strategiyasi</h3>
          <p className="text-gray-600 text-center">
            AI algoritmlari bozor talabi va raqobatchilar narxlarini hisobga olib, dinamik narxlash strategiyalarini
            ishlab chiqadi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Mijozlar Xizmati</h3>
          <p className="text-gray-600 text-center">
            AI-asoslangan chatbotlar mijozlar savollariga tezkor javob berib, xarid jarayonini soddalashtiradi.
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
              <span>Mijozlar tajribasini yaxshilash va sodiqlikni oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Inventar boshqaruvini optimallashtirib, ortiqcha zaxiralarni kamaytirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Sotuvlarni bashorat qilish va talab tendensiyalarini aniqlash</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Marketing kampaniyalarining samaradorligini oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Operatsion xarajatlarni kamaytirish va samaradorlikni oshirish</span>
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
              <span>Mijozlar ma'lumotlarining maxfiyligi bilan bog'liq muammolar</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Yuqori boshlang'ich investitsiya va texnik infratuzilma talablari</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Inson xodimlarining o'rnini bosishi va ish o'rinlarining qisqarishi</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Texnik nosozliklar va tizim ishdan chiqishi xavfi</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Mijozlar tomonidan AI texnologiyalarining qabul qilinishi bilan bog'liq muammolar</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-xl mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Chakana Savdoda AI Qo'llanilishi</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Chakana savdo sohasida AI texnologiyalari mijozlar xulq-atvorini tahlil qilish, inventarni boshqarish va
            marketing strategiyalarini optimallashtirishda qo'llaniladi.
          </p>
          <p>
            Masalan, Amazon va Alibaba kabi yirik onlayn chakana savdo kompaniyalari AI algoritmlari yordamida
            mijozlarga mahsulotlarni tavsiya qiladi. Bu mijozlar tajribasini yaxshilaydi va sotuvlarni oshiradi.
          </p>
          <p>
            Shuningdek, AI-asoslangan bashorat qilish tizimlari chakana savdo kompaniyalariga talab tendensiyalarini
            oldindan ko'rish va inventarni tegishli ravishda rejalashtirish imkonini beradi.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-6">
        <BarChart4 className="h-16 w-16 text-blue-200" />
      </div>
    </div>
  )
}
