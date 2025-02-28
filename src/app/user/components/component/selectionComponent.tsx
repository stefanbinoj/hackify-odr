import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react"

export function ToggleGroupDemo() {
  const [active, setActive] = useState<string>("bold")

  return (
    <ToggleGroup type="single" value={active} onValueChange={setActive}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <h1
          className={`h-8 w-24 border-b-2 ${
            active === "bold" ? "border-b-orange-500" : "border-b-transparent"
          }`}
        >
          Overview
        </h1>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <h1
          className={`h-8 w-24 border-b-2 ${
            active === "italic" ? "border-b-orange-500" : "border-b-transparent"
          }`}
        >
          Ongoing
        </h1>
      </ToggleGroupItem>
      <ToggleGroupItem value="italicz" aria-label="Toggle italic">
        <h1
          className={`h-8 w-24 border-b-2 ${
            active === "italicz"
              ? "border-b-orange-500"
              : "border-b-transparent"
          }`}
        >
          Closed
        </h1>
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
        <h1
          className={`h-8 w-24 border-b-2 shadow-2xl ${
            active === "strikethrough"
              ? "border-b-orange-500"
              : "border-b-transparent"
          }`}
        >
          Rejected
        </h1>
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
