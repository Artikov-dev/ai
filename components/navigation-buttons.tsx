"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface NavigationButtonsProps {
  prevPage?: string
  prevLabel?: string
  nextPage?: string
  nextLabel?: string
}

export default function NavigationButtons({ prevPage, prevLabel, nextPage, nextLabel }: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-8">
      {prevPage ? (
        <Link
          href={prevPage}
          className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
        >
          <ArrowRight className="mr-2 h-5 w-5 rotate-180" /> {prevLabel || "Orqaga"}
        </Link>
      ) : (
        <div></div>
      )}

      {nextPage ? (
        <Link
          href={nextPage}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          {nextLabel || "Keyingi"} <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  )
}
