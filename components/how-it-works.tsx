"use client"

import { Rocket, Share2, Shield, Activity, CheckCircle } from "lucide-react"

const steps = [
    {
        icon: Rocket,
        number: "01",
        title: "Create Your Campaign",
        description:
            "Set your funding goal and share your story. Add photos and details to help donors understand your cause.",
    },
    {
        icon: Share2,
        number: "02",
        title: "Share With Community",
        description:
            "Spread the word through social media and email. Engage with supporters and answer questions.",
    },
    {
        icon: Shield,
        number: "03",
        title: "Receive Contributions",
        description:
            "Accept donations through crypto or traditional payment. All transactions recorded on blockchain.",
    },
    {
        icon: Activity,
        number: "04",
        title: "Track Your Progress",
        description:
            "Monitor donations in real-time. Share updates and milestones with your supporters.",
    },
    {
        icon: CheckCircle,
        number: "05",
        title: "Withdraw Funds",
        description:
            "Access your funds instantly as you reach goals. Use them to make the impact you promised.",
    },
]

export function HowItWorks() {
    return (
        <section className="py-12 sm:py-16 bg-background" id="how-it-works">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                        How It Works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Simple steps to launch your campaign and start making an impact
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
                    {steps.map((step) => {
                        const Icon = step.icon
                        return (
                            <div key={step.number} className="group">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-4xl font-bold text-muted-foreground/20">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}