import React,{ useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function RateCalculator() {
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState(null)
  
  // Set the rate per kg (e.g., $2.5 per kg)
  const RATE_PER_KG = 2.5

  const handleCalculate = () => {
    const weightInKg = parseFloat(weight)
    if (!isNaN(weightInKg) && weightInKg > 0) {
      const calculatedAmount = weightInKg * RATE_PER_KG
      setResult(calculatedAmount)
    } else {
      setResult(null)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Rate Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <Button onClick={handleCalculate} className="w-full">
            Calculate
          </Button>
          {result !== null && (
            <div className="mt-4 p-4 bg-primary rounded-md">
              <p className="text-center text-white">
                Amount: <span className="font-bold text-white">${result.toFixed(2)}</span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

