import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TopshiriqC() {
  return (
    <div className="space-y-12 animate-fade-in-up">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Topshiriq C
        </h1>
      </section>

      <section
        id="p5"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          C.P5
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            Sun’iy intellekt modelini yaratish jarayoni “Online Retail II” ma’lumotlar to‘plamining strukturasi bilan
            tanishishdan boshlandi. Ushbu to‘plamda 500 mingdan ortiq real xarid yozuvlari mavjud bo‘lib, ular
            quyidagi atributlarni o‘z ichiga oladi: InvoiceNo, StockCode, Description, Quantity, InvoiceDate,
            UnitPrice, CustomerID va Country. Ma’lumotlarni tayyorlash bosqichida fillna() funksiyasi yordamida
            bo‘sh qiymatlar to‘ldirildi, manfiy va nolga teng qiymatlar olib tashlandi, TotalPrice = Quantity ×
            UnitPrice ustuni yaratildi. Shundan so‘ng, quyidagi statistik ko‘rsatkichlar hisoblab chiqildi: Quantity
            uchun o‘rtacha 13.58, maksimum 19,152, standart og‘ish 96.78; UnitPrice uchun o‘rtacha 3.29,
            maksimum 10,953, standart og‘ish 34.75; TotalPrice uchun o‘rtacha 21.66, maksimum 15,818, standart
            og‘ish 77.15. Bu qiymatlar ma’lumotlarda outlier’lar mavjudligini ko‘rsatdi, shuning uchun IQR va
            Z-score metodlari asosida g‘ayritabiiy yozuvlar aniqlanib, chetga chiqarildi. Natijada modelni o‘rgatish
            uchun toza, ishonchli va strukturali ma’lumotlar to‘plami shakllantirildi.

          </p>
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Korsatkich
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Quantity
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Unit Price
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Ortacha (Min)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    13.58
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    3.29
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    21.66
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Maksimum (Max)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    19.152
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    10.953
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    15.818
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    Standart og‘ish (Std Dev)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    96.78
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    34.75
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    77.15
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8">
            Ma’lumotlar to‘plamining tuzilishini chuqurroq tushunish uchun Exploratory Data Analysis (EDA)
            o‘tkazildi, bunda Quantity, UnitPrice va TotalPrice atributlari o‘rtasidagi bog‘liqlik tahlil qilindi.
            Korrelyatsiya tahlili natijalari heatmap orqali vizualizatsiya qilindi (1-rasm). Heatmap TotalPrice’ning
            Quantity bilan 0.8 va UnitPrice bilan 0.6 korrelyatsiya koeffitsientlariga ega ekanligini ko‘rsatdi, bu
            modelning asosiy atributlari to‘g‘ri tanlanganligini tasdiqlaydi. Biroq, korrelyatsiyaning to‘liq 1 ga
            yetmasligi qo‘shimcha atributlar, masalan, InvoiceDate yoki CustomerID, kiritish orqali modelning
            bashorat aniqligini oshirish imkoniyati borligini ko‘rsatadi. Ushbu tahlil modelning hozirgi cheklovlarini
            aniqlashga yordam berdi va keyingi bosqichlarda feature engineering zarurligini ta’kidlaydi.
            Korrelyatsiya tahlili ma’lumotlarning statistik ko‘rsatkichlarini to‘ldirib, model yaratish jarayoniga
            muhim asos yaratdi
          </p>
          <img src="/karre.png" alt="karre" />


          <p>
            Ma’lumotlardagi vaqt atributining ahamiyatini o‘rganish uchun InvoiceDate asosida oylik savdo
            tendensiyalari tahlil qilindi. TotalPrice’ning oylar bo‘yicha o‘zgarishi line plot orqali vizualizatsiya
            qilindi (2-rasm). Grafikda bayram oylari, masalan, noyabr-dekabrda savdo hajmining sezilarli o‘sishi
            kuzatildi, bu mavsumiy naqshlarni aniqladi. Ushbu tahlil modelga vaqtga bog‘liq atributlar, masalan, oy
            yoki hafta kuni, qo‘shish orqali uning bashorat aniqligini oshirish imkonini ko‘rsatdi. Vaqt seriyasi
            tahlili nafaqat modelni yaxshilash uchun yo‘nalish berdi, balki biznes uchun zaxira boshqaruvi va
            marketing strategiyalarini rejalashtirishda qo‘llanilishi mumkin bo‘lgan amaliy ma’lumotlar taqdim etdi.
            Bu tahlil modelning real hayotdagi qo‘llanilish sohasini kengaytirishga xizmat qildi.

          </p>


          <p>
            Chiziqli regressiya modeli yaratishda bog‘liq o‘zgaruvchi sifatida TotalPrice tanlandi, mustaqil
            o‘zgaruvchilar esa Quantity va UnitPrice bo‘ldi. Ma’lumotlar train_test_split() yordamida 80% trening,
            20% test to‘plamlariga ajratildi. Model trening natijalarida quyidagi regressiya tenglamasi hosil bo‘ldi:
            TotalPrice = 0.36 × Quantity + 1.01 × UnitPrice + ε. Bu shuni anglatadiki, xarid qiymati mahsulot soni
            va narxiga bog‘liq holda chiziqli ravishda oshib boradi. Model samaradorligini baholash uchun test
            to‘plami ustida sinov o‘tkazildi, natijada R² = 0.2924 va MAE = 15.55 ko‘rsatkichlari olindi. Model
            natijalari scatter plot orqali vizualizatsiya qilindi, unda past qiymatlar diapazonida model nisbat an aniq
            ishlagan, ammo yuqori qiymatlardagi outlier’lar modelni chalg‘itgan. Bu nuqtalar diagonal chiziqdan
            uzoqlashgan bo‘lib, modelning underfitting holatini va noaniq joylarini ko‘rsatdi.
          </p>
          <img src="/oylik.png" alt="" />

          <p>Modelning R² = 0.2924 ko‘rsatkichi past bo‘lib, bu model xarid qiymatlarining o‘zgarishini to‘liq
            tushuntira olmasligini bildiradi. Korrelyatsiya tahlili shuni ko‘rsatdiki, faqat Quantity va UnitPrice
            atributlari real hayotdagi murakkab naqshlarni aniqlash uchun yetarli emas. Vaqt seriyasi tahlili esa
            modelga vaqt atributlarini qo‘shish zarurligini ta’kidlaydi. Ushbu muammolarni bartaraf etish uchun
            quyidagilar taklif etiladi: (1) modelga qo‘shimcha atributlar qo‘shish (mijoz ID, mamlakat, vaqt
            atributlari kabi), (2) polinomial regressiya yoki RandomForestRegressor kabi murakkabroq modellarni
            sinovdan o‘tkazish, (3) outlier yozuvlarni chuqur tahlil qilib, ularni filtrdan o‘tkazish yoki mos ravishda
            normallashtirish. Model Python dasturlash tili va scikit-learn kutubxonasi yordamida qurilgan bo‘lib,
            soddaligiga qaramasdan, AI amaliyotining ilk bosqichlari uchun real yechim sifatida qaraladi. Keyingi
            bosqichlarda ko‘p o‘zgaruvchili regressiya, ilg‘or feature engineering va cross-validation strategiyalari
            joriy etilishi modelning aniqligi va ishonchliligini oshiradi.
          </p>
        </div>
      </section>



      <section
        id="m3"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          C.M3
        </h2>

        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            <strong className="prose to-purple-600"> Modelni takomillashtirish va natijalarni taqqoslash </strong>Dastlabki chiziqli regressiya modelining
            samaradorligi cheklangan edi. Modelda faqat ikkita mustaqil o‘zgaruvchi (Quantity va UnitPrice)
            ishlatilgan bo‘lib, ma’lumotlar oldindan chuqur tozalanmagan, outlier’lar esa inobatga olinmagan edi.
            Baholash natijalariga ko‘ra, modelning o‘rtacha xatoliklari yuqori bo‘lib, aniqlik darajasi past bo‘ldi.
            Ayniqsa, R² qiymati atigi 0.2924 bo‘lib, xarid qiymatining faqat 29% qismini tushuntirib bera oldi. Bu
            esa modelda underfitting, ya’ni ma’lumotlar ichidagi murakkablikni o‘rgana olmaslik muammosi
            mavjudligini ko‘rsatdi. Modelni yaxshilash uchun TotalPrice ustunidagi outlier’lar aniqlanib, IQR usuli
            orqali chiqarib tashlandi, va model qayta o‘rgatildi.

          </p>

          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-4">
            Dastlabki va takomillashgan model baholash natijalari
          </h3>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Baholash mezoni
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Dastlabki model
                  </th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left text-gray-700 dark:text-gray-300">
                    Takomillashtirilgan model
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    MAE (O‘rtacha mutlaq xatolik)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    15.55
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    5.45
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    MSE (Kvadrat xatolik)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    3553.94
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    39.92
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    RMSE (Ildiz kvadrat xatolik)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    59.61
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    7.07
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    R² (Aniqlik ko‘efitsiyenti)
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    0.2924
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-gray-600 dark:text-gray-300">
                    0.3832
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          <p className="mt-6">
            Yuqoridagi jadvaldan ko‘rinib turibdiki, takomillashtirishdan so‘ng modelning barcha baholash
            mezonlarida sezilarli ijobiy o‘zgarishlar qayd etildi. MAE qiymati 65% ga kamaydi, bu esa model
            foydalanuvchi uchun sezilarli darajada aniqroq natijalar taqdim eta boshlaganini anglatadi. Ayniqsa
            RMSE — ya’ni kuchli xatoliklar ta’sirini ko‘rsatadigan ko‘rsatkich — 8 barobarga kamaydi. Bu esa
            ekstremal xatoliklar minimallashtirilganini bildiradi. R² qiymati 0.3832 ga ko‘tarilib, endi model xarid
            qiymatining 38% dispersiyasini tushuntirib bera olmoqda.
          </p>
          <img src="/model.png" alt="model" />
          <p>
            Mijozlarning shaxsiy ma'lumotlar xavfsizligi bo'yicha xavotirlari ham kuzatildi. GDPR talablariga to'liq
            rioya qilish va shaffoflik siyosatini joriy etish orqali mijozlar ishonchini qaytarib olish muvaffaqiyatli
            amalga oshirildi.
          </p>


          <p>
            Modelni takomillashtirish nafaqat matematik natijalarda, balki amaliy foydalanish imkoniyatlarida
            ham sezilarli ijobiy ta’sir ko‘rsatdi. Tijorat sohasi uchun xaridlar qiymatini bashorat qilishda
            endilikda model real va foydali yechim sifatida qaralmoqda. Taklif qilinadigan keyingi bosqichlar
            qatoriga — qo‘shimcha atributlar (Country, CustomerID, vaqt atributlari), murakkab algoritmlar
            (RandomForest, Gradient Boosting), va hyperparameter tuning metodlari kiritilishi mumkin.
            Shuningdek, modelni cross-validation, grid search, va feature engineering orqali chuqur sozlash
            orqali undan yanada yuqori aniqlik olish mumkin. Bu esa modelni ishlab chiqarishdagi real
            stsenariylarga yanada tayyor holga keltiradi.

          </p>
        </div>
      </section>

      <section
        id="d3"
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          C.D3
        </h2>
        <div className="prose text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            Ishlab chiqilgan sun’iy intellekt modeli o‘zining funksional imkoniyatlari va soddaligi bilan elektron tijorat,
            chakana savdo va onlayn xarid platformalarida faoliyat yurituvchi tashkilotlar uchun muhim yechim
            bo‘la oladi. Modelning asosiy vazifasi — tranzaksiyalarning umumiy qiymatini (TotalPrice) bashorat
            qilish orqali tashkilotlarga mijozlar xarid tendensiyalarini anglash, talabni rejalashtirish va moliyaviy
            nazoratni kuchaytirish imkonini taqdim etishdir. Loyihaning dastlabki bosqichlarida ma’lumotlar
            tozalanib, outlier (g‘ayritabiiy) qiymatlar olib tashlanganidan so‘ng, model sezilarli darajada
            yaxshilandi. Baholash natijalariga ko‘ra, ishlab chiqilgan chiziqli regressiya modeli 5.46 birlik MAE va
            0.38 R² ko‘rsatkichlariga erishdi. Bu esa, ayniqsa, o‘rtacha va past narxdagi savdolar uchun model
            yetarli aniqlikda ishlayotganini ko‘rsatadi. Tashkilotlar bu modeldan foydalanib mahsulot strategiyasini,
            mijozlar segmentatsiyasini va zaxira siyosatini yaxshiroq shakllantirish imkoniga ega bo‘ladilar. Model
            amaliy jihatdan quyidagi yo‘nalishlarda o‘z qiymatini ko‘rsatadi: birinchidan, marketingda mahsulot va
            mijoz toifalariga mos narx prognozlari asosida shaxsiy chegirmalar va dinamik narxlash strategiyalari
            ishlab chiqilishi mumkin. Ikkinchidan, logistika va zaxira boshqaruvida talabni prognoz qilish orqali
            ortiqcha zaxiralarni kamaytirish va ta’minot zanjirini soddalashtirish mumkin. Uchinchidan, moliyaviy
            rejalashtirishda model daromad prognozi, budjet tahlili va sof foyda hisobi kabi turli moliyaviy
            jarayonlarni optimallashtirishga xizmat qiladi.

          </p>

          <p>
            Biroq, modelning hozirgi holati ba’zi cheklovlarga ega. Jumladan, u asosan faqat ikki atribut —
            Quantity va UnitPrice ga asoslangan holda ishlamoqda. Bu esa xarid jarayonlarining murakkabligi va
            kontekstini yetarlicha aks ettirmaydi. Masalan, vaqt, mavsumiylik, mijoz tipi, geografik joylashuv va
            mahsulot toifasi kabi muhim omillar modelga kiritilmagan. InvoiceDate ustunidan oy, hafta kuni, vaqt
            oralig‘i kabi xususiyatlar (feature engineering) ajratilmagan, shuningdek, CustomerID, Country va
            ProductCategory kabi demografik atributlar e’tiborga olinmagan. Bundan tashqari, ishlatilgan chiziqli
            regressiya modeli faqat to‘g‘ridan-to‘g‘ri bog‘liqliklarni o‘rganadi va noaniq (non-linear) naqshlarni
            aniqlashda zaif. Mazkur cheklovlarni bartaraf etish va modelni takomillashtirish uchun bir nechta oddiy
            va samarali yondashuvlar tavsiya qilinadi. Birinchidan, vaqt va kategorik atributlardan foydalangan
            holda ko‘phadli regressiya (Polynomial Regression) joriy etilishi mumkin — bu oddiy chiziqli modelni
            yanada kuchaytiradi va murakkabroq naqshlarni tahlil qilishga yordam beradi. Ikkinchidan, yaqin
            qo‘shnilar regressiyasi (K-Nearest Neighbors Regressor) orqali model har bir holatni unga o‘xshash
            tarixiy yozuvlarga asoslanib prognozlaydi, bu usul ayniqsa mahsulot segmentlari orasida farqlilik yuqori
            bo‘lgan holatlarda foydalidir. Uchinchidan, qaror daraxti (Decision Tree Regressor) algoritmi orqali
            model tushunarli ifodalarga asoslanadi, har bir qaror nuqtasini vizual tarzda izohlash imkonini beradi va
            foydalanuvchi uchun soddaligi bilan ajralib turadi. Ushbu modellar murakkab kutubxonalarni talab
            qilmaydi, scikit-learn asosida to‘liq amalga oshiriladi va o‘rganish uchun ham qulay, ham samaralidir.
          </p>


          <p>
            Shu bilan birga, modelga kiritiladigan atributlar soni va sifati oshgani sari uning aniqligi ham ortadi.
            Masalan, har bir mijoz uchun sotuvlarning o‘rtacha qiymatini, xarid chastotasini yoki maxsus mahsulot
            toifalarini inobatga olgan holda qo‘shimcha xususiyatlar yaratilishi mumkin. Vaqt seriyalariga
            asoslangan yondashuvlar (masalan, seasonal trend decomposition yoki holt-winters smoothing) bilan
            birgalikda modelga mavsumiy o‘zgarishlar ham kiritilishi mumkin. Hozirgi modelning soddaligi uning
            afzalliklaridan biridir: u texnik tajribasi kam foydalanuvchilar tomonidan ham tushunarli va qo‘llashga
            yaroqli. Grafik chiqishlar (vizualizatsiyalar), real vaqtli bashoratlar va “what-if” ssenariylari orqali
            modeldan interaktiv tarzda foydalanish mumkin. Umuman olganda, ishlab chiqilgan bu yechim —
            sun’iy intellekt asosidagi soddalashtirilgan, lekin foydali va amaliy yechim bo‘lib, uni
            bosqichma-bosqich rivojlantirish orqali tashkilotlarning strategik qaror qabul qilish jarayoniga muhim
          </p>


          <p>
            Modelning amaliy qo‘llanilishini yanada mustahkamlash uchun Exploratory Data Analysis (EDA)
            doirasida ma’lumotlarning mavsumiy xususiyatlari va qo‘shimcha atributlarning potentsiali o‘rganildi.
            InvoiceDate ustunidan oylik savdo tendensiyalari tahlil qilinib, bayram oylari (noyabr-dekabr) da
            TotalPrice’ning sezilarli o‘sishi aniqlandi, bu marketing kampaniyalarini mavsumiy ravishda
            optimallashtirish uchun muhim ma’lumot beradi. Ushbu tahlil modelga vaqt atributlari (masalan, oy
            yoki hafta kuni) qo‘shish orqali bashorat aniqligini oshirish imkonini ko‘rsatdi, bu logistika va zaxira
            boshqaruvida talabni aniqroq prognoz qilishga yordam beradi. Shuningdek, Quantity va UnitPrice’dagi
            outlier’larning ta’siri tahlil qilinib, ularni olib tashlash modelning MAE ko‘rsatkichini 5.46 ga tushirgan
            bo‘lsa-da, CustomerID, Country yoki mahsulot toifasi kabi atributlarning yo‘qligi modelning murakkab
            xarid naqshlarini to‘liq aks ettira olmasligini ko‘rsatdi. Ushbu EDA natijalari modelni ko‘proq atributlar
            va murakkab algoritmlar (masalan, RandomForest) bilan boyitish orqali uning moliyaviy rejalashtirish
            va mijozlar segmentatsiyasidagi qiymatini oshirish mumkinligini ta’k
          </p>

      
        </div>
      </section>

      <div className="flex justify-between mt-8">
        <Link
          href="/topshiriq-b"
          className="group relative inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform border border-gray-200/50 dark:border-gray-700/50"
        >
          <ArrowRight className="mr-2 h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />{" "}
          Topshiriq B
        </Link>
        <Link
          href="/xulosa"
          className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
          <span className="relative z-10">Xulosa</span>
          <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  )
}
