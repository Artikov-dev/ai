import { Truck, PackageOpen, Map, TrendingUp, AlertTriangle, Route } from "lucide-react"

export default function Logistika() {
  return (
    <div className="space-y-10">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Logistikada AI</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Sun'iy intellekt logistika va yetkazib berish zanjirini boshqarishda samaradorlikni oshirish, xarajatlarni
          kamaytirish va mijozlar xizmatini yaxshilash uchun qo'llanilmoqda.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Route className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Marshrutni Optimallash</h3>
          <p className="text-gray-600 text-center">
            AI algoritmlari transport marshrutlarini optimallashtirib, yoqilg'i sarfini kamaytiradi va yetkazib berish
            vaqtini qisqartiradi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <PackageOpen className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Inventar Boshqaruvi</h3>
          <p className="text-gray-600 text-center">
            AI bashorat qilish algoritmlari inventar darajalarini optimallashtirib, ortiqcha zaxiralarni kamaytiradi va
            talab o'zgarishlariga tezkor javob beradi.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Map className="h-8 w-8 text-blue-700" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Yetkazib Berish Bashorati</h3>
          <p className="text-gray-600 text-center">
            AI tizimlari yetkazib berish vaqtini aniq bashorat qilib, mijozlar tajribasini yaxshilaydi.
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
              <span>Transport xarajatlarini kamaytirish va yoqilg'i sarfini optimallash</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Yetkazib berish vaqtini qisqartirish va aniqlikni oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Inventar darajalarini optimallashtirib, saqlash xarajatlarini kamaytirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Yetkazib berish zanjirida shaffoflikni oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-2">•</span>
              <span>Talab o'zgarishlariga tezkor javob berish imkoniyati</span>
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
              <span>Yuqori boshlang'ich investitsiya xarajatlari</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Mavjud tizimlar bilan integratsiya qilish muammolari</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Ma'lumotlar sifati va to'liqligi bilan bog'liq muammolar</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Xodimlarni qayta o'qitish va ish o'rinlarining qisqarishi</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2">•</span>
              <span>Kutilmagan vaziyatlarga moslashish qobiliyatining cheklanganligi</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-xl mt-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Logistikada AI Qo'llanilishi</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Logistika sohasida AI texnologiyalari transport marshrutlarini optimallash, inventarni boshqarish va
            yetkazib berish vaqtini bashorat qilishda qo'llaniladi.
          </p>
          <p>
            Masalan, Amazon va DHL kabi kompaniyalar AI algoritmlari yordamida yetkazib berish marshrutlarini
            optimallashtirib, yoqilg'i sarfini kamaytiradi va yetkazib berish vaqtini qisqartiradi.
          </p>
          <p>
            Shuningdek, AI-asoslangan bashorat qilish tizimlari logistika kompaniyalariga talab o'zgarishlarini oldindan
            ko'rish va inventarni tegishli ravishda rejalashtirish imkonini beradi.
          </p>
        </div>
      </section>

      <div className="flex justify-center py-6">
        <Truck className="h-16 w-16 text-blue-200" />
      </div>
    </div>
  )
}
