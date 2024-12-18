import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function PickupCard() {
  return (
    <Card className="w-full max-w-sm h-full flex items-center rounded-none justify-center my-4">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-x-4 w-full justify-center">
          <div className="bg-primary p-3 rounded-full">
            <Calendar className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-sm font-normal text-nowrap py-2">Schedule Pickup</h2>
        </div>
      </CardContent>
    </Card>
  )
}