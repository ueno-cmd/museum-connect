'use client'

import {useState, useMemo} from 'react'
import Image from 'next/image'
import {getActiveExhibitions} from '@/data/exhibitions'
import ExhibitionList from '@/components/ExhibitionList'
import FilterControls from '@/components/FilterControls'
import {FilterOptions} from '@/types/exhibition'
import {filterExhibitions} from '@/utils/exhibition'

export default function Home() {
    const [filters, setFilters] = useState<FilterOptions>({
        categories: [],
        regions: []
    })

    const allExhibitions = getActiveExhibitions()

    const filteredExhibitions = useMemo(() => {
        return filterExhibitions(allExhibitions, filters)
    }, [allExhibitions, filters])

    return (
        <div className="min-h-screen bg-gray-50">
            {/* ヒーローセクション */}
            <section className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                    src="/pexels-clement-proust-363898785-31262340.jpg"
                    alt="博物館のヒーロー画像"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            ミュージアムコネクト
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            ここはワクワクできる博物館紹介サイト<br/>
                            期間限定の魅力的な企画展を発見し、新しい知識と感動に出会おう
                        </p>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-8">
                <FilterControls filters={filters} onFilterChange={setFilters}/>

                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">
                            開催中の企画展
                            <span className="ml-2 text-base font-normal text-gray-500">
                ({filteredExhibitions.length}件)
              </span>
                        </h2>
                    </div>
                    <ExhibitionList exhibitions={filteredExhibitions}/>
                </div>
            </main>
        </div>
    )
}
