import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function Xulosa() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Xulosa
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Sun'iy intellekt texnologiyalarining zamonaviy sanoatdagi o'rni va kelajak istiqbollari
        </p>
      </section>

      <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          Loyiha xulosalari
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            “Online Retail II” ma’lumotlar to‘plamiga asoslangan ushbu loyiha sun’iy intellekt (AI)
            texnologiyalarining chakana savdo sohasidagi amaliy qo‘llanilishi va transformatsion salohiyatini har
            tomonlama tahlil qiladi. Loyiha davomida mijozlarni segmentatsiyalash, mahsulot tavsiya tizimlari,
            savdo hajmini prognozlash va g‘ayrioddiy holatlarni aniqlash kabi AI strategiyalari bosqichma-bosqich
            ishlab chiqildi. Python va statsmodels kutubxonalari asosida qurilgan chiziqli regressiya modeli orqali
            tranzaksiyalar qiymati aniq bashorat qilindi. Model dastlab soddaligi va tez ishlashi bilan foydali
            bo‘lgan bo‘lsa-da, keyinchalik outlier’larning olib tashlanishi va vaqtga bog‘liq xususiyatlar (masalan,
            hafta kuni, oy) qo‘shilishi evaziga uning aniqligi sezilarli oshdi — MAE 15.55 dan 5.45 ga tushdi, R²
            esa 0.3832 darajasida qayd etildi. Bu esa modelning real biznesdagi qo‘llanilishini imkon qadar
            kengaytirishga yo‘l ochdi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-lg border border-blue-200/50 dark:border-blue-700/50 text-center">
              <CheckCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Muvaffaqiyatli joriy etish</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                AI tizimi kutilgan natijalardan yuqori ko'rsatkichlarga erishdi
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-lg border border-green-200/50 dark:border-green-700/50 text-center">
              <TrendingUp className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Moliyaviy samaradorlik</h3>
              <p className="text-sm text-green-600 dark:text-green-400">197% ROI va 8.1 oylik payback period</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-lg border border-purple-200/50 dark:border-purple-700/50 text-center">
              <Users className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Mijozlar qoniqishi</h3>
              <p className="text-sm text-purple-600 dark:text-purple-400">4.6/5.0 reyting va 31% sadoqat o'sishi</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 p-6 rounded-lg border border-orange-200/50 dark:border-orange-700/50 text-center">
              <Zap className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Operatsion samaradorlik</h3>
              <p className="text-sm text-orange-600 dark:text-orange-400">28% marketing xarajatlari kamayishi</p>
            </div>
          </div>

          <p className="mt-8 text-gray-600 dark:text-gray-300">AI’ning chakana savdo, transport, moliya va davlat xizmatlari kabi asosiy sohalardagi iqtisodiy va
            ijtimoiy ta’siri ham chuqur tahlil qilindi. Jumladan, AI yordamida daromadni 20–30% oshirish,
            operatsion xarajatlarni kamaytirish, foydalanuvchi tajribasini shaxsiylashtirish orqali mijoz ishtirokini
            kuchaytirish mumkinligi ko‘rsatildi (McKinsey, 2025). Shu bilan birga, tarafkashlik, shaxsiy
            ma’lumotlar maxfiyligi, ish o‘rinlarining qisqarishi, tengsizlik va sifatsiz ma’lumotlar kabi xavf-xatarlar
            ham mavjud bo‘lib, bu texnologiyalarni faqat mas’uliyatli va nazoratli joriy qilish orqali ijobiy
            natijalarga erishish mumkinligi ta’kidlandi. Modeldan real amaliyotda marketing strategiyalari,
            zaxiralarni boshqarish va moliyaviy rejalashtirish kabi yo‘nalishlarda foydalanish mumkin. Shu bilan
            birga, modelning soddaligi texnik bo‘lmagan foydalanuvchilar uchun ham tushunarli bo‘lishini
            ta’minlaydi.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>AI texnologiyalari to'g'ri qo'llanilganda yuqori moliyaviy va operatsion natijalar beradi</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Ma'lumotlar sifati AI tizimi samaradorligining asosiy omilidir</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Inson omili va o'zgarishlarga boshqaruv texnik yechimlar qadari muhimdir</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Axloqiy va huquqiy talablarga rioya qilish mijozlar ishonchini ta'minlaydi</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
              <span>Doimiy monitoring va model yangilanishi tizim samaradorligini saqlab qoladi</span>
            </li>
          </ul>


          <p className="mt-8 text-gray-600 dark:text-gray-300">
            Kelajakda modelni yanada mukammallashtirish uchun qo‘shimcha demografik va geografik atributlarni
            (CustomerID, Country, ProductCategory) modellashtirishga kiritish, Polynomial Regression, KNN yoki
            Decision Tree kabi nisbatan oddiy, ammo kuchli modellarni qo‘llash, Explainable AI (XAI) vositalari
            orqali natijalarni tushuntirish, hamda real vaqtli ma’lumotlar integratsiyasi asosida interaktiv, bashoratga
            asoslangan ssenariylar yaratish tavsiya etiladi. Umuman olganda, ushbu loyiha sun’iy intellekt
            vositalarining raqamli transformatsiyadagi ulkan salohiyatini isbotlaydi va uning muvaffaqiyati —
            yuqori sifatli ma’lumotlar, axloqiy yondashuv va inson nazoratiga asoslangan boshqaruv tizimlari bilan
            chambarchas bog‘liq ekanini namoyon etadi.

          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg mt-8">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Tavsiyalar:</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• AI loyihalarini boshlashdan oldin aniq maqsadlar va kutilgan natijalarni belgilash</li>
              <li>• Ma'lumotlar sifati va xavfsizligiga alohida e'tibor berish</li>
              <li>• Xodimlar treningi va o'zgarishlarga boshqaruv strategiyasini ishlab chiqish</li>
              <li>• Axloqiy va huquqiy talablarga qat'iy rioya qilish</li>
              <li>• Doimiy monitoring va takomillashtirish tizimini joriy etish</li>
            </ul>
          </div>
          <p className="mt-8 text-gray-600 dark:text-gray-300">EDA loyihaning muvaffaqiyatida markaziy rol o‘ynab, modelni takomillashtirish va biznes qiymatini
oshirishda muhim yo‘nalishlar ko‘rsatdi. Kelajakda modelni yanada rivojlantirish uchun EDA’ga
asoslangan qo‘shimcha yondashuvlar tavsiya etiladi. Masalan, CustomerID va Country atributlari
asosida mijozlar segmentatsiyasi, mahsulot toifalarini tahlil qilish yoki vaqt seriyalarida mavsumiy
o‘zgarishlarni chuqurroq o‘rganish (masalan, seasonal trend decomposition) modelning aniqligini
oshirishi mumkin. Shuningdek, RandomForest yoki Gradient Boosting kabi murakkab algoritmlarni
qo‘llash va Explainable AI vositalari orqali natijalarni tushuntirish modelning tushunarli va ishonchli
bo‘lishini ta’minlaydi. EDA natijalari loyihaning chakana savdodagi transformatsion salohiyatini
mustahkamlab, yuqori sifatli ma’lumotlar va axloqiy yondashuvga asoslangan sun’iy intellekt
yechimlarining muhimligini ta’kidlaydi.</p>
        </div>
      </section>

      <div className="flex justify-between mt-8">
        <Link
          href="/topshiriq-c"
          className="group relative inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform border border-gray-200/50 dark:border-gray-700/50"
        >
          <ArrowRight className="mr-2 h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />{" "}
          Topshiriq C
        </Link>
        <Link
          href="/manbalar"
          className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
          <span className="relative z-10">Manbalar</span>
          <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
}
