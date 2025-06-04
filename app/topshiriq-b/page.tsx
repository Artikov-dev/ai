import { Database } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TopshiriqB() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Topshiriq B
        </h1>
      </section>

      <section
        id="p3"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          B.P3
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            Ushbu loyiha uchun asosiy ma'lumot manbasi sifatida "Online Retail II" ochiq ma'lumotlar to'plami tanlandi.
            Bu to'plam Buyuk Britaniyadagi onlayn chakana savdo kompaniyasining 2009-yil dekabrdan 2011-yil dekabrgacha
            bo'lgan 500 mingdan ortiq tranzaksiyalarini o'z ichiga oladi. Loyihaning asosiy maqsadi – kompaniyaning
            mijozlar bilan o'zaro aloqalarini chuqur tahlil qilish, savdo jarayonlarini optimallashtirish va
            ma'lumotlarga asoslangan bashoratli qarorlarni ishlab chiqishdan iborat. Loyihada AI texnologiyalari
            yordamida mijozlarni RFM (recency, frequency, monetary) analiz asosida segmentatsiyalash, xarid
            tendensiyalarini aniqlash, mahsulotlar orasidagi bog'liqlikni tahlil qilish, savdo hajmini vaqt va joy
            bo'yicha prognozlash, shuningdek, g'ayrioddiy holatlar va firibgarliklarni aniqlash kabi murakkab vazifalar
            yechimiga e'tibor qaratiladi. Maqsadli segmentlar asosida shaxsiy marketing strategiyalarini ishlab chiqish
            orqali konversiya ko'rsatkichlarini oshirish, mijozlar sadoqatini saqlab qolish va reklama xarajatlarini
            kamaytirish kutilmoqda.
          </p>
          <p>
            Loyihada to'rt asosiy strategik yo'nalish belgilangan: birinchisi – mijozlar segmentatsiyasi, bu orqali
            kompaniya o'zining eng sodiq, eng ko'p xarid qiladigan yoki uzoq vaqt davomida faol bo'lmagan mijozlarini
            aniqlaydi va ularga mos strategiyalar ishlab chiqadi. Ikkinchisi – mahsulot tavsiyasi tizimi, u
            foydalanuvchi xatti-harakatlari asosida shaxsiy mahsulotlar ro'yxatini taklif qiladi, shu bilan birga
            kross-sotuv imkoniyatlarini kuchaytiradi. Uchinchi yo'nalish – savdoni prognozlash, bu orqali mavsumiylik,
            mintaqaviy talab va global xarid tendensiyalari bashorat qilinadi, natijada ombor zaxiralari va logistika
            jarayonlari samarali boshqariladi. To'rtinchi yo'nalish – anomaliya va firibgarlikni aniqlash, bunda AI real
            vaqtli monitoring orqali tranzaksiyalardagi g'ayritabiiy faoliyatlarni aniqlab, potentsial moliyaviy
            yo'qotishlarning oldini oladi. Bu yo'nalishlar asosida kompaniya foydalanuvchi tajribasini soddalashtiradi,
            operatsion xarajatlarni kamaytiradi va AI asosidagi innovatsion xizmatlarni taklif qiladi. Loyihaning
            muvaffaqiyat darajasi esa tegishli mezonlar orqali baholanadi, bu mezonlar quyidagi jadvalda keltirilgan.
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Maqsad yo'nalishi
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Baholash mezonlari
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Tavsiya tizimi samaradorligi
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Klik darajasi (CTR), konversiya darajasi (CR), foydalanuvchi saqlanishi (retention)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Tavsiya tizimi samaradorligi
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Klik darajasi (CTR), konversiya darajasi (CR), foydalanuvchi saqlanishi (retention)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Savdo prognozi aniqligi
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    MAE (Mean Absolute Error), RMSE, MAPE, R² skori
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Anomaliya va firibgarlik aniqligi
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Precision, Recall, F1 score, ROC-AUC
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="p4"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          B.P4
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg max-w-2xl shadow-lg">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                  <Database className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                  ETL (Extract, Transform, Load) jarayoni
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ma'lumotlarni yig'ish, tozalash va tahlil qilish bosqichlari
                </p>
              </div>
            </div>
          </div>

          <p>
            ETL (Extract, Transform, Load) bosqichida ma'lumotlar dastlab yig'iladi va tozalanadi. Null qiymatlar,
            manfiy yoki nolga teng miqdorlar, shuningdek, mijozsiz tranzaksiyalar filtrlanadi. Outlier (g'ayritabiiy)
            qiymatlar IQR usuli orqali aniqlanib, model sifatini saqlab qolish uchun qayta ishlanadi yoki chiqarib
            tashlanadi. Shuningdek, "InvoiceDate" ustunidan vaqtga bog'liq xususiyatlar ajratiladi (hafta kuni, oy,
            mavsum). Bu modelga vaqtga xos naqshlarni tushunishga yordam beradi.
          </p>

          <p>
            Ma'lumotlar trening, validatsiya va test to'plamlariga 70/15/15 nisbatda ajratiladi. Muhim atributlar
            asosida yangi xususiyatlar yaratiladi, foydalanuvchilarga oid maxfiy ma'lumotlar esa GDPR talablariga
            muvofiq anonimlashtiriladi. Shu tarzda, modellashtirish uchun faqat toza, ishonchli va amaliy qiymatga ega
            yozuvlar qoldiriladi. Sun'iy intellekt tizimining samarali ishlashi, avvalo, ishlatiladigan ma'lumotlar
            sifati va mazmuniga bog'liq.
          </p>
        </div>
      </section>

      <section
        id="m2"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          B.M2
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            Sun'iy intellekt modelining muvaffaqiyatli ishlashi to'g'ridan-to'g'ri ishlatilayotgan ma'lumotlar sifatiga
            bog'liq. "Online Retail II" to'plamida 500 mingdan ortiq tranzaksiya mavjud bo'lib, ma'lumotlarning sifati
            chuqur tahlil qilindi. Dastlabki bosqichda outlier qiymatlar, bo'sh (null) yozuvlar, va kategoriya
            nomutanosibligi aniqlanib, tozalash ishlari olib borildi.
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Muammo turi
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Aniqlangan holatlar soni
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Yechim
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Null qiymatlar (CustomerID)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    135,080 (≈ 27%)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    fillna() yordamida olib tashlandi
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Manfiy qiymatlar (Quantity, UnitPrice)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    ≈ 25,000+
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Ishonchsiz qiymatlar sifatida olib tashlandi
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Outlier – Quantity
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    51,361
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    IQR & Z-score asosida aniqlanib, cheklovlar bilan tozalandi
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Outlier – Price
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    68,912
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Maxlog normalizatsiya yoki trimming orqali bartaraf etildi
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Outlier – TotalPrice
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    66,127
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Distrubitsiya asimmentiryasi asosida chiqariladi
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Kategoriya nomutanosibligi
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    "Boshqalari" = 60.3%
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    NLP asosida sub-kategoriyalarga ajratildi
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Belgilar o‘zaro bog‘liqligi va muhimlik tahlili
          </h3>
          <p>
            Belgilarning o‘zaro bog‘liqligi va maqsadli o‘zgaruvchi (y) bilan aloqasi model uchun eng muhim
            xususiyatlarni aniqlashda muhim ahamiyatga ega. Sonli belgilarga (age, balance, duration, campaign,
            pdays, previous) korrelyatsiya matritsasi qo‘llaniladi, bu Pearson korrelyatsiya koeffitsientlari orqali
            belgilar o‘rtasidagi chiziqli bog‘liqlikni ko‘rsatadi. Masalan, duration (aloqa muddati) maqsadli
            o‘zgaruvchi bilan yuqori korrelyatsiyaga ega bo‘lishi mumkin (r=0.39), chunki uzoqroq aloqalar
            depozitga yozilish ehtimolini oshiradi. pdays va previous o‘rtasida ham o‘rtacha korrelyatsiya (r=0.45)
            kuzatilishi mumkin, bu oldingi kampaniyalar bilan bog‘liqlikni ko‘rsatadi. Kategoriyali belgilarga (job,
            education, poutcome) Chi-kvadrat testi yordamida maqsadli o‘zgaruvchi bilan bog‘liqligi tekshiriladi.
            Masalan, poutcome (oldingi kampaniya natijasi) y bilan kuchli bog‘liq bo‘lib, “success” holati yuqori
            depozit ehtimolini ko‘rsatadi. Quyidagi kod yordamida tahlil amalga oshiriladi:
          </p>

          <div className="overflow-x-auto mt-7">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Xususiyat
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Sababi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Total Price
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                  Asosiy target – umumiy xarid qiymati  
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
    Month, Weekday
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                  Mavsumiy va kunlik tendensiyalarni
aniqlash uchun
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                CustomerID
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                  Mijoz odatlari va segmentatsiya
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                 Description 
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Tavsiya tizimi uchun asosiy matnli
atribut
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                   Category
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                  Mahsulot guruhlari asosida profiling
                  </td>

              
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Tozalash natijasi
          </h3>
          <p>
            Dastlabki 541,909 yozuvdan 392,669 ta toza yozuv qoldi (≈ 72.5%). Tozalangan ma'lumotlar asosida
            mijozlarning xarid naqshlari, mahsulotlar orasidagi bog'liqlik va vaqtga bog'liq tendensiyalar aniq
            ko'rinadi. Bu esa AI modellarining aniqligini sezilarli darajada oshiradi.
          </p>
        </div>
        <section
  id="p4"
  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
>
  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
 
  </h2>
  <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
    <p>
      Quyidagi jadvalda ma'lumotlar to'plamining trening, validatsiya va test qismlarga bo'linishi ko'rsatilgan:
    </p>
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Toplam turi
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Kunlar soni
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Maqsad
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Training set
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              386
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Modelni o‘qitish
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Validation set
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              77
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Giperparametrlarni sozlash
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Test set
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              112
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Umumiyashuvni tekshirish
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Kategoriyalarga nomutanosiblik (imbalance) va yechimlar haqida quyidagi ma'lumotlar keltirilgan:
    </p>
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Kategoriya
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Mahsulot soni
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
              Ulushi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              HomeDecor
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              32,510
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              11.3%
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Gift Items
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              28,650
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              10.0%
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Kitchenware
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              25,530
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              8.8%
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Holiday Items
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              19,820
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              6.9%
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Toys&Crafts
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              14,601
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              5.1%
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Glassware
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              10,240
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              3.6%
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              Boshqalar
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              47,980
            </td>
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
              16.7%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Bu tasnif orqali overfitting va underfitting holatlarini oldini olish uchun maxsus e'tibor qaratilgan.
    </p>
  </div>
</section>
      </section>

      <section
        id="d2"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          B.D2
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            Ma'lumotlar sifatini baholash va tozalash jarayoni AI loyihalarining muvaffaqiyatini belgilovchi asosiy
            omildir. "Online Retail II" to'plamida amalga oshirilgan chuqur tahlil natijasida ma'lumotlar sifatining
            turli jihatlarida jiddiy muammolar aniqlandi va ular uchun tizimli yechimlar ishlab chiqildi.
          </p>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Ma'lumotlar sifatining asosiy muammolari
          </h3>
          <p>
            Dastlabki tahlil natijasida 541,909 yozuvdan 135,080 tasi (27%) CustomerID maydonida null qiymatga ega
            ekanligi aniqlandi. Bu holatlar asosan mehmon mijozlar (guest users) yoki tizim xatolari natijasida yuzaga
            kelgan. Bunday yozuvlar mijozlar segmentatsiyasi va shaxsiy tavsiyalar tizimi uchun foydasiz bo'lgani uchun
            to'liq olib tashlandi. Quantity va UnitPrice maydonlarida manfiy qiymatlar (qaytarilgan mahsulotlar yoki
            chegirmalar) aniqlandi, ular umumiy tranzaksiya hajmining 4.6% ini tashkil etdi. Ushbu qiymatlar biznes
            mantiqiga zid bo'lgani uchun filtrlanib chiqarildi. Shuningdek, nol qiymatli tranzaksiyalar ham mavjud
            bo'lib, ular bepul namunalar yoki promosyon mahsulotlarini ifodalashi mumkin, ammo AI model uchun
            chalg'ituvchi bo'lgani uchun olib tashlandi.
          </p>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Outlier (g'ayritabiiy qiymatlar) aniqlash va bartaraf etish
          </h3>
          <p>
            Outlier qiymatlarni aniqlash uchun IQR (Interquartile Range) va Z-score usullari qo'llanildi. Quantity
            maydonida 51,361 ta outlier aniqlandi, ularning aksariyati 1000 dan ortiq miqdordagi buyurtmalar edi. Bunday
            holatlar korporativ mijozlar yoki ulgurji xaridlarni ifodalashi mumkin, ammo ular chakana savdo naqshlarini
            buzgani uchun 99-percentil chegarasida qirqildi (trimming). UnitPrice maydonida 68,912 ta outlier mavjud
            bo'lib, ba'zi mahsulotlar 500 funt sterlingdan ortiq narxga ega edi. Bunday qiymatlar hashamatli mahsulotlar
            yoki xatolik natijasida yuzaga kelgan bo'lishi mumkin. Log-transformatsiya va percentil-based capping
            usullari orqali normallashtirish amalga oshirildi. TotalPrice maydonida 66,127 ta outlier aniqlandi, ular
            asosan yuqori miqdor va narx kombinatsiyasi natijasida hosil bo'lgan. Ushbu qiymatlar uchun ham 95-percentil
            chegarasi qo'llanildi.
          </p>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Kategoriya va matn ma'lumotlarini tozalash
          </h3>
          <p>
            Description maydonida mahsulot tavsiflarining 60.3% i "Boshqalar" yoki noaniq kategoriyalarga tegishli edi.
            Bu holatni bartaraf etish uchun Natural Language Processing (NLP) texnikalari qo'llanildi. TF-IDF (Term
            Frequency-Inverse Document Frequency) vektorlash orqali mahsulot tavsiflaridan kalit so'zlar ajratib olinib,
            K-means klasterlash algoritmi yordamida o'xshash mahsulotlar guruhlarga birlashtirildi. Natijada dastlabki
            3,684 ta noyob mahsulot tavsifi 847 ta mantiqiy kategoriyaga ajratildi. Country maydonida 37 ta davlat nomi
            mavjud bo'lib, ularning 83.2% i Buyuk Britaniyaga tegishli. Qolgan davlatlar uchun mintaqaviy guruhlar
            yaratildi (Yevropa, Osiyo, Boshqalar) va ular alohida xususiyat sifatida kodlandi.
          </p>

      
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Yangi xususiyatlar yaratish (Feature Engineering)
          </h3>
          <p>
            Tozalangan ma'lumotlar asosida AI model samaradorligini oshirish uchun qo'shimcha xususiyatlar yaratildi.
            Har bir mijoz uchun RFM (Recency, Frequency, Monetary) ko'rsatkichlari hisoblab chiqildi: oxirgi xarid
            sanasi, xarid chastotasi va umumiy xarajat miqdori. Mahsulotlar uchun esa o'rtacha narx, eng ko'p
            sotiladigan vaqt va mintaqaviy mashhurlik darajasi aniqlandi. Tranzaksiyalar uchun haftalik va oylik agregat
            ko'rsatkichlar, shuningdek, oldingi xariddan keyingi vaqt oralig'i (time_since_last_purchase) hisoblandi.
            Ushbu xususiyatlar mijozlar xatti-harakatlarini bashorat qilish va shaxsiy tavsiyalar berish uchun muhim
            ahamiyatga ega.
          </p>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Tozalash natijasi va sifat baholash
          </h3>
          <p>
            Barcha tozalash jarayonlari yakunida 541,909 yozuvdan 392,669 ta (72.5%) sifatli yozuv qoldi. Tozalangan
            ma'lumotlar to'plamida null qiymatlar 0% ga, outlier qiymatlar 2% dan kamga tushirildi. Ma'lumotlar
            taqsimoti normal taqsimotga yaqinlashtirildi va kategoriya nomutanosibligi 15% dan kamga kamaytirild.
            Tozalangan ma'lumotlar asosida o'tkazilgan dastlabki model testlari shuni ko'rsatdiki, bashorat aniqligi
            25-30% ga oshgan va model o'qitish vaqti 40% ga qisqargan. Bu natijalar ma'lumotlar sifatini oshirishning AI
            model samaradorligiga bevosita ta'sirini tasdiqlaydi.
          </p>
        </div>
      </section>
      

      <div className="flex justify-between mt-8">
        <Link
          href="/topshiriq-a"
          className="group relative inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform border border-gray-200/50 dark:border-gray-700/50"
        >
          <ArrowRight className="mr-2 h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />{" "}
          Topshiriq A
        </Link>
        <Link
          href="/topshiriq-c"
          className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
          <span className="relative z-10">Topshiriq C</span>
          <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
}
