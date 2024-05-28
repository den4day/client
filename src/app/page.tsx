import CategoriesSection from '@/components/sections/home/categories/Categories'
import CreatorSection from '@/components/sections/home/creator/Creator'
import DigestSection from '@/components/sections/home/digest/Digest'
import DiscoverSection from '@/components/sections/home/discover/Discover'
import FaqSection from '@/components/sections/home/faq/Faq'
import HeroSection from '@/components/sections/home/hero/Hero'
import MushroomsSection from '@/components/sections/home/mushrooms/Mushrooms'
import TrendSection from '@/components/sections/home/trend/Trend'

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<TrendSection />
			<CreatorSection />
			<CategoriesSection />
			<DiscoverSection />
			<MushroomsSection />
			<FaqSection />
			<DigestSection />
		</>
	)
}
