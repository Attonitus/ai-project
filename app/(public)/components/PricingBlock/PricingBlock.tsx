import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { pricingPlans } from "./pricing.data"
import { Check, Stars } from "lucide-react"
import { Button } from "@/components/ui/button"

export const PricingBlock = () => {
    return (
        <section className="bg-gray-800" id="pricing">

            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl py-12 md:text-4xl font-extrabold">
                        Choose your plan
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Start free, upgrade when your are ready to ace every interview
                    </p>

                </div>


                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {
                        pricingPlans.map((plan, index) => (
                            <Card key={index} className={`relative group border-0 px-2 py-6
                        ${plan.popular ? "rounded-md border bg-gray-900 text-indigo-600" : "rounded-md border border-gray-400"}`}>
                                {
                                    plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-white rounded-full font-medium px-4 py-2 flex items-center gap-2">
                                                <Stars className="w-4 h-4" />
                                                Most popular
                                            </span>
                                        </div>
                                    )
                                }
                                <CardHeader className="text-center pb-4">
                                    <CardTitle className="text-2xl font-bold">
                                        {plan.name}
                                    </CardTitle>
                                    <div className="mt-4">
                                        <span className="text-5xl font-bold">${plan.price}</span>
                                    </div>

                                    <p className="mt-2 text-sm">
                                        {plan.description}
                                    </p>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {
                                            plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-emerald-400" />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <Button size="lg" className={`w-full font-semibold hover:text-gray-950
                                        ${plan.popular ? "bg-indigo-500" : "bg-purple-600"}`}>
                                        {plan.buttonText}
                                    </Button>

                                </CardContent>
                            </Card>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}