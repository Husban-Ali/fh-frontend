import { MapPinHouse } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BranchCard() {
  return (
    <Card className="w-full max-w-sm h-full flex items-center rounded-none justify-center my-4">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-x-4 justify-center">
          <div className="bg-primary p-3 rounded-full">
            <MapPinHouse className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-sm font-normal text-nowrap py-2">Branch Locator</h2>
        </div>
      </CardContent>
    </Card>
  )
}