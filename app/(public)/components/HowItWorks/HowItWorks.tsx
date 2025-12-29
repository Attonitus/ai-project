import { howItWorksData } from "./how-works.data"

export const HowItWorks = () => {
    return (
        <section
            className="py-24"
            id="how-it-works"
        >
            <div className="container mx-auto-px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
                    <p className="text-xl max-w-2xl mx-auto">
                        Get interview in just a few simple steps
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
                {
                    howItWorksData.map((step, index) => (
                        <div key={index} className="relative group" >
                            <div className="border rounded-2xl p-8 h-full">
                                <div className="bg-indigo-900 flex items-center justify-center w-16 h-16 rounded-2xl mb-6">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>

                                <div className="text-white bg-indigo-800 absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {step.title}
                                </h3>
                                <p className="">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}