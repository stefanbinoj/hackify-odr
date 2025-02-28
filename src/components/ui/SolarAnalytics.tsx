import { RiNavigationFill, RiPieChartFill } from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500"
        >
          RESOLV Analytics
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Turning disputes into friendly agreement.
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiNavigationFill}
          title="Timely Updates"
          description="Bots to communicate updates timely."
        />
        <StickerCard
          Icon={RiNavigationFill}
          title="Autonomous Verification"
          description="Smart Agents for autnomous cases base verification."
        />
        <StickerCard
          Icon={RiNavigationFill}
          title="Right Mediation"
          description="Right Mediator that comes to a friendly settlement."
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Full Analytics"
          description="Advanced analytics platform that shows details of various cases."
        />
      </div>
    </section>
  )
}
