import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"
import { MetricCard } from "./components";
import { CheckCircle, ClipboardCheck, Clock, TrendingUp } from "lucide-react";

export default async function DashboardPage() {

  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const interviews = await prisma.interview.findMany({
    where: { userId },
    select: { startedAt: true, completedAt: true, transcript: true }
  })

  const total = interviews.length;

  const completedInterviews = interviews.filter((i) => i.completedAt !== null);

  const totalDurationMs = completedInterviews.reduce((acc, i) => {
    return acc + (i.completedAt!.getTime() - i.startedAt.getTime())
  }, 0);

  const avgDuration = completedInterviews.length ?
    Math.round(totalDurationMs / completedInterviews.length / 1000 / 60)
    : 0;

  const successRate = total > 0 ? 100 : 0;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-3 rounded-md bg-gray-900 p-6 text-white border-white">
        <MetricCard
          icon={<CheckCircle className="text-green-400" />}
          title="Completed"
          value={completedInterviews.length}
        />

        <MetricCard
          icon={<ClipboardCheck className="text-yellow-400" />}
          title="Total"
          value={total}
        />

        <MetricCard
          icon={<Clock className="text-purple-400" />}
          title="Average time"
          value={`${avgDuration} min`}
        />

        <MetricCard
          icon={<TrendingUp className="text-blue-400" />}
          title="Success rate"
          value={successRate}
        />
      </div>


      <div>
        <div className="mt-4 p-4 bg-blue-600/20 border-blue-400/30 rounded-md">
          <div className="text-sm text-blue-200">
            <strong>💡 Advice:</strong> Our AI interviewer is here to help
            you prepare for your next interview. It provides you with a 
            personalized and interactive experience, tailored to your needs and
            preferences.
          </div>
        </div>
      </div>
    </div>
  )
}
