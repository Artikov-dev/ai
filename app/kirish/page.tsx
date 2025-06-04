import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Kirish() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Kirish</h1>
      </section>

      <section className="prose text-gray-600 max-w-none" w-full >
        <p className="mb-4 w-5  ">
          Ushbu hisobotda sun’iy intellekt (AI) texnologiyasining asosiy turlari, yo‘nalishlari va ularning turli
          sohalardagi qo‘llanilishi batafsil o‘rganiladi. AI tizimlarining afzalliklari bilan bir qatorda, ehtimoliy
          xavflari, cheklovlari, shuningdek, axloqiy va huquqiy jihatlari ham chuqur tahlil qilinadi. 
          mijozlarni segmentatsiyalash

        </p>
        <p></p>
        <p>
          Hisobotning amaliy qismida esa UCI Machine Learning Repository'dan olinga, mahsulot tavsiya tizimini ishlab
          chiqish, savdo hajmini prognozlash hamda g'ayrioddiy holatlarni aniqlashga qaratilgan sun'iy intellekt yechimi
          ishlab chiqildi. Ushbu yechim Python dasturlash tilida, ayniqsa statsmodels kutubxonasi asosida qurilgan
          bo'lib, chiziqli va logistik regressiya modellaridan samarali foydalanildi. Modellar aniqlik, xatolik va
          prognozlash ko'rsatkichlari asosida baholanib, keyingi bosqichlarda takomillashtirildi.
        </p>
        <p>
          Mazkur loyiha nafaqat texnik jihatdan AI modellarini yaratish ko'nikmasini rivojlantiradi, balki ularning real
          biznesdagi foydaliligi, ma'lumotlar sifati, shuningdek, foydalanuvchilarga ta'siri nuqtai nazaridan ham chuqur
          tahlil imkonini beradi. Bu hisobot orqali sun'iy intellektni amaliyotga joriy qilishda zarur bo'lgan nazariy
          bilimlar va amaliy tajriba uyg'unlashgan holda yoritiladi.
        </p>
      </section>

      <div className="flex justify-center mt-8">
        <Link
          href="/topshiriq-a"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Topshiriq A <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
