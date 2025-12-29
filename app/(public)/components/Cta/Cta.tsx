import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"


export const CTA = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            Ready to Ace <br /> Your next interview?
                        </h2>
                        <p className="text-xl max-w-2xl mx-auto">
                            Join thousands of developers who transformed their interview skills and landed their dream jobs. Start practicing today.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="group" variant="secondary">
                            <Sparkles className="group-hover:rotate-12 transition-transform" />
                            Start Free Trial
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-border/50">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                            <div>Developers Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">94%+</div>
                            <div>Success Rate</div>
                        </div>                        
                        <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">500+</div>
                            <div>Companies Hiring</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}